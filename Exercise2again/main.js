

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.main-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log(gElCanvas, gCtx)
}

function onSelectImg(elImg, imageName) {
    coverCanvasWithImg(elImg, imageName)
}

function coverCanvasWithImg(img, imageName) {
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    drawImage(imageName)
}

function drawImage(imageName){
    const img = new Image()
    console.log(imageName)
    img.src = `img/${imageName}`

    img.onload = () =>
        gCtx.drawImage(img ,0, 0,gElCanvas.width, gElCanvas.height) 
}