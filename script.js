let goldSunflower;
let sunflower;
let mouseIsDown = false;
const imageWidth = 150;
let paintbrush;

const handleMouseDown = () => {
  mouseIsDown = true;
  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    paintbrush = sunflower;
  } else {
    paintbrush = goldSunflower;
  }
}

const handleMouseUp = () => {
  mouseIsDown = false;
}

const handleMouseMove = (event) => {
  const scrollAmount = document.scrollingElement.scrollTop;
  const paintbrushHeight = paintbrush.naturalHeight;
  const paintLimit = window.innerHeight - paintbrushHeight;
  const left = event.clientX;
  const top = Math.min(paintLimit, event.clientY + scrollAmount);
  context.drawImage(paintbrush, left, top);
}

const handleTouchMove = (event) => {
  const scrollAmount = document.scrollingElement.scrollTop;
  const paintbrushHeight = paintbrush.naturalHeight;
  const paintLimit = window.innerHeight - paintbrushHeight;
  const left = event.touches[0].clientX;
  const top = Math.min(paintLimit, event.touches[0].clientY + scrollAmount);
  context.drawImage(paintbrush, left, top);
}

const canvas = document.querySelector('#drawingCanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

goldSunflower = document.createElement('img');
goldSunflower.src = 'images/goldSunflower.png';
sunflower = document.createElement('img');
sunflower.src = 'images/sunflower.png';

canvas.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

canvas.addEventListener('touchmove', handleTouchMove);
window.addEventListener('touchstart', handleMouseDown);
window.addEventListener('touchend', handleMouseUp);
