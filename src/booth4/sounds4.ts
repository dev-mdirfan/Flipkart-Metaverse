// Open dialog sound
export const openDialogSound4 = new Entity()
openDialogSound4.addComponent(new Transform())
openDialogSound4.addComponent(
  new AudioSource(new AudioClip('sounds/navigationForward.mp3'))
)
openDialogSound4.getComponent(AudioSource).volume = 0.5
engine.addEntity(openDialogSound4)
openDialogSound4.setParent(Attachable.AVATAR)

// Close dialog sound
export const closeDialogSound4 = new Entity()
closeDialogSound4.addComponent(new Transform())
closeDialogSound4.addComponent(
  new AudioSource(new AudioClip('sounds/navigationBackward.mp3'))
)
closeDialogSound4.getComponent(AudioSource).volume = 0.5
engine.addEntity(closeDialogSound4)
closeDialogSound4.setParent(Attachable.AVATAR)

export const coinSound4 = new Entity()
coinSound4.addComponent(new Transform())
coinSound4.addComponent(
  new AudioSource(new AudioClip('sounds/star-collect.mp3'))
)
coinSound4.getComponent(AudioSource).volume = 0.5
coinSound4.getComponent(AudioSource).loop = false
engine.addEntity(coinSound4)
coinSound4.setParent(Attachable.AVATAR)

export function PlayOpenSound4() {
  openDialogSound4.getComponent(AudioSource).playOnce()
}

export function PlayCloseSound4() {
  closeDialogSound4.getComponent(AudioSource).playOnce()
}

export function PlayCoinSound4() {
  coinSound4.getComponent(AudioSource).playOnce()
}
