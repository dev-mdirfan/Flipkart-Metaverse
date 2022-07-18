import { addBuilding4 } from "./modules4/building4"
import { setSceneOrientation4 } from "./modules4/pivot4"
import { addSocialLink4 } from "./modules4/socialLink4"
import { addVideoScreen4 } from "./modules4/videoScreen4"
import { createDispenser4 } from "./booth4/dispenser4"
import { addLogo4 } from "./modules4/logo4"
import { addWearable4 } from "./modules4/wearable4"

setSceneOrientation4()
addBuilding4()
addLogo4()
addSocialLink4()
addVideoScreen4()
addWearable4()


// change the eventUUID to your event
// check following links about how to setup POAP event
// https://docs.decentraland.org/development-guide/poap-tokens/
// https://github.com/decentraland-scenes/POAP-Booth
createDispenser4(
    {
        position: new Vector3(8 + 5.5, 10, 8),
        rotation: Quaternion.Euler(0, -90, 0),
        scale: new Vector3(2,2,2)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)