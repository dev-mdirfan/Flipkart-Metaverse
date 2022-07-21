import config from "../1config"

export const pivotScene_1 = new Entity()


export function setSceneOrientation_1() {
    let yRotation = 0

    switch (config.sceneOrientation) {
        case "NORTH":
            yRotation = 0
            break

        case "EAST":
            yRotation = 90
            break

        case "WEST":
            yRotation = -90
            break

        case "SOUTH":
            yRotation = 180
            break
    }

    pivotScene_1.addComponent(new Transform({
        // position: new Vector3(8, 0, 8),
        position: new Vector3(0,0,50),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: new Vector3(4,4,4)
    }))
    engine.addEntity(pivotScene_1)
}
// 16,0,80   82,0,142