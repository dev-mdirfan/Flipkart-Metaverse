import * as utils from '@dcl/ecs-scene-utils'
import { pivotScene_1 } from './1pivot'

class elevatorSystem {

    startMove = false
    platform_1 = new Entity()

    firstFloorPos = new Vector3(0, 0.3, -4.8)
    secondFloorPos = new Vector3(0, 7.5, -4.8)

    constructor() {
        this.platform_1.addComponent(new GLTFShape("models/museum/elevator.glb"))
        this.platform_1.addComponent(new Transform({
            position: new Vector3(0, 0.3, -4.8)
        }))

        this.platform_1.setParent(pivotScene_1)
    }

    movePlatform() {
        log("move platform up and down in sequence")
        this.platform_1.addComponent(new utils.MoveTransformComponent(this.firstFloorPos, this.secondFloorPos, 3, null, utils.InterpolationType.EASEOUTSINE))

        let delayEnt_1 = new Entity()
        delayEnt_1.addComponent(new utils.Delay(6000, () => {
            this.platform_1.addComponent(new utils.MoveTransformComponent(this.secondFloorPos, this.firstFloorPos, 3, null, utils.InterpolationType.EASEOUTSINE))
        }))
        engine.addEntity(delayEnt_1)
    }
    update(dt: number) {

        let date = new Date().getUTCSeconds()

        //log(date)

        if (date % 12 === 0) {
            if (!this.startMove) {
                this.startMove = true
                log(date)
                this.movePlatform()
            }
        }
        else {
            this.startMove = false
        }
    }
}

export function addElevator_1() {
    const elevatorSys = new elevatorSystem()


    const triggerEntity_1 = new Entity()
    triggerEntity_1.addComponent(new Transform({
        position: new Vector3(0, 7.5, 0)
    }))
    let triggerBox = new utils.TriggerBoxShape(new Vector3(14, 15, 14), Vector3.Zero())

    triggerEntity_1.addComponent(
        new utils.TriggerComponent(
            triggerBox, //shape
            {
                onCameraEnter: () => {
                    engine.addSystem(elevatorSys)
                },

                onCameraExit: () => {
                    engine.removeSystem(elevatorSys)
                },
                enableDebug: false
            }
        )
    )
    triggerEntity_1.setParent(pivotScene_1)
}