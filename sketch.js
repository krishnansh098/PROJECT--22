const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object;
var ground,ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world  = engine.world;

   var ground_option = {
     isStatic:true
   }
  ground = Bodies.rectangle(200,380,400,10,ground_option);
  World.add(world,ground);
  console.log(object);

  var ball_option = {
restitution:1.0
  }
  ball = Bodies.circle(200,200,20,ball_option);
  World.add(world,ball);
  
}

function draw() {
  background("black");
  Engine.update(engine);
    rectMode (CENTER)  ;
  rect (ground.position.x,ground.position.y,400,10);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20)

}