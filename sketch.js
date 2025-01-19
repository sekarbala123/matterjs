var Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  World = Matter.World;
var engine;
var world;
var bodies =[];

function setup() {
  createCanvas(1200, 1200);
  engine = Engine.create({
    gravity: {y:0}
  });
  world = engine.world;
  // runner = Runner.create();
  // Runner.run(runner, engine);

  // box = new Box(10, 10, 100, 100);
  // bodies.push(box);
}

function draw() {
  background(100);
  // rect(10,10,100,50,10,1,50,2)
  Engine.update(engine);
  for (var i=0; i< bodies.length; i++) {
    bodies[i].show();
  }
}

function mouseDragged() {
  var b = new Box(mouseX, mouseY, random(10, 50), random(10, 100));
  bodies.push(b);
}

function mouseMoved(){
  var c = new Circle(mouseX, mouseY, random(10, 24));
  bodies.push(c);
}