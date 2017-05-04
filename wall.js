/**
 * Created by Feldo on 4.5.2017.
 */

class Wall extends Object{
    constructor(x){
        super();
        this.x = x;
        this.hmin = 30;
        this.hmax = 40;
        this.h = Wall.generate(this.hmin, this.hmax);
        this.w = this.h*(0.59);
        this.y = surface-this.h;
        this.nmin = 1;
        this.nmax = 3;
        this.n = Wall.generate(this.nmin, this.nmax);
        this.dmin = 300;
        this.dmax = 510;
        this.d = Wall.generate(this.dmin, this.dmax);
        this.incoming = null;
        this.img.src = "img/wall.png";

        this.top = this.y;
        this.bottom = this.y+this.h;
        this.right = this.x+this.w;
        this.left = this.x;

    }
    draw(){
        var tx = this.x;
        for(var i=0; i<this.n;i++){
            ctx.drawImage(this.img, tx, this.y, this.w, this.h);
            tx+=this.w;
            this.right = tx;
        }
        if(this.incoming !== null){
            this.incoming.draw();
        }
        /*ctx.fillStyle = ("#FF0000");
         ctx.fillRect(this.left, this.top, 15,15);
         ctx.fillRect(this.right, this.top, 15,15);
         ctx.fillRect(this.left, this.bottom, 15,15);
         ctx.fillRect(this.right, this.bottom, 15,15);*/

    }
    updateBorders(){
        this.top = this.y;
        this.bottom = this.y+this.h;
        this.right = this.x+this.w;
        this.left = this.x;
    }
    move(){
        this.x-=displacement;
        this.left = this.x;
        //this.right = this.x+this.w;
        //this.left = this.x;
        if(this.incoming !== null){
            this.incoming.move();
        }
    }
    add(){
        if(this.incoming === null){
            this.incoming = new Wall(this.x+this.d);
        } else {
            this.incoming.add();
        }
    }
    static generate(a, b){
        return Math.floor((Math.random()*b) + a);
    }
    isIncoming(){
        return this.incoming;
    }
}

function wallCollision() {
    while(this !== null){
        if(this.collision(mexikanec)){
            //koniec hry
            koniecHry();
            break;
        } else {
            //noinspection JSAnnotator
            this = this.isIncoming();
        }
    }
}