import * as utils from '@dcl/ecs-scene-utils'
import config from '../config'
import { pivotScene2 } from './pivot2'

export function addVideoScreen2() {


    const videoClip = new VideoClip(config.videoScreen.src)
    const videoTexture = new VideoTexture(videoClip)

    const screenMaterial = new Material()
    screenMaterial.albedoTexture = videoTexture
    screenMaterial.specularIntensity = 0
    screenMaterial.roughness = 1
    screenMaterial.metallic = 0

    const screen2 = new Entity()
    screen2.addComponent(new PlaneShape())
    screen2.addComponent(
        new Transform({
            position: new Vector3(0, 4.39262, -5.74674),
            rotation: Quaternion.Euler(103-90, 0, 0),
            scale: Vector3.Zero()
        })
    )
    screen2.setParent(pivotScene2)
    screen2.addComponent(screenMaterial)

    videoTexture.playing = false
    videoTexture.loop = true

    const triggerEntity2 = new Entity()
    triggerEntity2.addComponent(new Transform({
        position: new Vector3(0, 2, 0)
    }))
    let triggerBox = new utils.TriggerBoxShape(new Vector3(14, 4, 14), Vector3.Zero())


    let xScale = 1

    if (config.videoScreen.width > config.videoScreen.height) {
        xScale = config.videoScreen.width / config.videoScreen.height
    }
    screen2.getComponent(Transform).scale.set(3.5 * xScale, 3.5, 1)

    triggerEntity2.addComponent(
        new utils.TriggerComponent(
            triggerBox, //shape
            {
                onCameraEnter: () => {
                    videoTexture.playing = true
                },

                onCameraExit: () => {
                    videoTexture.playing = false
                    //screen.getComponent(Transform).scale.setAll(0)
                },
                enableDebug: false
            }
        )
    )
    triggerEntity2.setParent(pivotScene2)
}
