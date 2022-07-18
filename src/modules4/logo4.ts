import config from "../config"
import { pivotScene4 } from "./pivot4"

export function addLogo4() {
    //TOP LOGO
    const topLogoData = config.logo.top

    const myEntity4 = new Entity()
    const myText4 = new TextShape(topLogoData.name)

    myText4.font = new Font(Fonts.LiberationSans)
    myText4.color = topLogoData.color
    myText4.fontSize = topLogoData.fontSize

    myText4.shadowColor = Color3.Gray()
    myText4.shadowOffsetY = 0.5
    myText4.shadowOffsetX = -0.5

    myEntity4.addComponent(myText4)


    myEntity4.addComponent(new Transform({
        position: topLogoData.position,
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    myEntity4.setParent(pivotScene4)

    //BOTTOM LOGO
    const bottomLogoData = config.logo.bottom
    
    const logoParent4 = new Entity()
    logoParent4.addComponent(new Transform({
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

    const imgFront4 = new Entity()
    imgFront4.addComponent(new PlaneShape())
    imgFront4.addComponent(new Transform({
        position: new Vector3(-0.1, 0, 0),
        rotation: Quaternion.Euler(0, 90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgFront4.addComponent(pictureMat)

    const imgBack4 = new Entity()
    imgBack4.addComponent(new PlaneShape())
    imgBack4.addComponent(new Transform({
        position: new Vector3(0.1, 0, 0),
        rotation: Quaternion.Euler(0, -90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgBack4.addComponent(pictureMat)

    imgFront4.setParent(logoParent4)
    imgBack4.setParent(logoParent4)

    logoParent4.setParent(pivotScene4)
}