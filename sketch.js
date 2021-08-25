var a;
function setup() {
  createCanvas(1800,960);
  a = createSprite(200,200,25,25);
}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)) {
    a.x = a.x +10;
  }
  if (keyDown(LEFT_ARROW)) {
    a.x = a.x -10;
  }
  if (keyDown(UP_ARROW)) {
    a.y = a.y -10;
  }
  if (keyDown(DOWN_ARROW)) {
    a.y = a.y +10;
  }

  drawSprites();
}




