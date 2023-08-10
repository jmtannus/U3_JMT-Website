const canvas = document.querySelector('#drawingCanvas');
// ver informações no site: console.log(window); //

canvas.width = window.innerWidth;
canvas.Height = window.innerHeight;
//innerHeight: 1146 / 929//
//innerWidth: 1363 // 1120/
const sunflower = document.createElement('img');
const goldSunflower = document.createElement('img');

sunflower.src = 'images/sunflower.png';
goldSunflower.src = 'images/goldSunflower.png';

const handleMouseMove = () => {
    console.log('This is a function')
}

handleMouseMove();