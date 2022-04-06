let startWeight = 6;
let canvasSize = 800;
let temperature;

function setup() {
  let drawing = createCanvas(canvasSize, canvasSize);
  drawing.parent("drawing");
  colorMode(HSL);
  // temperatureInput = createSlider(10, 25, 10);
  // temperatureInput.position(20, 20);
  // temperatureInput.parent("inputs");
  // text('Temperature', temperatureInput.x * 2 + temperatureInput.width, 35).parent("inputs");


}

function draw() {
  background(225);
  temperature = select("#temperatureInput").value();
  text("Temperature: "+temperature, 20, 35);
  // temperature.changed(changeTemperature)

  // function changeTemperature(){
  //   text(temperature, 20, 35);
  // }


var numEmergent = 2;
var numCanopy = 10;
var numUnderstory = 20;
var numForestFloor = 25;

drawFoliage(numEmergent, "emergent");
drawFoliage(numCanopy, "canopy");
drawFoliage(numUnderstory, "understory");
drawFoliage(numForestFloor, "forest floor");


//  if( cg.get(x, y)[0] == 255 ){
//     let r = int(random(3));

//      fill(0,80,255); 

//     ellipse(x, y, random(1, 10));
//  }


noLoop()

}

function branch(length, weightIn) {
  let randLen = random(0.5,1)
  let randAngle = random(PI/20, PI/6)
  let weight = weightIn - 1
  strokeWeight(weight)
  line(0,0,0, -length)
  translate(0, -length)
  if (length > 8) {
      push()
          rotate(randAngle)
          branch(length * randLen, weight)
      pop()
      push()
          rotate(-randAngle)
          branch(length * randLen, weight)
      pop()
      push()
          rotate(-randAngle +PI/3)
          branch(length * randLen, weight)
      pop()
  }
  noLoop()
}


function drawFoliage(amount, type) {
  
    if (type=="emergent"){
      for (i=0; i<=amount-1; i++){
        var treeHeight = random(2.8,3);
        var position = random(0,canvasSize);
  
        push()
        translate(position, height)
        stroke(40,200,10);
        scale(treeHeight)
        branch(75, startWeight)
        translate(0, -150)
        console.log("working")
        pop()
      }
    }
  
    if (type=="canopy"){
      for (i=0; i<=amount-1; i++){
        var treeHeight = random(1,1.5);
        var position = random(0,canvasSize);

        push()
        translate(position, height)
        stroke(40,200,15);
        scale(treeHeight)
        branch(75, startWeight)
        translate(0, -150)
        console.log("working")
        pop()
      }
    }
  
    if (type=="understory"){
      for (i=0; i<=amount-1; i++){
        var treeHeight = random(.5,.75);
        var position = random (0,canvasSize);
  
        push()
        translate(position, height)
        stroke(40,200,25);
        scale(treeHeight)
        branch(75, startWeight)
        translate(0, -150)
        console.log("working")
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
        var position = random (0,canvasSize);
        ellipse(position, canvasSize, diameter, diameter);
        pop()
      }
    }
   
  }
  
  