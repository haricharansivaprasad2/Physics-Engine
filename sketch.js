const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options ={
    isStatic: true
}
var ballOptions ={
  restitution: 1.5
}
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  ball = Bodies.circle(200,200,50,ballOptions);
  World.add(world,ball);
}

function draw() {
  background(0,0,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400 ,20); 
  ellipse(ball.position.x,ball.position.y,50); 
  drawSprites();
}