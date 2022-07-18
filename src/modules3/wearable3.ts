import config from "../config"
import { pivotScene3 } from "./pivot3"

export async function addWearable3() {
    for (let item of config.wearable) {
        let wearableItem3 = new Entity()
        wearableItem3.addComponent(new GLTFShape(item.model))
        wearableItem3.addComponent(new Transform({
            position: item.position,
            rotation: item.rotation,
            scale: new Vector3(1.1, 1.1, 1.1)
        }))
        wearableItem3.setParent(pivotScene3)

        wearableItem3.addComponent(new OnPointerDown(() => {},
            {
                hoverText: item.name
            }))

        if (item.link === null) {
            wearableItem3.getComponent(OnPointerDown).hoverText = "INFO N/A"
        }
        else {
            //wearableItem.getComponent(OnPointerDown).hoverText = "INFO"
            wearableItem3.getComponent(OnPointerDown).callback = () => {
                if (typeof(item.link) === 'string') openExternalURL(item.link as unknown as string)
            }
        }
    }
}
