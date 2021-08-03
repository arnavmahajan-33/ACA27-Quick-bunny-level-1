var player;
var target;
var obs1;
var obs2;
var obs3;

function setup() {
  createCanvas(600, 600);
  edges = createEdgeSprites();

  player = createSprite(50, 500, 20, 20)
  player.shapeColor = "white"

  target = createSprite(500, 50, 50, 50)
  target.shapeColor = "orange"

  obs1 = createSprite(200, 200, 100, 20)
  obs1.shapeColor = "brown"
  obs1.velocityX = +4

  obs2 = createSprite(300, 300, 100, 20)
  obs2.shapeColor = "brown"
  obs2.velocityX = -4
  
  obs3 = createSprite(400, 400, 100, 20)
  obs3.shapeColor = "brown"
  obs3.velocityX = +4

  obs4 = createSprite(150, 150, 100, 20)
  obs4.shapeColor = "brown"
  obs4.velocityX = -4
}

function draw() {
  background("green");
  stroke("white")
  textSize(30);
  if (keyDown("left"))
    player.x -= 4;
  if (keyDown("right"))
    player.x += 4;
  if (keyDown("up"))
    player.y -= 4;
  if (keyDown("down"))
    player.y += 4;

  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);

  if (player.isTouching(obs1)) {
    text("YOU LOSE", 250, 250)
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
    player.x = 50;
    player.y = 500;
  }

  if (player.isTouching(obs2)) {
    text("YOU LOSE", 250, 250)
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
    player.x = 50;
    player.y = 500;
  }

  if (player.isTouching(obs3)) {
    text("YOU LOSE", 250, 250)
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
    player.x = 50;
    player.y = 500;
  }

  if (player.isTouching(obs4)) {
    text("YOU LOSE", 250, 250)
    obs1.velocityX = 0;
    obs2.velocityX = 0;
    obs3.velocityX = 0;
    obs4.velocityX = 0;
    player.x = 50;
    player.y = 500;
  }

  if (player.isTouching(target)) {
    text("YOU WON", 100, 100)
    player.x = 50;
    player.y = 500;
  }
  drawSprites();
}
