var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload(){
bgImg = loadImage("assets/maze.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

}

function setup(){

  createCanvas(1500,740)
//
bg = createSprite(95,85,1,1);
bg.addImage(bgImg);
bg.scale = 0.5

var obstacle = createSprite(90,289,10,10);


var line1= createSprite(750,5,1500,8)
line1.shapeColor="black"

var line2= createSprite(0,735,3000,8)
line2.shapeColor="black"

var line3= createSprite(5,370,8,735)
line3.shapeColor="black"

var line4= createSprite(1495,370,8,735)
line4.shapeColor="black"

var line5= createSprite(180,180,8,150)
line5.shapeColor="black"

var line6= createSprite(180,420,8,150)
line6.shapeColor="black"


var line7= createSprite(300,495,250,8)
line7.shapeColor="black"

var line8= createSprite(50,610,950,8)
line8.shapeColor="black"

var line9= createSprite(370,125,200,8)
line9.shapeColor="black"

var line10= createSprite(430,216,90,8)
line10.shapeColor="black"

var line11= createSprite(475,230,8,30)
line11.shapeColor="black"

var line12= createSprite(280,300,8,150)
line12.shapeColor="black"

var line13= createSprite(350,320,150,8)
line13.shapeColor="black"

var line14= createSprite(590,400,8,175)
line14.shapeColor="black"

var line15= createSprite(510,420,170,8)
line15.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"

//var line1= createSprite(750,5,1500,8)
//line1.shapeColor="black"


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0;



}

function draw() {
  
  background("darkblue");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            //balloon.velocityY = -6 ;
            
          }

          //adding gravity
          //balloon.velocityY = balloon.velocityY + 2;

           
          Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    obstacleTop.scale = 0.1;
   // obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop.lifetime = 0;
    
   balloon.depth = balloon.depth + 1;
   
      }
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = balloon.depth;
          bar.lifetime = 0;
          bar.visible = false;
         }
}


  
