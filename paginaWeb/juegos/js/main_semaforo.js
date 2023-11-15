var ctx;
var color = 1;
window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            cambiarColor();
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowRight') {
                    console.log('pulsa der');
                    cambiarColor();
                }
            });
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowLeft') {
                    console.log('pulsa izq');
                    precaucion();
                }
            });
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function dibujarSemaforo() {
    //Parte trasera
    ctx.lineWidth = 2
    ctx.fillStyle = 'rgb(46, 46, 46)'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.roundRect(270, 250, 160, 350, 200)
    ctx.stroke()
    ctx.fill()
    //color rojo
    ctx.fillStyle = 'rgb(114, 0, 0)'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = '8'
    ctx.beginPath()
    ctx.arc(350, 320, 40, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
    //color ambar
    ctx.fillStyle = 'rgb(114, 91, 0)'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = '8'
    ctx.beginPath()
    ctx.arc(350, 420, 40, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
    //color verde
    ctx.fillStyle = 'rgb(0, 94, 19)'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = '8'
    ctx.beginPath()
    ctx.arc(350, 520, 40, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
    //palo
    ctx.lineWidth = 2
    ctx.fillStyle = 'rgb(46, 46, 46)'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.rect(340, 600, 20, 150)
    ctx.stroke()
    ctx.fill()
}

function cambiarColorVerde() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarSemaforo();
    //color verde
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = '8'
    ctx.beginPath()
    ctx.arc(350, 520, 40, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
}

function cambiarColorAmbar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarSemaforo();
    //color ambar
    ctx.fillStyle = 'orange'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = '8'
    ctx.beginPath()
    ctx.arc(350, 420, 40, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
}

function cambiarColorRojo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarSemaforo();
    //color rojo
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = '8'
    ctx.beginPath()
    ctx.arc(350, 320, 40, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
}

function cambiarColor() {
    dibujarSemaforo();
    setInterval(function () {
        if (color == 1) {
            cambiarColorVerde();
            color++;
        }
        else if (color == 2) {
            cambiarColorAmbar();
            color++
        } else {
            cambiarColorRojo();
            color = 1;
        }
    }, 2000);
}

function precaucion() {
    setInterval(function () {
        if (color == 1) {
            cambiarColorAmbar();
            color++;
        }
        else if (color == 2) {
            dibujarSemaforo();
            color = 1;
        }
    }, 2000);
}