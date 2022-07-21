import config from "../config"

export const pivotScene3 = new Entity()


export function setSceneOrientation3() {
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

    pivotScene3.addComponent(new Transform({
        // position: new Vector3(8, 0, 8),
        position: new Vector3(18,0,-75),
        rotation: Quaternion.Euler(0, yRotation, 0),
        scale: new Vector3(4,3,4)
    }))
    engine.addEntity(pivotScene3)
}

// -126.01,0.88,-25.14