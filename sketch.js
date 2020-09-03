var bananaImage,obstacleImage,bgroup,back,
score,backImage,player_running,player,rgroup,gamestate,play,end;

function preload(){
  player_running=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}


function setup() {
  score=0;
  createCanvas(400, 400);
  back=createSprite(200,350,400,15);
  back.scale = 1;
  player=createSprite(40,315,400,25);
  player.scale = 0.1;
  player.addAnimation("run",player_running)
  player.collide(back)
  bgroup=new Group();
  rgroup=new Group();
  gamestate=1;
  play=1;
  end=0;
  switch(score) {
      case 10: player.scale=0.12;
              break;
      case 20: player.scale=0.14;
              break;
      case 30: player.scale=0.16;
              break;
      case 40: player.scale=0.18;
              break;
      default: break;
    }
  
}

function draw() {
  if(gamestate === play){
    
    if(bgroup.isTouching(player)){
      score=score+2;
    bgroup.destroyEach();
    }
    
    if(keyDown("space") && player.y >= 200){
      player.velocityY = -14;
    }
    
     f();
    rs();
  
    if(rgroup.isTouching(player)){
      gamestate = end;
  
    }
  }
  if(gamestate === end) {
    bgroup.setVelocityXEach(0);
    rgroup.setVelocityXEach(0);
    player.velocityY=0;
    }
  player.velocityY = player.velocityY + 0.8;
  player.collide(back)
  background(220);
  drawSprites();
  text("Score: "+ score, 300,50);

  
}

function f(){
  if(frameCount % 175 === 0) {
  var fr = createSprite(400,200,40,40);
  fr.addImage(bananaImage)
    fr.velocityX=-2
    fr.scale=0.06
    bgroup.add(fr);
  }
}

function rs(){
  if(frameCount % 300 === 0) {
  var r = createSprite(400,315,40,40);
  r.addImage(obstacleImage)
    r.velocityX=-2
    r.scale=0.15
   rgroup.add(r);
  }
}