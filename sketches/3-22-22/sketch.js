function setup() {
  createCanvas(450, 450);
  colorMode(HSL);
}

function draw() {
  background(225);

var numEmergent = 2;
var numCanopy = 10;
var numUnderstory = 20;
var numForestFloor = 25;

drawFoliage(numEmergent, "emergent");
drawFoliage(numCanopy, "canopy");
drawFoliage(numUnderstory, "understory");
drawFoliage(numForestFloor, "forest floor");

noLoop()

}

function drawFoliage(amount, type) {
strokeWeight(15);

  if (type=="emergent"){
    for (i=0; i<=amount-1; i++){
      // DRAW TRUNK
      stroke(40,200,10);
      var height = random(320,380);
      var position = random (0,450);
      line(position, 450-height, position, 450);

      // DRAW LEAVES
      push()
      fill(150,200,10);
      strokeWeight(0);
      ellipse(position, 450-height, 150, 150);
      pop()
    }
  }

  if (type=="canopy"){
    for (i=0; i<=amount-1; i++){
      // DRAW TRUNK
      stroke(40,200,15);
      var height = random(200,290);
      var position = random (0,450);
      line(position, 450-height, position, 450);

      // DRAW LEAVES
      push()
      fill(150,200,20);
      strokeWeight(0);
      ellipse(position, 450-height, 100, 100);
      pop()
    }
  }

  if (type=="understory"){
    for (i=0; i<=amount-1; i++){
      stroke(40,200,25);
      var height = random(70,150);
      var position = random (0,450);
      line(position, 450-height, position, 450);


      // DRAW LEAVES
      push()
      fill(150,200,30);
      strokeWeight(0);
      ellipse(position, 450-height, 80, 60);
      pop()
    }
  }

  if (type=="forest floor"){
    fill(150,200,25);
    strokeWeight(0);
    for (i=0; i<=amount-1; i++){
      push()
      var diameter = random(5,20);
      translate(0, -diameter/2);
      var position = random (0,450);
      ellipse(position, 450, diameter, diameter);
      pop()
    }
  }
 
}