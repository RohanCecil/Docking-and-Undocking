var spacebgImg, issImg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var iss, spacecraft;
var black;

function preload(){
  issImg=loadImage("images/iss.png");
  spacebgImg=loadImage("images/spacebg.jpg");
  spacecraft1Img=loadImage("images/spacecraft1.png" );
  spacecraft2Img=loadImage("images/spacecraft2.png" );
  spacecraft3Img=loadImage("images/spacecraft3.png" );
  spacecraft4Img=loadImage("images/spacecraft4.png" );

}

function setup() {
 var canvas = createCanvas(800,400)
 
 iss=createSprite(400, 200, 50, 50);
 iss.addImage("iss",issImg);
 iss.scale=0.7;

 spacecraft=createSprite(150,350,50,50);
 spacecraft.addImage("spacecraft",spacecraft1Img);
 spacecraft.scale=0.2

 block=createSprite(360,209,1,1);
 block.visibilty=false;
 
}

function draw() {
  background(spacebgImg);  

  if(keyDown(LEFT)){
    spacecraft.x=spacecraft.x-10;
  }
  
  if(keyDown(RIGHT)){
    spacecraft.x=spacecraft.x+10;
  }
  
  if(keyDown("UP")){
    spacecraft.y=spacecraft.y-10;
  }  

  if(spacecraft.isTouching(block)){
    textSize(25);
    fill("white");
    text("Docking Succesfull",400,50);
  }

  
  drawSprites();
}