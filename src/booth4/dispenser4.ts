import * as utils from '@dcl/ecs-scene-utils'
import * as UI from '@dcl/ui-scene-utils'
import * as boothUI from './ui4'

import { getUserData, UserData } from '@decentraland/Identity'
import { getCurrentRealm, Realm } from '@decentraland/EnvironmentAPI'
import { PlayCloseSound4 } from './sounds4'
import { signedFetch } from '@decentraland/SignedFetch'

export const sceneMessageBus = new MessageBus()
const timeDelay = 5 * 60 * 1000 // Delay before being able to claim a POAP in milliseconds

/**
 *
 * @param {TranformConstructorArgs} transform position, rotation and scale of the booth
 * @param {string} poapServer server to use
 * @param {string} eventUUID ID of the event
 *
 */
export function createDispenser4(
  transform: TranformConstructorArgs,
  eventUUID: string,
  poapServer?: string
) {
  const createdTime = new Date()
  const serverURL: string = poapServer
    ? poapServer
    : 'poap-api.decentraland.org'

  let alreadyAttempted: boolean = false

  const entity4 = new Entity()
  engine.addEntity(entity4)
  eventUUID = eventUUID

  entity4.addComponent(new GLTFShape('models/poap/POAP_dispenser.glb'))
  entity4.addComponent(new Transform(transform))

  const idleAnim = new AnimationState('Idle_POAP', { looping: true })
  entity4.addComponent(new Animator())
  entity4.getComponent(Animator).addClip(idleAnim)
  entity4
    .getComponent(Animator)
    .addClip(new AnimationState('Action_POAP', { looping: false }))
  idleAnim.play()

  const button4 = new Entity()
  button4.addComponent(new GLTFShape('models/poap/POAP_button.glb'))
  button4.addComponent(new Animator())
  button4
    .getComponent(Animator)
    .addClip(new AnimationState('Button_Action', { looping: false }))
  button4.setParent(entity4)
  button4.addComponent(
    new OnPointerDown(
      (_e) => {
        button4.getComponent(Animator).getClip('Button_Action').play()
        //sceneMessageBus.emit('activatePoap', {})
        void makeTransaction()
      },
      { hoverText: 'Get Attendance Token' }
    )
  )
  engine.addEntity(button4)

  sceneMessageBus.on('activatePoap', () => {
    activate()
  })

  function activate(): void {
    const anim = entity4.getComponent(Animator)

    anim.getClip('Action_POAP').play()

    entity4.addComponentOrReplace(
      new utils.Delay(4000, () => {
        anim.getClip('Action_POAP').stop()

        anim.getClip('Idle_POAP').play()
      })
    )
  }

  async function getCaptcha(): Promise<string> {
    const captchaUUIDQuery = await signedFetch(`https://${serverURL}/captcha`, {
      method: 'POST'
    })
    const json = JSON.parse(captchaUUIDQuery.text)
    return json.data.uuid
  }

  async function makeTransaction() {
    const userData = await getUserData()

    // no wallet
    if (!userData || !userData.hasConnectedWeb3) {
      log('no wallet')
      PlayCloseSound4()

      boothUI.metamask4()
      return
    }

    // 5 minutes timer before claiming
    if (+createdTime > +new Date() - timeDelay) {
      PlayCloseSound4()
      boothUI.timerBeforeClaim4(createdTime, timeDelay)
      return
    }

    if (alreadyAttempted) {
      // already attempted
      PlayCloseSound4()
      boothUI.alreadyClaimed4()
      return
    }

    alreadyAttempted = true
    const realm = await getCurrentRealm()

    try {
      const captchaUUID = await getCaptcha()
      const captchaResult = await boothUI.captcha4(serverURL, captchaUUID)
      if (captchaResult === undefined) {
        alreadyAttempted = false
        return
      }
      const response = await claimCall(captchaResult, userData, realm)
      log(response)
      log(response.status)
      const json = await response.json()
      log(json)
      if (response.status === 200) {
        boothUI.viewSuccessMessage4(
          json.data.event.name,
          json.data.event.image_url,
          1024,
          1024
        )

        sceneMessageBus.emit('activatePoap', {})
      } else {
        PlayCloseSound4()
        switch (json.error) {
          case 'Address already claimed a code for this event':
            UI.displayAnnouncement(`You already claimed this event`, 3)

            break

          default:
            alreadyAttempted = false
            UI.displayAnnouncement(
              `Oops, there was an error: "${json.error}"`,
              3
            )
            break
        }
      }
    } catch {
      alreadyAttempted = false
      log('Error fetching from POAP server ', serverURL)
    }

    return
  }

  async function claimCall(
    captchaResult: string,
    userData: UserData,
    realm: Realm
  ) {
    const response = await fetch(`https://${serverURL}/claim/${eventUUID}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        address: userData.publicKey,
        catalyst: realm.domain,
        room: realm.room,
        captcha: captchaResult
      })
    })
    return response
  }

  return entity4
}
