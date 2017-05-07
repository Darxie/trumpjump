//global variables
var speed = 28;
var displacement = 7;
var surface = 400;
var nwall = 1000;
var loop;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sirka = canvas.width;
var vyska = canvas.height;
var asset = document.getElementById("asset");
var highScore = 0;
var isRunning;

//classes

class World {
    constructor() {
        this.x = 0;
        this.y = surface;
        this.size = 15000;
        this.space = 32;
        this.img = document.createElement("img");
        this.img.src = "img/world.png";
    }
    draw(){
        var tx = this.x;
        for (var i=0; i<=this.size; i++){
            ctx.drawImage(this.img, tx, this.y);
            tx+=this.space;
        }
    }
    move(){
        this.x-=displacement;
    }
}

class Time {
    constructor(){
        this.level = 0;
        this.time = 0;
        this.limit = 10000;
        this.interval = 5000/(speed/3);

        //this.sound = document.getElementById("sound");
        //this.sound.src = "sound/maga.mp3"
    }
    draw(){
        ctx.font = "25px Arial";
        ctx.fillText(this.level.toString(), 750, 40);
    }
    tick(){
        this.time+=this.interval;
        if(this.time >= this.limit){
            this.time = 0;
            this.level+=2;
            highScore+=2;
            speed-=3;
            jumpSpeed-=2;
            this.interval = Math.floor(1000/speed);
            clearInterval(loop);
            loop = setInterval("frame()", speed);
        }
    }
}

//objects
var world = new World();
var time;


//control functions

function koniecHry(){
    clearInterval(loop);
    isRunning = false;
    asset.style.display = "block";
    document.getElementById("imgbtn").src = "img/restart.png";
    //HighScore();
    world = new World();
    //noinspection JSAnnotator
    mexikanec = new Mexikanec;
    //noinspection JSAnnotator
    wall = new Wall(1000);
    for (i=0; i<= nwall; i++){
        wall.add();
    }
}


//optimalizacia
function deleteWall(){
    if (wall.right < 0){
        //noinspection JSAnnotator
        wall = wall.isIncoming();
    }

}
//global functions

/*function HighScore(){
    draw(ctx.fillText(highScore.toString(),400, 150));

}*/
function draw(){
    ctx.clearRect(0,0, sirka, vyska);
    world.draw();
    mexikanec.draw();
    wall.draw();
    time.draw();
}

function frame(){
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
}
