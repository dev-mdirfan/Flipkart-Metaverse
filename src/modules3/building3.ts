import { pivotScene3 } from "./pivot3"

export function addBuilding3() {
    const building3 = new Entity()
    building3.addComponent(new GLTFShape("models/store/store.glb"))
    building3.setParent(pivotScene3)


    let photoMachine = new Entity()
    photoMachine.addComponent(new GLTFShape("models/store/photo_machine.glb"))
    photoMachine.setParent(pivotScene3)

    //PHOTO MACHINE ANIMATION
    photoMachine.addComponent(new Animator())
    let photoAnim1 = new AnimationState("pmPlay_1")
    let photoAnim2 = new AnimationState("pmPlay_2")

    photoMachine.getComponent(Animator).addClip(photoAnim1)
    photoMachine.getComponent(Animator).addClip(photoAnim2)

    photoAnim1.playing = true
    photoAnim2.playing = true
}