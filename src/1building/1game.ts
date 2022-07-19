import { addBuilding_1 } from "./modules/1building"
import { addNFTImage_1 } from "./modules/1nftImage"
import { setSceneOrientation_1 } from "./modules/1pivot"
import { addSculpture_1 } from "./modules/1sculpture"
import { addSocialLink_1 } from "./modules/1socialLink"
import { addVideoScreen_1 } from "./modules/1videoScreen"
import { createDispenser_1 } from "./booth/1dispenser"
import { addElevator_1 } from "./modules/1elevator"
import { addLogo_1 } from "./modules/1logo"

setSceneOrientation_1()
addBuilding_1()
addElevator_1()
addLogo_1()
addSculpture_1()
addNFTImage_1()
addSocialLink_1()
addVideoScreen_1()

// change the eventUUID to your event
// check following links about how to setup POAP event
// https://docs.decentraland.org/development-guide/poap-tokens/
// https://github.com/decentraland-scenes/POAP-Booth
createDispenser_1(
    {
        position: new Vector3(8 + 5.5, 7.32, 8),
        rotation: Quaternion.Euler(0, -90, 0)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)

