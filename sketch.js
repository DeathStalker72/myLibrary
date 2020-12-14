var fixedRectangle,movingRectangle;
var box1,box2,box3,box4;

function setup() {
  createCanvas(800,400);
  
  fixedRectangle = createSprite(400,200,50,50);
  fixedRectangle.shapeColor="red";
  movingRectangle = createSprite(10,10,50,50);
  movingRectangle.shapeColor="red";
  box1 = createSprite(0,100,50,50);
  box1.shapeColor="yellow";
  box1.velocityX=5;
  box2 = createSprite(800,100,50,50);
  box2.shapeColor="blue";
  box2.velocityX=-5;
  box3 = createSprite(500,0,50,50);
  box3.shapeColor="green";
  box3.velocityY=5;
  box4 = createSprite(500,400,50,50);
  box4.shapeColor="purlpe";
  box4.velocityY=-5;
}

function draw() {
  background(0);  

  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY;
  fixedRectangle.debug=true;
  movingRectangle.debug=true;
  isTouching(movingRectangle,fixedRectangle);
  bounce(box1,box2);
  bounce(box3,box4);
  drawSprites();
}
