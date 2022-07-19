import { pivotScene_1 } from "./1pivot"

export function addBuilding_1() {
    const building_1 = new Entity()
    building_1.addComponent(new GLTFShape("models/museum/building.glb"))
    // building.addComponent(new Transform({scale:new Vector3(2,2,2)}))
    building_1.setParent(pivotScene_1)
}