const lorry = new Entity()
lorry.addComponent(new GLTFShape("models/environment/lorry2.glb"))
lorry.addComponent(new Transform({position: new Vector3(-3,4,35), rotation: Quaternion.Euler(0,0, 0),scale: new Vector3(10,10,10)}))

engine.addEntity(lorry)

// -3,4,35   30,4,95