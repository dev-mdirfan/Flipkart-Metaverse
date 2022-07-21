import config from "../config"

export const pivotScene4 = new Entity()


export function setSceneOrientation4() {
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

    pivotScene4.addComponent(new Transform({
        // position: new Vector3(8, 0, 8),
        position: new Vector3(82,0,-8),
        // rotation: Quaternion.Euler(0, yRotation, 0),
        rotation: Quaternion.Euler(0,270, 0),
        scale: new Vector3(4,3,4)
    }))
    engine.addEntity(pivotScene4)
}

// -126.01,0.88,-25.14