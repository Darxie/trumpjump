//global variables
var speed = 28;
var displacement = 7;
var surface = 400;
var nwall = 600;
var loop;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sirka = canvas.width;
var vyska = canvas.height;
var asset = document.getElementById("asset");
var highScore = 0;
var isRunning = false;

//objects
var world = new World();
var time;

function koniecHry() {
    clearInterval(loop);
    isRunning = false;
    console.log("")
    asset.style.display = "block";
    document.getElementById("imgbtn").src = "img/restart.png";
    wall = new Wall(600);
    mexikanec = new Mexikanec();
    speed = 28;
    jumpSpeed = 6;
    for ( i = 0; i <= nwall; i++ ) {
        wall.add();
    }
}

function displayInstructions() {
   if (!isRunning) {
       ctx.fillText("Use UP arrow to jump", 40, 200);
   }
}

function draw() {
    ctx.clearRect(0, 0, sirka, vyska);
    world.draw();
    mexikanec.draw();
    wall.draw();
    time.draw();
    displayInstructions();
}

function frame() {
    draw();
    world.move();
    wall.move();
    time.tick;
    wallCollision();
    deleteWall();
}

function initialize() {
    asset.style.display = "none";
    loop = setInterval("frame()", speed);
    time = new Time();
    isRunning = true;
}
