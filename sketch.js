const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls = []
var boats = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  ground = Bodies.rectangle(600, 580, 1200, 20, { isStatic: true });
  World.add(world, ground);
  cannon = new Cannon(180, 110, 130, 100, 100);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  for (var i = 0; i<balls.length; i++){
    balls[i].display()
  }
  
  if (boats.length>0){
    if (boats[boats.length-1]===undefined||boats[boats.length-1].body.position.x<1000){
      boat = new Boat(1200, 550, 150, 150)
      boats.push(boat)
    }
  } else {
    boat = new Boat(1200, 550, 150, 150)
    boats.push(boat)
  }

  for (var i = 0; i<boats.length; i++){
    boats[i].display()
    Matter.Body.setVelocity(boats[i].body, {x: -0.8, y:0})  
  }
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall)
  }
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length-1].shoot();
  }
}
