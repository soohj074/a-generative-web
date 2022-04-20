let startWeight = 6;
let canvasSize = 1000;
let temperature;
var angle;
var sentence;
var len = 70;
var rules = [];

// LEAF COLOR
var leafColor,
minColor,
maxColor,
leafSaturation,
leafOpacity;

// USER INPUT DUMMY VARIABLES
var season = "fun";
var forestType = "temperate";
var numLayers = 4;


// FOLIAGE COUNTS
var numEmergent = 2;
var numCanopy = 5;
var numUnderstory = 10;
var numForestFloor = 25;


function setup() {
  let drawing = createCanvas(canvasSize, 600);
  drawing.parent("drawing");
  colorMode(HSL);
  // temperatureInput = createSlider(10, 25, 10);
  // temperatureInput.position(20, 20);
  // temperatureInput.parent("inputs");
  // text('Temperature', temperatureInput.x * 2 + temperatureInput.width, 35).parent("inputs");
  background(225);

  // SET METADATA VARIABLES FROM USER INPUTS
    temperature = select("#temperatureInput").value();
    text("Temperature: "+temperature, 20, 35);
    // temperature.changed(changeTemperature)
    var seasonList = ["fall","spring","summer","winter","fun"]
    var forestList = ["temperate","tropical","boreal"]

    forestType = forestList[Math.floor(random(0,2))]
    // season = seasonList[Math.floor(random(0,3))]
    numLayers = Math.floor(random(1,5))


  // SET LEAF COLORS
  if (season == "fall"){
    minColor = 1;
    maxColor = 60;
    leafSaturation = 50;
    leafOpacity = 0.2;
  } else if (season == "spring"){
    minColor = 60;
    maxColor = 110;
    leafSaturation = 50;
    leafOpacity = 0.2;
  } else if (season == "summer"){
    minColor = 90;
    maxColor = 110;
    leafSaturation = 50;
    leafOpacity = 0.2;
  } else if (season == "winter"){
    minColor = 0;
    maxColor = 0;
    leafSaturation = 50;
    leafOpacity = 0;
  } else if (season == "fun"){
    minColor = 0;
    maxColor = 360;
    leafSaturation = 50;
    leafOpacity = 0.3;
  }


  // DRAW FOREST
  if (numLayers == 4){
  drawFoliage(numEmergent, "emergent", forestType);
  drawFoliage(numCanopy, "canopy" , forestType);
  drawFoliage(numUnderstory, "understory", forestType);
  drawFoliage(numForestFloor, "forest floor", forestType);
  } else if (numLayers == 3){
    drawFoliage(numEmergent, "emergent", forestType);
    drawFoliage(numCanopy, "canopy" , forestType);
    drawFoliage(numUnderstory, "understory", forestType);
  } else if (numLayers == 2){
    drawFoliage(numCanopy, "canopy" , forestType);
    drawFoliage(numUnderstory, "understory", forestType);
  } else if (numLayers == 1){
    drawFoliage(numUnderstory, "understory", forestType);
  }




}



function generate(x,minAngle,maxAngle) {
  len *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  // createP(sentence);
  turtle(x,minAngle,maxAngle)
  ;}


function turtle(x, minAngle, maxAngle) {
  resetMatrix();
  translate(x, height);

  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    }else if (current == "X"){

    } else if (current == ">") {
      len=len*1.01;
    } else if (current == "+") {
      rotate(radians(random(minAngle,maxAngle)));
    } else if (current == "-") {
      rotate(-radians(random(minAngle,maxAngle)))
    } else if (current == "[") {
      push();
    } else if (current == "]") {
        // green leaves
         noStroke();
         fill(leafColor);
         var leafW = 3 ;
         var leafH = 6 ;
         ellipse(0, 0, leafW, leafH);
      pop();
    }
  }

}


