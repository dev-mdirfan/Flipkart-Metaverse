import * as utils from '@dcl/ecs-scene-utils'
import config from '../config'
import { pivotScene3 } from './pivot3'

export function addVideoScreen3() {


    const videoClip = new VideoClip(config.videoScreen.src)
    const videoTexture = new VideoTexture(videoClip)

    const screenMaterial = new Material()
    screenMaterial.albedoTexture = videoTexture
    screenMaterial.specularIntensity = 0
    screenMaterial.roughness = 1
    screenMaterial.metallic = 0

    const screen3 = new Entity()
    screen3.addComponent(new PlaneShape())
    screen3.addComponent(
        new Transform({
            position: new Vector3(0, 4.39262, -5.74674),
            rotation: Quaternion.Euler(103-90, 0, 0),
            scale: Vector3.Zero()
        })
    )
    screen3.setParent(pivotScene3)
    screen3.addComponent(screenMaterial)

    videoTexture.playing = false
    videoTexture.loop = true

    const triggerEntity3 = new Entity()
    triggerEntity3.addComponent(new Transform({
        position: new Vector3(0, 2, 0)
    }))
    let triggerBox = new utils.TriggerBoxShape(new Vector3(14, 4, 14), Vector3.Zero())


    let xScale = 1

    if (config.videoScreen.width > config.videoScreen.height) {
        xScale = config.videoScreen.width / config.videoScreen.height
    }
    screen3.getComponent(Transform).scale.set(3.5 * xScale, 3.5, 1)

    triggerEntity3.addComponent(
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
    triggerEntity3.setParent(pivotScene3)
}
