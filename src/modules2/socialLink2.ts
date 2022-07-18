import config from "../config"
import { pivotScene2 } from "./pivot2"

export function addSocialLink2() {
    for (let linkData of config.socialMedia) {
        let clickableLink2 = new Entity()
        clickableLink2.setParent(pivotScene2)

        clickableLink2.addComponent(new GLTFShape(linkData.model))
        clickableLink2.addComponent(new Transform({
            position: linkData.position,
            rotation: Quaternion.Euler(0, 90, 0)
        }))

        clickableLink2.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}