var bananaImage,obstacleImage,bgroup,back,
score,backImage,player_running,player;

function preload(){
  player_running=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
}


function setup() {
  createCanvas(400, 400);
  back=createSprite(200,350,400,15);
  back.scale = 1;
  player=createSprite(40,315,400,25);
  player.scale = 0.1;
  player.addAnimation("run",player_running)
  player.collide(back)
  bgroup=new Group();
  
}

function draw() {
  background(220);
  drawSprites();
}

function f(){
  if(frameCount % 60 === 0) {
  var fr = createSprite(100,200,40,40);
  fr.addImage(bananaImage)
    fr.velocityx=-2
    bgroup.add(fr);
  }
}