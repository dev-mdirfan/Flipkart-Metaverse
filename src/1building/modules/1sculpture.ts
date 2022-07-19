import config from "../1config"
import { pivotScene_1 } from "./1pivot"

export function addSculpture_1() {
    const sculpture_1 = new Entity()
    sculpture_1.addComponent(new GLTFShape(config.sculpture.modelSrc))
    sculpture_1.addComponent(new Transform({
        position: config.sculpture.position
    }))
    sculpture_1.setParent(pivotScene_1)
}