
let gElCanvas
let gCtx
let gCurrShape = 'rect'

function onInit() {
    gElCanvas = document.querySelector('.main-content .canvas')
    console.log(gElCanvas)
    gCtx = gElCanvas.getContext('2d')
    console.log(gCtx)
}

function onDraw(ev) {
    const { offsetX, offsetY } = ev
    switch (gCurrShape) {
        case 'line':
            drawLine(offsetX, offsetY, 250, 250)
            break
        case 'rect':    
            drawRect(offsetX, offsetY)
            break
        case 'tringle':
            drawTringle(offsetX,offsetY)
            break   
        case 'text':
            drawText(offsetX,offsetY, 'Hello')    
        default:
            return
    }
}
function drawLine(x, y, xEnd, yEnd) {
    gCtx.moveTo(x, y)
    gCtx.lineTo(xEnd, yEnd)

    gCtx.lineWidth = 6
    gCtx.strokeStyle = 'orange'

    gCtx.stroke()
}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}
function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.moveTo(x,y)
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 6
    gCtx.fillStyle = 'orange'
    gCtx.strokeRect(x, y, 200, 200)
    gCtx.fillRect(x, y, 200, 200)
}

function drawTringle(x, y) {
    gCtx.beginPath()
    gCtx.moveTo(x, y)
    gCtx.lineTo(x + 50, y + 50)
    gCtx.lineTo(x -50, y + 50)
    gCtx.closePath()
    
    gCtx.strokeStyle = 'gray'
    gCtx.lineWidth = 2
    gCtx.stroke()

    gCtx.fillStyle = 'blue'
    gCtx.fill()
}

function drawText(x,y, text){
    gCtx.beginPath()
    gCtx.moveTo(x,y)
    gCtx.lineWidth = 1
    gCtx.fillStyle = 'lightblue'
    gCtx.font = '50px Ariel'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)    
}

function onSetShape(str) {
    gCurrShape = str
}







