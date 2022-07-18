import config from "../config"
import { pivotScene2 } from "./pivot2"

export async function addWearable2() {
    for (let item of config.wearable) {
        let wearableItem2 = new Entity()
        wearableItem2.addComponent(new GLTFShape(item.model))
        wearableItem2.addComponent(new Transform({
            position: item.position,
            rotation: item.rotation,
            scale: new Vector3(1.1, 1.1, 1.1)
        }))
        wearableItem2.setParent(pivotScene2)

        wearableItem2.addComponent(new OnPointerDown(() => {},
            {
                hoverText: item.name
            }))

        if (item.link === null) {
            wearableItem2.getComponent(OnPointerDown).hoverText = "INFO N/A"
        }
        else {
            //wearableItem.getComponent(OnPointerDown).hoverText = "INFO"
            wearableItem2.getComponent(OnPointerDown).callback = () => {
                if (typeof(item.link) === 'string') openExternalURL(item.link as unknown as string)
            }
        }
    }
}
