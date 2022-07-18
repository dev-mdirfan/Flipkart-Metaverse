import config from "../config"
import { pivotScene4 } from "./pivot4"

export function addSocialLink4() {
    for (let linkData of config.socialMedia) {
        let clickableLink4 = new Entity()
        clickableLink4.setParent(pivotScene4)

        clickableLink4.addComponent(new GLTFShape(linkData.model))
        clickableLink4.addComponent(new Transform({
            position: linkData.position,
            rotation: Quaternion.Euler(0, 90, 0)
        }))

        clickableLink4.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}