// Open dialog sound
export const openDialogSound3 = new Entity()
openDialogSound3.addComponent(new Transform())
openDialogSound3.addComponent(
  new AudioSource(new AudioClip('sounds/navigationForward.mp3'))
)
openDialogSound3.getComponent(AudioSource).volume = 0.5
engine.addEntity(openDialogSound3)
openDialogSound3.setParent(Attachable.AVATAR)

// Close dialog sound
export const closeDialogSound3 = new Entity()
closeDialogSound3.addComponent(new Transform())
closeDialogSound3.addComponent(
  new AudioSource(new AudioClip('sounds/navigationBackward.mp3'))
)
closeDialogSound3.getComponent(AudioSource).volume = 0.5
engine.addEntity(closeDialogSound3)
closeDialogSound3.setParent(Attachable.AVATAR)

export const coinSound3 = new Entity()
coinSound3.addComponent(new Transform())
coinSound3.addComponent(
  new AudioSource(new AudioClip('sounds/star-collect.mp3'))
)
coinSound3.getComponent(AudioSource).volume = 0.5
coinSound3.getComponent(AudioSource).loop = false
engine.addEntity(coinSound3)
coinSound3.setParent(Attachable.AVATAR)

export function PlayOpenSound3() {
  openDialogSound3.getComponent(AudioSource).playOnce()
}

export function PlayCloseSound3() {
  closeDialogSound3.getComponent(AudioSource).playOnce()
}

export function PlayCoinSound3() {
  coinSound3.getComponent(AudioSource).playOnce()
}
