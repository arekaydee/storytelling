//global variables go here
var direction= "right";

var moveX = 0;
var moveY = 10;
var speed = 3;

//only use the preload function if you need to load images
//remember you will need to use Anvil to run your local server
// function preload(){

// }


//Set up your canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");

}


//Draw your story
function draw() {
  if (direction == "up"){
			moveY -=speed;
		} else if (direction == "down"){
			moveY+=speed;
		} else if (direction == "left"){
			moveX-=speed;
		} else if (direction == "right"){
			moveX+=speed;
		} else if (direction == "stars"){
      for(var i = 0; i < 50 ;i = i+1){
        noStroke();
        fill("white");
        ellipse(random(windowWidth), random(windowHeight),1,1);
        fill("black");
        ellipse(random(windowWidth), random(windowHeight),2,2);
    	}
		}



  if(moveX < 0){
  			moveX = windowWidth;
  		} else if(moveX > windowWidth){
  			moveX = 0;
  		} else if(moveY < 0){
  			moveY = windowHeight;
  		} else if (moveY > windowHeight){
  			moveY = 0;
  		}
    fill("#cccccc");
		noStroke();
		ellipse(moveX, moveY,10,10);
    textSize(48);
    text("The Invincible Space Snake! (Press Space)", 30, 75);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    direction = "up";
  } else if (keyCode === DOWN_ARROW) {
    direction = "down";
  } else if (keyCode === LEFT_ARROW){
  	direction = "left";
  } else if (keyCode === RIGHT_ARROW){
  	direction = "right";
  } else if (keyCode === 32){
  	direction = "stars";
  }

  //check the shift key to switch the background color
  // if(keyCode === SPACE){
  // 	for(var i = 0; i < 100 ;i = i+1){
  //     fill("white");
  //     noStroke();
  //     ellipse(random(windowWidth), random(windowHeight),1,1);
  // 	}
  // }
}

// add your functions
