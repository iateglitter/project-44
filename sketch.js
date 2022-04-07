var player;

function preload(){
  bgimage = loadImage("clouds.jpeg");
  bgSound = loadSound("song.mp3.crdownload")
}

function setup(){
createCanvas(800,800);
bg = createSprite(400,400);
bg.addImage(bgimage);
bg.scale = 2.5;
player = createSprite(400,750,20,20);
player.shapeColor =rgb (237,168,244);
   
friendsGroup = new Group();




}

function draw() {
  
  background("black");
  drawSprites();
//  bgSound.play();
  bg.velocityY= 1;
  if(bg.y>600)
 {
   bg.y=bg.width/2;
 }
  if(keyDown("UP_ARROW")){
    player.y = player.y - 10;
  }

  if(keyDown("DOWN_ARROW")){
    player.y = player.y + 10;
  }
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 10;
  }

  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 10;
  }
for(var i = 0; i < friendsGroup.length; i++){
  if(player.isTouching(friendsGroup[i])){
  friendsGroup[i].shapeColor = rgb (237,168,244);
  }   
}
     
       people();
}
function people() {
if (frameCount%100===0){
  friends = createSprite(random(50,750),random(50,750),20,20);
  friends.shapeColor = "blue";
  //friends.lifetime = 800;
friendsGroup.add(friends);
}
}