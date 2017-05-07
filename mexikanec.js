/**
 * Created by Feldo on 4.5.2017.
 */
var jumpSpeed = 6;
var displacementOfJump = 4;
var canJump = true;
var jump;

class Mexikanec extends Object {
    constructor(){
        super();
        this.x = 35;
        this.w = 98;
        this.h = 175;
        this.y = surface-this.h;
        this.img.src = "img/mexikanec2.png";

        this.top = this.y;
        this.bottom = this.y+this.h-12;

        this.rightBorder = 30;
        this.leftBorder = 40;
        this.right = this.x+this.w-this.rightBorder;
        this.left = this.x+this.w-this.leftBorder;

    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y);
    }
    updateBorders(){
        this.top = this.y;
        this.bottom = this.y+this.h-12;
    }
}

function up(){
    mexikanec.y-=displacementOfJump;
    mexikanec.updateBorders();
    wall.updateBorders();
    if(mexikanec.y <= vyska-420){
        clearInterval(jump);
        jump = setInterval("down()", jumpSpeed)
    }
}
function down() {
    mexikanec.y+=displacementOfJump;
    mexikanec.updateBorders();
    wall.updateBorders();
    if(mexikanec.y >= (surface-mexikanec.h)){
        clearInterval(jump);
        canJump = true;
    }
}
function initializeJump() {
    jump = setInterval("up()", jumpSpeed);
    canJump = false;
}
function jumping(event){
    if(event.keyCode === 38){
        if(canJump) {
            initializeJump();
        }
    }
}

const mexikanec = new Mexikanec();