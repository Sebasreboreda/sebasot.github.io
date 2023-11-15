var ctx;
var canvas;
var sizeX = 228.5;
var sizeY = 171.4;
var x = -228.5;
var y = -171.4;
var speed = 10; // Velocidad inicial de cambio de color

window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            for (let i = 0; i < 8; i++) {
                dibujarRect(x, y);
                x += sizeX / 2;
                y += sizeY / 2;
            }
            cambiarColorPeriodicamente();
        }
    }

    const speedSlider = document.getElementById('speedSlider');
    speedSlider.addEventListener('input', function () {
        speed = parseInt(speedSlider.value);
    });
}

function dibujarRect(posX, posY) {
    var color = colorAl();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(posX, posY, sizeX, sizeY);
    ctx.stroke();
}

function colorAl() {
    var alpha = 0.86;
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},${alpha})`;
}

function cambiarColorPeriodicamente() {
    var x = -228.5/2;
    var y = -171.4/2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 8; i++) {
        dibujarRect(x, y);
        x += sizeX / 2;
        y += sizeY / 2;
    }

    setTimeout(cambiarColorPeriodicamente, 1000 / speed);
}
