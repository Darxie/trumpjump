/**
 * Created by Feldo on 4.5.2017.
 */

var displacementOfJump = 5;
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
        this.leftBorder = 60;
        this.right = this.x+this.w-this.rightBorder;
        this.left = this.x+this.w-this.leftBorder;

    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y);
        /*ctx.fillStyle = ("#FF0000");
        ctx.fillRect(this.left, this.top, 15,15);
        ctx.fillRect(this.right, this.top, 15,15);
        ctx.fillRect(this.left, this.bottom, 15,15);
        ctx.fillRect(this.right, this.bottom, 15,15);*/
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

let mexikanec = new Mexikanec();