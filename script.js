const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20
let color = 'black'
let x
let y

// paint when mouse down
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    console.log(isPressed, x, y);
})

//draws a circle
function drawCricle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

//draws a line
function drawLine(x1, y1, x2, y2) {
 ctx.beginPath()
 ctx.moveTo(x1, y1)
 ctx.lineTo(x2, y2)
 ctx.strokeStyle = color
 ctx.lineWidth = size
 ctx.stroke()
}
