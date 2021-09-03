const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []
function preload(){
  zombieimg=loadImage("assets/zombie.png")
  bg=loadImage("assets/background.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground=new Base(width/2,height-20,width,30)
  left=new Base(150,height/2,300,50)
  right=new Base(width-150,height/2,300,50)
  bridge=new Bridge(20,{x:250,y:height/2})
point=new Base(width-300,height/2,20,20)
Composite.add(bridge.body,point)
link= new Link(bridge, point)
for(var i=0;i<10;i++){
  var x=random(width/2-200,width/2+200)
  var y=random(10,height/2-200)
  stone= new Stone(x,y,40)
  stones.push(stone)
}
zombie=createSprite(width/2,height-80)
zombie.addImage(zombieimg)
zombie.scale=0.1
zombie.velocityX=5
button=createImg("assets/axe.png")
button.position(width-300,height/2)
button.size(50,50)
button.mouseClicked(function(){
  link.break()
  setTimeout(function(){
    bridge.break()
  },2000)
})
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display()
  left.display()
  right.display()
  bridge.display()
  for (var i=0;i<stones.length;i++){
    stones[i].display()
  }
  if(zombie.x>width-300){
    zombie.velocityX=-5
  }
  if(zombie.x<300){
    zombie.velocityX=5
  }
  drawSprites()
}
