const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var img;
var snow;

function setup() {
  createCanvas(800,400);
  //img = loadImage("snow1.jpg")
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  snow = new Snow();
}

function draw() {
  //background(img); 
  background("black")
  Engine.update(engine);
  snow.display();
  drawSprites();
}