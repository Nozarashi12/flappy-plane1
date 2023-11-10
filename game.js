const plane = document.querySelector('.plane');
const mainDisplay = document.querySelector('.game');
const ground = document.querySelector('.ground');
const scoredisplay = document.querySelector('.score')
const bgMusic = new Audio("assets/ride of valkyrie.mp3");

bgMusic.play();
bgMusic.loop = true;

let planeLeft = 100;
let planeBottom = 350;
const gravity = 2;
let timerId;
let gap = 410;
let score = 0







function startGame() {
    planeBottom -= gravity;
    plane.style.bottom = planeBottom + 'px';
    plane.style.left = planeLeft + 'px';
}


timerId = setInterval(startGame, 20);

function jump() {
    if (planeBottom < 680) planeBottom += 50;
    plane.style.bottom = planeBottom + 'px';
}

function control(e) {
    console.log(e);
    if (e.keyCode == 32) {
        console.log(e);
        jump();
    }
}

document.addEventListener('keydown', control);

function isCollision(plane, tower, toptower) {
    const planeRect = plane.getBoundingClientRect();
    const towerRect = tower.getBoundingClientRect();
    const toptowerRect = toptower.getBoundingClientRect();

    const collidewithtower = (
        planeRect.right > towerRect.left &&
        planeRect.left < towerRect.right &&
        planeRect.bottom > towerRect.top &&
        planeRect.top < towerRect.bottom
    );
    const collidewithtoptower = (
        planeRect.right > toptowerRect.left &&
        planeRect.left < toptowerRect.right &&
        planeRect.bottom > toptowerRect.top &&
        planeRect.top < toptowerRect.bottom
    );
    return collidewithtower || collidewithtoptower
}

let towerTimerId;

function generatetower() {
    var towerLeft = 500;
    var randomheight = Math.random() * 125;
    var towerBottom = randomheight;
    var tower = document.createElement('div');
    var toptower = document.createElement('div')
    tower.classList.add('tower');
    toptower.classList.add('toptower')
    mainDisplay.appendChild(tower);
    mainDisplay.appendChild(toptower)
    tower.style.left = towerLeft + 'px';
    toptower.style.left = towerLeft + 'px'
    tower.style.bottom = towerBottom + 'px';
    toptower.style.bottom = towerBottom + gap + 'px';

    function movetower() {
        towerLeft -= 2;
        tower.style.left = towerLeft + 'px';
        toptower.style.left = towerLeft + 'px'
        if (towerLeft <= 120) {
            mainDisplay.removeChild(toptower);
            mainDisplay.removeChild(tower);
            clearInterval(towerTimerId);

            score++;
            scoredisplay.textContent = `Score:${score}`;
            localStorage.setItem("score", score)
        }

        if (planeBottom === 110) {
            clearInterval(towerTimerId);
            window.location.href = 'gameover.html';
        }

        if (isCollision(plane, tower, toptower)) {
            clearInterval(towerTimerId);
            window.location.href = 'gameover.html';
        }
    }

    towerTimerId = setInterval(movetower, 20);

    setTimeout(() => {

        generatetower();
    }, 4000);
}

generatetower();


