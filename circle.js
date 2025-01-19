// import { World } from "matter-js";


function Circle(x, y, r){
    var options ={
        friction: 0.3,
        gravity: 0
    };
    this.x = x;
    this.y = y;
    this.r = r;
    this.colors = [random(0,255),random(0,255),random(0,255)];
    this.body = Bodies.circle(this.x,this.y,this.r, options);
    World.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle =this.body.angle;
        push();
        // noStroke();
        fill(this.colors)
        circle(pos.x, pos.y, this.r);
        // angle(angle);
        pop();
    }
}