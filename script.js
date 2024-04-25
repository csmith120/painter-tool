const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = document.getElementById('size').value
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
   } else {
    //unfinished stamp code
    if(isPressed = e.altKey(e)) {
        const img = new Image();
        img.onmousedown = () => {
            ctx.drawImage(img, x, y);
        }; img.src = "./icons/brightness_3_FILL0_wght400_GRAD0_opsz24.png";
    }
   }
})

//draws a circle
function drawCricle(x, y) {
    ctx.beginPath();
    size = document.getElementById('size').value
    ctx.arc(x, y, size, 0, Math.PI * 2)
    color = document.getElementById('color').value
    ctx.fillStyle = color
    ctx.fill()
}

//draws a line
function drawLine(x1, y1, x2, y2) {
 ctx.beginPath()
 size = document.getElementById('size').value
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
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.backgroundColor = 'rgb(41, 42, 43)'
        body.style.color = 'black';
        body.style.transition = '2s';
    } 
    erase()
})

// delet button
const clear = document.getElementById('clear')
clear.onclick = erase;

function erase() {
    ctx.beginPath();
    size = 1000
    ctx.arc(400,400, size, 0, Math.PI * 2)
    if(document.getElementById('toggleDark').classList.contains('bi-brightness-high-fill')){
        color = '#f5f5f5'
    } else {
        color = 'rgb(41, 42, 43)'
    }
    ctx.fillStyle = color
    ctx.fill()
}


