/**
 * Created by Feldo on 7. 5. 2017.
 */
var audio = new Audio('maga.mp3');

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