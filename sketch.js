var Boy,pills,Cell,Cell2;
var Bg2;

function preload(){
  BoyImg = loadAnimation("PC.png");
  CellImg = loadAnimation("Cancer cell.png");
  Bg = loadImage("bg2.jpg");
  PillsImg = loadAnimation("pills.png");

}

function setup() {
  createCanvas(1000,400);

  Bg2 = createSprite(400,200);
  Bg2.addImage(Bg);
  Bg2.velocityX = -4;

  Boy = createSprite(100,300,50,50)
  Boy.addAnimation("Boyrunning",BoyImg);
  Boy.scale = 0.3
  //Boy.velocityX = 3;

  Cell = createSprite(900,300,20,20);
  Cell.addAnimation("Cancer_cell", CellImg);
  Cell.scale = 0.2;
  Cell.velocityX = -3;
  Cell.velocityY = 3;
  Cell.lifetime = 400;

  pills = createSprite(900,90,20,20);
  pills.addAnimation("pillsimg",PillsImg);
  pills.scale = 0.2;

  Cell2 = createSprite(200,300,20,20);
  Cell2.addAnimation("cell2",CellImg);
  edges = createEdgeSprites();
  Cell2.scale = 0.2;
  Cell2.velocityX = -4;
  Cell2.velocityY = 4;
  Cell2.lifetime = 400;

  
  
}

function draw() {
  background(0); 
  Bg2.velocityX = -4;
  if (Bg2.x<0) {
    Bg2.x = Bg2.width/14;
  }

  var score = 0;
  text("Score: "+ score,950,350);
  
  if(keyDown(LEFT_ARROW)){
    Boy.x = Boy.x - 4;
  }
  if(keyDown(RIGHT_ARROW)){
    Boy.x = Boy.x + 4;
  }

  if(keyDown(UP_ARROW)){
    Boy.y = Boy.y - 4;
  }

  if(keyDown(DOWN_ARROW)){
    Boy.y = Boy.y + 4;
  }

  if(Boy.isTouching(pills)){
    score += 1;
  }

  Cell.bounceOff(edges);
  Cell2.bounceOff(edges);
  //Boy.bounceOff(edges);



  drawSprites();
}