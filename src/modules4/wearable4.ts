import config from "../config"
import { pivotScene4 } from "./pivot4"

export async function addWearable4() {
    for (let item of config.wearable) {
        let wearableItem4 = new Entity()
        wearableItem4.addComponent(new GLTFShape(item.model))
        wearableItem4.addComponent(new Transform({
            position: item.position,
            rotation: item.rotation,
            scale: new Vector3(1.1, 1.1, 1.1)
        }))
        wearableItem4.setParent(pivotScene4)

        wearableItem4.addComponent(new OnPointerDown(() => {},
            {
                hoverText: item.name
            }))

        if (item.link === null) {
            wearableItem4.getComponent(OnPointerDown).hoverText = "INFO N/A"
        }
        else {
            //wearableItem.getComponent(OnPointerDown).hoverText = "INFO"
            wearableItem4.getComponent(OnPointerDown).callback = () => {
                if (typeof(item.link) === 'string') openExternalURL(item.link as unknown as string)
            }
        }
    }
}
