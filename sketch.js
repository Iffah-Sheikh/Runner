var track;
var trackImage;
var runner, runnerImage;
var invisibleLeft;
var invisibleRight;

function preload(){
  //pre-load images
  trackImage = loadImage("path.png");
  runnerImage = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here


  track = createSprite(200,200);
  
  track.velocityY = 4;
  track.scale = 1.2;
  track.addImage(trackImage);

  invisibleRight = createSprite(400,200,10,400);
  invisibleRight.visible = false;

  invisibleLeft = createSprite(0,200,10,400);
  invisibleLeft.visible = false;

  runner = createSprite(200,200);
  runner.scale = 0.10;
  runner.addAnimation("running", runnerImage);
}

function draw() {
  background(0);

  drawSprites();

  runner.x = World.mouseX;
  runner.collide(invisibleLeft);
  runner.collide(invisibleRight);

  if(track.y > 400) {
    track.y = height/2;
  }
}
