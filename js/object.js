/**
 * Created by Feldo on 7. 5. 2017.
 */
var audio = new Audio('sounds/maga.mp3');
var score = 0;
var speed = 28;
var displacement = 7;
var jumpSpeed = 10;

class Object {
    constructor() {
        this.img = document.createElement("img");
    }

    collision(other) {
        if ( this.bottom < other.top || this.top > other.bottom || this.right < other.left || this.left > other.right ) {
            return false;
        } else {
            return true;
        }
    }
}



