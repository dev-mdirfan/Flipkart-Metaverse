import { pivotScene2 } from "./pivot2"

export function addBuilding2() {
    const building2 = new Entity()
    building2.addComponent(new GLTFShape("models/store/store.glb"))
    building2.setParent(pivotScene2)


    let photoMachine = new Entity()
    photoMachine.addComponent(new GLTFShape("models/store/photo_machine.glb"))
    photoMachine.setParent(pivotScene2)

    //PHOTO MACHINE ANIMATION
    photoMachine.addComponent(new Animator())
    let photoAnim1 = new AnimationState("pmPlay_1")
    let photoAnim2 = new AnimationState("pmPlay_2")

    photoMachine.getComponent(Animator).addClip(photoAnim1)
    photoMachine.getComponent(Animator).addClip(photoAnim2)

    photoAnim1.playing = true
    photoAnim2.playing = true
}