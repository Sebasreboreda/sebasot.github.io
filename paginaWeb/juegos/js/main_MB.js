var ctx;
var bicho = new Image();
var tiempo=60;
var y;
var x;
var puntuacion=0;
window.onload = function () {
    canvas = document.getElementById('canvas1');
    bicho.src = 'media/bicho.png';
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            dibujarPuntuacion();
            timer();
            x = getRandomNumber(0, canvas.width-27);
            y = getRandomNumber(0, canvas.height-27);
            dibujarBicho(x,y);
            console.log(x);  
            canvas.addEventListener('click', function(e){
                var rx = e.offsetX;
                var ry = e.offsetY;
                if (rx > x && rx < x + bicho.width && ry > y && ry < y + bicho.height){
                    puntuacion++;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    dibujarPuntuacion();
                    x = getRandomNumber(0, canvas.width-127);
                    y = getRandomNumber(20, canvas.height-47);
                    dibujarBicho(x,y);
                }
            })
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
}

function dibujarBicho(x,y){
    ctx.drawImage(bicho,x,y);
}
function dibujarPuntuacion(){
    ctx.font = "bold 15px serif";
    ctx.fillText("Puntuacion: "+ puntuacion, 10, 15);
}
function timer(){
    ctx.clearRect(700,0,100,20)
    ctx.font = "bold 15px serif";
    ctx.fillText("Tiempo: "+ tiempo, 700, 15);
    if(tiempo==0){
        console.log('End');
    }
    else{
        tiempo-=1;
        setTimeout("timer()",1000);
      }   
}

