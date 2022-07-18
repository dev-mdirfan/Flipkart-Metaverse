import config from "../config"
import { pivotScene2 } from "./pivot2"

export function addLogo2() {
    //TOP LOGO
    const topLogoData = config.logo.top

    const myEntity2 = new Entity()
    const myText2 = new TextShape(topLogoData.name)

    myText2.font = new Font(Fonts.LiberationSans)
    myText2.color = topLogoData.color
    myText2.fontSize = topLogoData.fontSize

    myText2.shadowColor = Color3.Gray()
    myText2.shadowOffsetY = 0.5
    myText2.shadowOffsetX = -0.5

    myEntity2.addComponent(myText2)


    myEntity2.addComponent(new Transform({
        position: topLogoData.position,
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    myEntity2.setParent(pivotScene2)

    //BOTTOM LOGO
    const bottomLogoData = config.logo.bottom
    
    const logoParent2 = new Entity()
    logoParent2.addComponent(new Transform({
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

    const imgFront2 = new Entity()
    imgFront2.addComponent(new PlaneShape())
    imgFront2.addComponent(new Transform({
        position: new Vector3(-0.1, 0, 0),
        rotation: Quaternion.Euler(0, 90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgFront2.addComponent(pictureMat)

    const imgBack2 = new Entity()
    imgBack2.addComponent(new PlaneShape())
    imgBack2.addComponent(new Transform({
        position: new Vector3(0.1, 0, 0),
        rotation: Quaternion.Euler(0, -90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgBack2.addComponent(pictureMat)

    imgFront2.setParent(logoParent2)
    imgBack2.setParent(logoParent2)

    logoParent2.setParent(pivotScene2)
}