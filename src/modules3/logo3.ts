import config from "../config"
import { pivotScene3 } from "./pivot3"

export function addLogo3() {
    //TOP LOGO
    const topLogoData = config.logo.top

    const myEntity3 = new Entity()
    const myText3 = new TextShape(topLogoData.name)

    myText3.font = new Font(Fonts.LiberationSans)
    myText3.color = topLogoData.color
    myText3.fontSize = topLogoData.fontSize

    myText3.shadowColor = Color3.Gray()
    myText3.shadowOffsetY = 0.5
    myText3.shadowOffsetX = -0.5

    myEntity3.addComponent(myText3)


    myEntity3.addComponent(new Transform({
        position: topLogoData.position,
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    myEntity3.setParent(pivotScene3)

    //BOTTOM LOGO
    const bottomLogoData = config.logo.bottom
    
    const logoParent3 = new Entity()
    logoParent3.addComponent(new Transform({
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

    const imgFront3 = new Entity()
    imgFront3.addComponent(new PlaneShape())
    imgFront3.addComponent(new Transform({
        position: new Vector3(-0.1, 0, 0),
        rotation: Quaternion.Euler(0, 90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgFront3.addComponent(pictureMat)

    const imgBack3 = new Entity()
    imgBack3.addComponent(new PlaneShape())
    imgBack3.addComponent(new Transform({
        position: new Vector3(0.1, 0, 0),
        rotation: Quaternion.Euler(0, -90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgBack3.addComponent(pictureMat)

    imgFront3.setParent(logoParent3)
    imgBack3.setParent(logoParent3)

    logoParent3.setParent(pivotScene3)
}