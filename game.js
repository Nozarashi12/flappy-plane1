const plane = document.querySelector('.plane');
const mainDisplay = document.querySelector('.game');
const ground = document.querySelector('.ground');

let planeLeft = 100;
let planeBottom = 350;
// let wobbleAngle = 0;

const gravity = 1; 

function startGame() {
    planeBottom -= gravity; 
    plane.style.bottom = planeBottom + 'px';
    plane.style.left = planeLeft + 'px';   
    // wobbleAngle += 0.2;
    // plane.style.transform =`rotate(${wobbleAngle}deg)`
}

let timerId = setInterval(startGame, 20);
 
function control(e) {
    console.log(e)
    if (e.keyCode == 32){
        console.log(e)
        jump();
    }
}

function jump() {
    if (planeBottom <680) planeBottom += 50;
    plane.style.bottom = planeBottom + 'px'
}
document.addEventListener('keydown', control);
