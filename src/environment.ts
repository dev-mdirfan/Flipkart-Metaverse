const character1 = new Entity()
character1.addComponent(new GLTFShape("models/characters/character1.glb"))
character1.addComponent(new Transform({position: new Vector3(3,0,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(1.2,1.2,1.2)}))
engine.addEntity(character1)

const character2 = new Entity()
character2.addComponent(new GLTFShape("models/characters/character2.glb"))
character2.addComponent(new Transform({position: new Vector3(6,0,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(1.2,1.2,1.2)}))
engine.addEntity(character2)

const character3 = new Entity()
character3.addComponent(new GLTFShape("models/characters/character3.glb"))
character3.addComponent(new Transform({position: new Vector3(9,0,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(1.2,1.2,1.2)}))
engine.addEntity(character3)

const character4 = new Entity()
character4.addComponent(new GLTFShape("models/environment/Female_Shoot_salvar.glb"))
character4.addComponent(new Transform({position: new Vector3(0,0,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(1.2,1.2,1.2)}))
engine.addEntity(character4)

const applewatch = new Entity()
applewatch.addComponent(new GLTFShape("models/store assets/watch.glb"))
applewatch.addComponent(new Transform({position: new Vector3(-2,2,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(4,4,4)}))
engine.addEntity(applewatch)

const iphone13pro = new Entity()
iphone13pro.addComponent(new GLTFShape("models/store assets/iphone13pro.glb"))
iphone13pro.addComponent(new Transform({position: new Vector3(-6,4,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(2,2,2)}))
engine.addEntity(iphone13pro)

const cinemacamera = new Entity()
cinemacamera.addComponent(new GLTFShape("models/store assets/cinema camera.glb"))
cinemacamera.addComponent(new Transform({position: new Vector3(-9,4,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(4,4,4)}))
engine.addEntity(cinemacamera)

const mk2 = new Entity()
mk2.addComponent(new GLTFShape("models/store assets/mk2-turntable-old.glb"))
mk2.addComponent(new Transform({position: new Vector3(-9,4,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(4,4,4)}))
engine.addEntity(mk2)

// const t = new Entity()
// t.addComponent(new GLTFShape("models/store/photo_machine.glb"))
// t.addComponent(new Transform({position: new Vector3(-6,0,10), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(1.2,1.2,1.2)}))
// engine.addEntity(t)

// -3,4,35   30,4,95

// 0,0,47