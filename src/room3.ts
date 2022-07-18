import { addBuilding3 } from "./modules3/building3"
import { setSceneOrientation3 } from "./modules3/pivot3"
import { addSocialLink3 } from "./modules3/socialLink3"
import { addVideoScreen3 } from "./modules3/videoScreen3"
import { createDispenser3 } from "./booth3/dispenser3"
import { addLogo3 } from "./modules3/logo3"
import { addWearable3 } from "./modules3/wearable3"

setSceneOrientation3()
addBuilding3()
addLogo3()
addSocialLink3()
addVideoScreen3()
addWearable3()


// change the eventUUID to your event
// check following links about how to setup POAP event
// https://docs.decentraland.org/development-guide/poap-tokens/
// https://github.com/decentraland-scenes/POAP-Booth
createDispenser3(
    {
        position: new Vector3(8 + 5.5, 10, 8),
        rotation: Quaternion.Euler(0, -90, 0),
        scale: new Vector3(2,2,2)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)