import { pivotScene4 } from "./pivot4"

export function addBuilding4() {
    const building4 = new Entity()
    building4.addComponent(new GLTFShape("models/store/store.glb"))
    building4.setParent(pivotScene4)


    let photoMachine4 = new Entity()
    photoMachine4.addComponent(new GLTFShape("models/store/photo_machine.glb"))
    photoMachine4.setParent(pivotScene4)

    //PHOTO MACHINE ANIMATION
    photoMachine4.addComponent(new Animator())
    let photoAnim1 = new AnimationState("pmPlay_1")
    let photoAnim2 = new AnimationState("pmPlay_2")

    photoMachine4.getComponent(Animator).addClip(photoAnim1)
    photoMachine4.getComponent(Animator).addClip(photoAnim2)

    photoAnim1.playing = true
    photoAnim2.playing = true
}