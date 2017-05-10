/**
 * Created by Feldo on 8. 5. 2017.
 */
class Time {
    constructor(){
        this.level = 0;
        this.time = 0;
        this.limit = 50;
        this.interval = 10;
    }
    draw(){
        //ctx.font = "25px Arial";
        //ctx.fillText("Score: " + this.score.toString(), 750, 40);
    }
    tick(){
        this.time+=this.interval;
        if(this.time >= this.limit){
            this.time = 0;
            this.level+=2;
            speed-=3;
            jumpSpeed-=2;
            score++;
            this.interval -= 5;
            //this.interval = Math.floor(1000/speed);
            clearInterval(loop);
            loop = setInterval("frame()", speed);
        }
    }
}