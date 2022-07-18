import config from "../config"
import { pivotScene3 } from "./pivot3"

export function addSocialLink3() {
    for (let linkData of config.socialMedia) {
        let clickableLink3 = new Entity()
        clickableLink3.setParent(pivotScene3)

        clickableLink3.addComponent(new GLTFShape(linkData.model))
        clickableLink3.addComponent(new Transform({
            position: linkData.position,
            rotation: Quaternion.Euler(0, 90, 0)
        }))

        clickableLink3.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}