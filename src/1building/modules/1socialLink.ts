import config from "../1config"
import { pivotScene_1 } from "./1pivot"

export function addSocialLink_1() {
    for (let linkData of config.socialMedia) {
        let clickableLink_1 = new Entity()
        clickableLink_1.setParent(pivotScene_1)

        clickableLink_1.addComponent(new GLTFShape(linkData.model))
        clickableLink_1.addComponent(new Transform({
            position: linkData.position
        }))

        clickableLink_1.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}