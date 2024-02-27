

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.main-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log(gElCanvas, gCtx)

    window.addEventListener('resize', () => resizeCanvas())
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

function downloadCanvas(elLink){
    elLink.download = 'my-img'

    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl

}

function resizeCanvas() {
    elCanvasContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elCanvasContainer.offsetWidth
    console.log(elCanvasContainer.clientWidth)
    console.log(gElCanvas.width)
}