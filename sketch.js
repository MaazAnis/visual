var fixedRect, movingRect;

var newRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  newRect = createSprite(400,400,20,100)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,newRect)) {
    movingRect.shapeColor = "red";
    newRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    newRect.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect)
  drawSprites();
}

