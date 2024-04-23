const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20
let isPressed = false
let color = document.getElementById('color').value
let x
let y

// paint when mouse down
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

// don't paint when mouse up
canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
   if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCricle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
   }
})

//draws a circle
function drawCricle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    color = document.getElementById('color').value
    ctx.fillStyle = color
    ctx.fill()
}

//draws a line
function drawLine(x1, y1, x2, y2) {
 ctx.beginPath()
 ctx.moveTo(x1, y1)
 ctx.lineTo(x2, y2)
 color = document.getElementById('color').value
 ctx.strokeStyle = color
 ctx.lineWidth = size * 2
 ctx.stroke()
}
// dark mode code
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        // continue here
        body.style.background = '#f5f5f5';
    }
})
