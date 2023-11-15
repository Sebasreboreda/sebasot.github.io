var ctx;
var canvas;
var innerCircleRadius = 80;
var outerCircleRadius = 200;
var angle = 1;
var angle2=1;
var centerX = 400;
var centerY = 300;

window.onload = () => {
  canvas = document.getElementById("canvas1");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    animate();
    animate2();
  }
};

function animate() {
  // Borra el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calcula la posición del círculo interior

  var innerCircleX = centerX + (outerCircleRadius - innerCircleRadius) * Math.cos(angle);
  var innerCircleY = centerY + (outerCircleRadius - innerCircleRadius) * Math.sin(angle);

  // Dibuja el círculo exterior
  dibujarCirculo(centerX, centerY, outerCircleRadius, "#000", "#fff");

  // Dibuja el círculo interior
  dibujarCirculo(innerCircleX, innerCircleY, innerCircleRadius, "#ff0707", "#fff");

  // Incrementa el ángulo para la animación
  angle *= 1.005;

  // Solicita el siguiente cuadro de animación
  requestAnimationFrame(animate);
}
function animate2() {
  // Borra el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calcula la posición del círculo interior

  var innerCircleX = centerX + (outerCircleRadius - innerCircleRadius) * Math.cos(angle2);
  var innerCircleY = centerY + (outerCircleRadius - innerCircleRadius) * Math.sin(angle2);

  // Dibuja el círculo exterior
  dibujarCirculo(centerX, centerY, outerCircleRadius, "#000", "#fff");

  // Dibuja el círculo interior
  dibujarCirculo(innerCircleX, innerCircleY, innerCircleRadius, "#ff0707", "#fff");

  // Incrementa el ángulo para la animación
  angle2 *= 1.004;

  // Solicita el siguiente cuadro de animación
  requestAnimationFrame(animate2);
}
function animate3() {
  // Borra el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calcula la posición del círculo interior

  var innerCircleX = centerX + (outerCircleRadius - innerCircleRadius) * Math.cos(angle);
  var innerCircleY = centerY + (outerCircleRadius - innerCircleRadius) * Math.sin(angle);

  // Dibuja el círculo exterior
  dibujarCirculo(centerX, centerY, outerCircleRadius, "#000", "#fff");

  // Dibuja el círculo interior
  dibujarCirculo(innerCircleX, innerCircleY, innerCircleRadius, "#ff0707", "#fff");

  // Incrementa el ángulo para la animación
  angle *= -1.002;

  // Solicita el siguiente cuadro de animación
  requestAnimationFrame(animate3);
}

function dibujarCirculo(x, y, radio, borderColor, fillStyle) {
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = fillStyle;
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.arc(x, y, radio, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}