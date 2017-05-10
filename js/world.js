/**
 * Created by Feldo on 8. 5. 2017.
 */
class World {
    constructor() {
        this.x = 0;
        this.y = surface;
        this.size = 10000;
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