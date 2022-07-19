import config from "../1config"
import { pivotScene_1 } from "./1pivot"

export function addLogo_1() {
    //TOP LOGO
    const topLogoData = config.logo.top

    const myEntity_1 = new Entity()
    const myText_1 = new TextShape(topLogoData.name)

    myText_1.font = new Font(Fonts.LiberationSans)
    myText_1.color = topLogoData.color
    myText_1.fontSize = topLogoData.fontSize

    myText_1.shadowColor = Color3.Gray()
    myText_1.shadowOffsetY = 0.5
    myText_1.shadowOffsetX = -0.5

    myEntity_1.addComponent(myText_1)


    myEntity_1.addComponent(new Transform({
        position: topLogoData.position,
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    myEntity_1.setParent(pivotScene_1)

    //BOTTOM LOGO
    const bottomLogoData = config.logo.bottom

    const logoFrame_1 = new Entity()
    logoFrame_1.addComponent(new GLTFShape("models/museum/logo_frame.glb"))
    logoFrame_1.addComponent(new Transform({
        position: config.logo.bottom.position,
        rotation: Quaternion.Euler(0, 0, 0)
    }))

    let imageTexture = new Texture(bottomLogoData.imgSrc)
    let pictureMat = new Material()
    pictureMat.albedoTexture = imageTexture
    pictureMat.specularIntensity = 0
    pictureMat.metallic = 0
    pictureMat.roughness = 1
    pictureMat.emissiveTexture = imageTexture
    pictureMat.emissiveIntensity = 0.5
    pictureMat.emissiveColor = Color3.White()
    pictureMat.transparencyMode = 1

    const imgFront_1 = new Entity()
    imgFront_1.addComponent(new PlaneShape())
    imgFront_1.addComponent(new Transform({
        position: new Vector3(0, 0, 0.08),
        rotation: Quaternion.Euler(0, 180, 180),
        scale: new Vector3(1.18, 1.18, 1)
    }))
    imgFront_1.addComponent(pictureMat)

    const imgBack_1 = new Entity()
    imgBack_1.addComponent(new PlaneShape())
    imgBack_1.addComponent(new Transform({
        position: new Vector3(0, 0, -0.08),
        rotation: Quaternion.Euler(0, 0, 180),
        scale: new Vector3(1.18, 1.18, 1)
    }))
    imgBack_1.addComponent(pictureMat)

    imgFront_1.setParent(logoFrame_1)
    imgBack_1.setParent(logoFrame_1)

    logoFrame_1.setParent(pivotScene_1)
}