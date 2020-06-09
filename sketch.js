var player,player_image;
var ground;
var enmy, enmy_image;
var purpleKey, purpleKey_Image;
var purpleSafe, purpleSafe_Image;

function preload(){
  player_image= loadAnimation("Images/DipperPines.png,","Images/DipperRunning.png");
  
  enmy_image= loadImage("Images/Villian.png");
  purpleKey_Image = loadImage("Images/Purplekey.png");
  purpleSafe_Image = loadImage("Images/Purplesafelocked.png");
  
  }

function setup() {
  
  createCanvas(1200,400);
  player = createSprite(20,20,200,200);
player.addAnimation("Img",player_image);
enmy = createSprite(20,20,200,300);
enmy.addImage(enmy_image);

var purpleKey = createSprite(10,5,100,200);
purpleKey.addImage(purpleKey_Image);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}