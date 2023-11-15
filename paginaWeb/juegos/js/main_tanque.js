var ctx;
var xcanon=350;
var ycanon=500;
var angle=0;
var longCan=150;

window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            dibujarTanque();
            document.addEventListener('keydown', function(e){
                if (e.key == 'ArrowLeft'){
                    console.log('pulsa iz');
                    angle-=0.1;
                    dibujarTanque();
                }
            });
            document.addEventListener('keydown', function(e){
                if (e.key == 'ArrowRight'){
                    console.log('pulsa der');
                    angle+=0.1;
                    dibujarTanque();
                }
            });
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function dibujarTanque() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    var xcan = xcanon+longCan*Math.cos(angle);
    var ycan = ycanon+longCan*Math.sin(angle);
    //rueda derecha
    ctx.lineWidth = 2
    ctx.fillStyle = '#194b14bf'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.rect(260, 540, 180, 20)
    ctx.stroke()
    ctx.fill()

    //rueda izquierda
    ctx.lineWidth = 2
    ctx.fillStyle = '#194b14bf'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.rect(260, 440, 180, 20)
    ctx.stroke()
    ctx.fill()

    //parte central
    ctx.lineWidth = 2
    ctx.fillStyle = '#194b14bf'
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.rect(280, 460, 140, 80)
    ctx.stroke()
    ctx.fill()

    //circulo
    ctx.fillStyle = '194b14bf'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = '4'
    ctx.beginPath()
    ctx.arc(350, 500, 20, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()

    //cañon movil
    ctx.lineWidth = 15
    ctx.strokeStyle = '#194b14'
    ctx.beginPath()
    ctx.moveTo(xcanon,ycanon)
    ctx.lineTo(xcan,ycan)
    ctx.stroke()
}
