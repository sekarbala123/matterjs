// import { World } from "matter-js";


function Box(x, y, w, h){
    var options ={
        friction: 0.3
    };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colors = [random(0,255),random(0,255),random(0,255)];
    this.body = Bodies.rectangle(this.x,this.y,this.w, this.h, options);
    World.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle =this.body.angle;
        push();
        // noStroke();
        fill(this.colors)
        rect(pos.x, pos.y, this.w, this.h);
        // angle(angle);
        pop();
    }
}