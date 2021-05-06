 const Engine= Matter.Engine
 const World= Matter.World
 const Bodies=Matter.Bodies
 var PLAY = 1;
var END = 0;
var gameState = PLAY;

var engine, world;
var fish
var fishImage
var background1
var background1Img
var sharks,sharkGroup;
var sharkImage
var eels
var engine
var world
var bodies
//var wastes
//var wasteImg
function preload() {
  fishImage=loadAnimation("fish1.png","fish2.png","fish3.png");
  background1Img=loadImage("background.png");
  sharkImage = loadImage("shark.png");
  collidedSound = loadSound("collided.wav")
  //wastesImg=loadImage("plastic-bag-cartoon-png.png");
}

function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
  sharkGroup = new Group ();
  engine = Engine.create();
  world = engine.world;
 

  fish=createSprite(windowWidth/2, windowHeight-100, 50, 50);
  fish.addAnimation("fishImage",fishImage);
 // wastes=createSprite(Math.round(random(10,390)),Math.round(random(10,100)),30,30);
 // wastes.addImage("wastesImg",wastesImg);
  //background1=createSprite(100,100);
  //background1.addImage("background1Img",background1Img);
  fish.velocityY=-0.9;
  fish.scale=0.09;

  ground = createSprite(displayWidth/2,displayHeight-100, displayWidth,300);
  ground.addImage("ground",background1Img);
 

}


function draw() {
  background(0,0,200);
  if (gameState===PLAY){
  Engine.update(engine);

  if(keyDown(LEFT_ARROW)){
    fish.x=fish.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    fish.x=fish.x+10;
  }
 

 image (background1Img, 0,displayWidth/2, displayWidth-20, displayHeight - 20)

  createShark();
  if(sharkGroup.isTouching(fish)){
    collidedSound.play()
    gameState = END;
}
  }
else if (gameState === END) {
  fish.velocityY= 2
}
  drawSprites();
}

// look for pictures of waste done 
// make waste funtion createSprite and add picture
//create sharks at different y postions and give velocity
 
function createShark(){
  if (frameCount % 90 === 0 ){
    shark = createSprite (windowWidth- 100 , random (30, windowHeight- 100),random (40,90), 25)
    shark.scale = 0.1
    shark.velocityX = random (-3,-5)
    shark.lifetime=300 
    shark.addImage(sharkImage)
    sharkGroup.add (shark)

  }
}