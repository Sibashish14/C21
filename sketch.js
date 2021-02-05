var canvas;
var music;
var redRect;
var yellowRect,blueRect,greenRect;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    yellowRect=createSprite(700,590,200,15);
    yellowRect.shapeColor="yellow";

    greenRect=createSprite(500,590,200,15);
    greenRect.shapeColor="green";

    redRect=createSprite(300,590,200,15);
    redRect.shapeColor="red";

    blueRect=createSprite(100,590,200,15);
    blueRect.shapeColor="blue";

    ball=createSprite(600,300,20,20);
    ball.velocityY=5;
    ball.velocityX=5;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges=createEdgeSprites();

    //add condition to check if box touching surface and make it box

    if( (ball.x >= (yellowRect.x - yellowRect.width/2 )) && 
        (ball.x < (yellowRect.x + yellowRect.width/2 )) &&
        (ball.y > (yellowRect.y - (yellowRect.height/2 + ball.height/2))) ){
       ball.shapeColor="yellow";
       ball.velocityY=ball.velocityY*(-1);       
    }

    if( (ball.x >= (greenRect.x - greenRect.width/2 )) && 
        (ball.x < (greenRect.x + greenRect.width/2 )) &&
        (ball.y > (greenRect.y - (greenRect.height/2 + ball.height/2))) ){
       ball.shapeColor="green";
       ball.velocityY=ball.velocityY*(-1);       
    }

    if( (ball.x >= (redRect.x - redRect.width/2 )) && 
        (ball.x < (redRect.x + redRect.width/2 )) &&
        (ball.y > (redRect.y - (redRect.height/2 + ball.height/2))) ){
       ball.shapeColor="red";
       ball.velocityY=ball.velocityY*(-1);       
    }

    if( (ball.x >= (blueRect.x - blueRect.width/2 )) && 
        (ball.x < (blueRect.x + blueRect.width/2 )) &&
        (ball.y > (blueRect.y - (blueRect.height/2 + ball.height/2))) ){
       ball.shapeColor="blue";
       ball.velocityY=ball.velocityY*(-1);       
    } 

    if( (ball.x - ball.width/2 < 0 ) ||
        (ball.x + ball.width/2 > width) ){
      ball.velocityX=ball.velocityX*(-1);
    }

    if((ball.y - ball.height/2) < 0){
      ball.velocityY=ball.velocityY*(-1);
    }


    drawSprites(); 
}