function drawFoliage(amount, type, forestType) {

    if (type=="emergent"){
      leafColor = color(random(minColor,maxColor), leafSaturation, 32, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0,canvasSize);
        translate(position, height)
        stroke(47, 18, 70, 0.4);
        scale(treeHeight)

        console.log(forestType)
        
        // SET  RULES AND ANGLE RANGE ACCORDING TO FOREST TYPE
      if (forestType == "temperate"){
          var treeHeight = random(200,250);
          var axiom = "X";
          rules[0] = {
            a: "X",
            b: "F[+X]F[-X]+X"
          }
          rules[1] = {
            a: "F",
            b: "FF"
          }
          var angleRange = [10,40];
          console.log(treeHeight)
      } 
      else if (forestType == "tropical"){
        strokeWeight(random(1,1.5))
        stroke(30, 18, 30, 0.7);
        var treeHeight = random(150,200);
        var axiom = "X"
        rules[0] = {
          a: "F",
          b: "FF"
          }
          
          rules[1] = {
          a: "X",
          b: "-F[+F][----X]+F-F[++++X]-X"
          }
        var angleRange = [5,15];
        console.log(treeHeight)

      }
        len = treeHeight;
        sentence = axiom;
        
        // DRAW THE TREE
        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=6; j++){
        generate(position, angleRange[0], angleRange[1])
        }


      }
    }
  
    if (type=="canopy"){
      leafColor = color(random(minColor,maxColor), leafSaturation, 32, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0,canvasSize);
        translate(position, height)
        stroke(47, 18, 50, 0.4);

        scale(treeHeight)
        
        // SET  RULES AND ANGLE RANGE

        if (forestType == "temperate"){
          var treeHeight = random(50,100);
          var axiom = "F";
          rules[0] = {
            a: "F",
            b:"FF+[+F-F-F]-[-F+F+F]"
          }
          var angleRange = [23,30];
          var numIterations = 4;
        } 
        else if (forestType == "tropical"){
          strokeWeight(random(1,1.5))
          stroke(30, 18, 30, 0.7);
          var treeHeight = random(100,150);
          var axiom = "X"
          rules[0] = {
            a: "F",
            b: "FX[FX[+XF]]"
            }
            
            rules[1] = {
            a: "X",
            b: "FF[+++X++X-F[+++X]][-X++F---X]"
            }
            
            rules[2] = {
            a: "X",
            b: "[+F-X-F][++X]"
            }
          var angleRange = [5,10];
          var numIterations = 3;
  
        }

        len = treeHeight;
        sentence = axiom;

        // DRAW THE TREE

        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=numIterations; j++){
        generate(position, angleRange[0], angleRange[1])}

      }
    }
  
    if (type=="understory"){
      leafColor = color(random(minColor,maxColor), leafSaturation, 32, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0,canvasSize);
   
        // RESET VARIABLES FOR NEW TREE
        len = treeHeight;
        translate(position, height)
        stroke(47, 18, 32, 0.4);
        scale(treeHeight)
        
        // SET  RULES AND ANGLE RANGE

        if (forestType == "temperate"){
          var treeHeight = random(50,70);
          var axiom = "X";
          rules[0] = {
            a: "F",
            b:"FF"
          }
  
          rules[1] = {
            a: "X",
            b:" F+[-F-XF-X][+FF][--XF[+X]][++F-X]"
          }
          
          var angleRange = [23,30];
        } 
        else if (forestType == "tropical"){
          strokeWeight(random(1,1.2))
          stroke(30, 18, 30, 0.7);
          var treeHeight = random(50,70);
          var axiom = "F"
          rules[0] = {
            a: "F",
            b: "F[+F]F[-F][F]"
            }
          var angleRange = [15,25];

          }
        sentence = axiom;


        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=4; j++){
        generate(position, angleRange[0], angleRange[1])}


        translate(0, -150)
        pop()

      }
    }
  
    if (type=="forest floor"){
      leafColor = color(random(minColor,maxColor), leafSaturation, 32, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0,canvasSize);

        
        // RESET VARIABLES FOR NEW TREE

  
        translate(position, height)
        stroke(47, 10, 32, 0.2);

        scale(treeHeight)
        
        // SET  RULES AND ANGLE RANGE
        if (forestType == "temperate"){
          var treeHeight = random(10,20);
          var axiom = "X";
          rules[0] = {
            a: "X",
            b: "F[+X][-X]FX"
          }
          rules[1] = {
            a: "F",
            b: "FF"
          }
          var angleRange = [20,50];
          var numIterations = 6;
        } 
        else if (forestType == "tropical"){
          strokeWeight(random(1,1.1))
          stroke(30, 18, 30, 0.7);
          var treeHeight = random(10,20);
          var axiom = "F"
         
          rules[0] = {
            a: "F",
            b: "F[--FF][+FF]F"
            }

          var angleRange = [10,20];
          var numIterations = 4;
  
        }
        len = treeHeight;
        sentence = axiom;
        

        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=numIterations; j++){
        generate(position, angleRange[0], angleRange[1])
        
      }

      }
    }
   
  }
  
   