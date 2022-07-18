// Open dialog sound
export const openDialogSound2 = new Entity()
openDialogSound2.addComponent(new Transform())
openDialogSound2.addComponent(
  new AudioSource(new AudioClip('sounds/navigationForward.mp3'))
)
openDialogSound2.getComponent(AudioSource).volume = 0.5
engine.addEntity(openDialogSound2)
openDialogSound2.setParent(Attachable.AVATAR)

// Close dialog sound
export const closeDialogSound2 = new Entity()
closeDialogSound2.addComponent(new Transform())
closeDialogSound2.addComponent(
  new AudioSource(new AudioClip('sounds/navigationBackward.mp3'))
)
closeDialogSound2.getComponent(AudioSource).volume = 0.5
engine.addEntity(closeDialogSound2)
closeDialogSound2.setParent(Attachable.AVATAR)

export const coinSound2 = new Entity()
coinSound2.addComponent(new Transform())
coinSound2.addComponent(
  new AudioSource(new AudioClip('sounds/star-collect.mp3'))
)
coinSound2.getComponent(AudioSource).volume = 0.5
coinSound2.getComponent(AudioSource).loop = false
engine.addEntity(coinSound2)
coinSound2.setParent(Attachable.AVATAR)

export function PlayOpenSound() {
  openDialogSound2.getComponent(AudioSource).playOnce()
}

export function PlayCloseSound() {
  closeDialogSound2.getComponent(AudioSource).playOnce()
}

export function PlayCoinSound() {
  coinSound2.getComponent(AudioSource).playOnce()
}
