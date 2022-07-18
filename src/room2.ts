import { addBuilding2 } from "./modules2/building2"
import { setSceneOrientation2 } from "./modules2/pivot2"
import { addSocialLink2 } from "./modules2/socialLink2"
import { addVideoScreen2 } from "./modules2/videoScreen2"
import { createDispenser2 } from "./booth2/dispenser2"
import { addLogo2 } from "./modules2/logo2"
import { addWearable2 } from "./modules2/wearable2"

setSceneOrientation2()
addBuilding2()
addLogo2()
addSocialLink2()
addVideoScreen2()
addWearable2()


// change the eventUUID to your event
// check following links about how to setup POAP event
// https://docs.decentraland.org/development-guide/poap-tokens/
// https://github.com/decentraland-scenes/POAP-Booth
createDispenser2(
    {
        position: new Vector3(18 + 5.5, 10, 18),
        rotation: Quaternion.Euler(0, -90, 0),
        scale: new Vector3(2,2,2)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)