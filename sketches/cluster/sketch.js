let canvasSize = 1000;
let temperature;
var angle;
var sentence;
var len = 70;
var rules = [];
var branchWidth = 10;

// LEAF VARIABLES
var leafColor,
minColor,
maxColor,
leafSaturation,
leafLightness,
leafOpacity;
var leafType;

// USER INPUT DUMMY VARIABLES
var season = "fun";
var forestType = "boreal";
var numLayers = 4;


// FOLIAGE COUNTS
var numEmergent = 1;
var numCanopy = 1;
var numUnderstory = 1;
var numForestFloor = 1;


function setup() {
  let drawing = createCanvas(canvasSize, 650);
  drawing.parent("drawing");
  colorMode(HSL);
  // temperatureInput = createSlider(10, 25, 10);
  // temperatureInput.position(20, 20);
  // temperatureInput.parent("inputs");
  // text('Temperature', temperatureInput.x * 2 + temperatureInput.width, 35).parent("inputs");
  background(225);

  // SET METADATA VARIABLES FROM USER INPUTS
    temperature = select("#temperatureInput").value();
    forestType = select("#forestTypeInput").value();
    season = select("#seasonInput").value();


    // RANDOMIZE VARIABLES
    var seasonList = ["fall","spring","summer","winter"]
    var forestList = ["temperate","tropical","boreal"]

    forestType = forestList[Math.floor(random(0,3))]
    season = seasonList[Math.floor(random(0,4))]

    // PRINT METADATA ON CANVAS
    text("Temperature: "+temperature, 20, 35);
    text("Forest Type: "+forestType.toUpperCase(), 20, 55);
    text("Season: "+season.toUpperCase(), 20, 75);


  // SET LEAF COLORS
  if (season == "fall"){
    minColor = 1;
    maxColor = 60;
    leafSaturation = 50;
    leafOpacity = 0.4;
  } else if (season == "spring"){
    minColor = 330;
    maxColor = 360;
    leafSaturation = 50;
    leafOpacity = 0.4;
  } else if (season == "summer"){
    minColor = 60;
    maxColor = 150;
    leafSaturation = 50;
    leafOpacity = 0.4;
  } else if (season == "winter"){
    minColor = 180;
    maxColor = 330;
    leafSaturation = 50;
    leafOpacity = 0.4;
  } else if (season == "fun"){
    minColor = 0;
    maxColor = 360;
    leafSaturation = 50;
    leafOpacity = 0.4;
  }

  // DRAW FOREST
  drawFoliage(numEmergent, "emergent", forestType);
  drawFoliage(numCanopy, "canopy" , forestType);
  drawFoliage(numUnderstory, "understory", forestType);
  drawFoliage(numForestFloor, "forest floor", forestType);

  // REGENERATE FOREST ON BUTTON CLICK
  // select("#generateButton").onclick = regenerateCanvas();

}

function regenerateCanvas() {
  console.log("clicked")
  clear();
  temperature = select("#temperatureInput").value();
  forestType = select("#forestTypeInput").value();
  season = select("#seasonInput").value();
  // PRINT METADATA ON CANVAS
  text("Temperature: "+temperature, 20, 35);
  text("Forest Type: "+forestType.toUpperCase(), 20, 55);
  text("Season: "+season.toUpperCase(), 20, 75);

    // SET LEAF COLORS
    if (season == "fall"){
      minColor = 1;
      maxColor = 60;
      leafSaturation = 50;
      leafOpacity = 0.4;
    } else if (season == "spring"){
      minColor = 330;
      maxColor = 360;
      leafSaturation = 50;
      leafOpacity = 0.4;
    } else if (season == "summer"){
      minColor = 60;
      maxColor = 150;
      leafSaturation = 50;
      leafOpacity = 0.4;
    } else if (season == "winter"){
      minColor = 180;
      maxColor = 330;
      leafSaturation = 50;
      leafOpacity = 0.4;
    } else if (season == "fun"){
      minColor = 0;
      maxColor = 360;
      leafSaturation = 50;
      leafOpacity = 0.4;
    }

  drawFoliage(numEmergent, "emergent", forestType);
  drawFoliage(numCanopy, "canopy" , forestType);
  drawFoliage(numUnderstory, "understory", forestType);
  drawFoliage(numForestFloor, "forest floor", forestType);
}


function generate(x,minAngle,maxAngle, leafType) {
  len *= 0.5;
  branchWidth *=0.7;

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
  turtle(x,minAngle,maxAngle, leafType)
  ;}


function turtle(x, minAngle, maxAngle, leafType) {
  resetMatrix();
  translate(x, height);
  stroke(47, 18, 30, 0.8);
  strokeWeight(branchWidth);
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
      // branchWidth *=0.8;
      rotate(-radians(random(minAngle,maxAngle)))
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      // DRAW LEAVES
         noStroke();
         fill(leafColor);
         if (leafType == "short"){
          var leafW = random(3,6) ;
          var leafH = random(6,10) ;
        } else if (leafType == "long"){
          var leafW = random(3,6) ;
          var leafH = random(20,30) ;
        } else if (leafType == "needle"){
          var leafW = random(2,4) ;
          var leafH = random(30,40) ;
        }
         ellipse(0, 0, leafW, leafH);
      pop();
    }
  }
}


function drawFoliage(amount, type, forestType) {

    if (type=="emergent"){
      leafLightness = 20;
      leafColor = color(random(minColor,maxColor), leafSaturation, leafLightness, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0+300,canvasSize-300);
        translate(position, height)

        // SET  RULES AND ANGLE RANGE ACCORDING TO FOREST TYPE
      if (forestType == "temperate"){
          var treeHeight = random(275,325);
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
          leafType = "short";
          var numIterations = 6;
      } 
      else if (forestType == "tropical"){
        var treeHeight = random(175,200);
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
        leafType = "short";
        var numIterations = 6;
      }
      else if (forestType == "boreal"){
        var treeHeight = random(200,250);

          var axiom = "FXXX"
          rules[0] = {
            a: "X",
            b: "-[+++FXXF][---FXXF]FX"
            }
          rules[1] = {
                    a: "F",
                    b: "+X[-F]F"
                    }
          rules[2] = {
                    a: "XF",
                    b: "-F[+X]F"
                    }
          rules[3] = {
                    a: "X",
                    b: "FX"
                    }
          rules[4] = {
                    a: "X",
                    b: "[-F][+F]F"
                    }

        var angleRange = [5,13];
        leafType = "needle";
        var numIterations = 3;
      }

        branchWidth = 5;
        len = treeHeight;
        sentence = axiom;
        
        // DRAW THE TREE
        turtle(position, angleRange[0], angleRange[1], leafType);
        for (j=0; j<=numIterations; j++){
        generate(position, angleRange[0], angleRange[1], leafType)
        }
        


      }
    }
  
    if (type=="canopy"){
      leafLightness = 40;
      leafColor = color(random(minColor,maxColor), leafSaturation, leafLightness, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0+300,canvasSize-300);
        translate(position, height)
        
        // SET  RULES AND ANGLE RANGE

        if (forestType == "temperate"){
          var treeHeight = random(100,115);
          var axiom = "F";
          rules[0] = {
            a: "F",
            b:"FF+[+F-F-F]-[-F+F+F]"
          }
          var angleRange = [20,25];
          var numIterations = 4;
          leafType = "short";
        } 
        else if (forestType == "tropical"){
          var treeHeight = random(125,175);
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
          var angleRange = [5,20];
          var numIterations = 3;
          leafType = "long";
  
        }
        else if (forestType == "boreal"){
          var treeHeight = random(75,110);
          var axiom = "X"
          rules[0] = {
            a: "X",
            b: "FF[-FX][+FX][FX]+F+[[X]-X]-F[-FX]+X",
          };

          rules[1] = {
            a: "F",
            b: "FF"
          };

          rules[2] = {
            a: "F",
            b: "FXFXF"
          };
    
            var angleRange = [10,30];
            numIterations = 3;
            leafType = "long";
        }

        branchWidth = 3;
        len = treeHeight;
        sentence = axiom;

        // DRAW THE TREE

        turtle(position, angleRange[0], angleRange[1], leafType);
        for (j=0; j<=numIterations; j++){
        generate(position, angleRange[0], angleRange[1], leafType)}

      }
    }
  
    if (type=="understory"){
      leafLightness = 60;
      leafColor = color(random(minColor,maxColor), leafSaturation, leafLightness, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0+300,canvasSize-300);

        // RESET VARIABLES FOR NEW TREE
        translate(position, height)

        // SET  RULES AND ANGLE RANGE

        if (forestType == "temperate"){
          var treeHeight = random(100,120);
          var axiom = "X";
          rules[0] = {
            a: "F",
            b:"FF"
          }
  
          rules[1] = {
            a: "X",
            b:" F+[-F-XF-X][+FF][--XF[+X]][++F-X]"
          }
          leafType = "short";
          numIterations=4;
          var angleRange = [10,40];
        } 
        else if (forestType == "tropical"){
          var treeHeight = random(150,200);
          var axiom = "F"
          rules[0] = {
            a: "F",
            b: "F[+F]F[-F][F]"
            }
          var angleRange = [10,70];
          numIterations = 4;
          leafType = "long";
            
          }
          else if (forestType == "boreal"){
            var treeHeight = random(175,220);
            var axiom = "F"
            rules[0] = {
              a: "F",
              b: "F[-X][+XX]F[-X][F]"
              }
              rules[1] = {
                a: "F",
                b: "F[-F][+F]"
                }
    
              var angleRange = [20,50];
              var numIterations = 4;
              leafType = "needle";
          }
        branchWidth = 3;
        len = treeHeight;
        sentence = axiom;


        turtle(position, angleRange[0], angleRange[1], leafType);
        for (j=0; j<=numIterations; j++){
        generate(position, angleRange[0], angleRange[1], leafType)}

      }
    }
  
    if (type=="forest floor"){
      leafLightness = 80;
      leafColor = color(random(minColor,maxColor), leafSaturation, leafLightness, leafOpacity)
      for (i=0; i<=amount-1; i++){
        var position = random(0+300,canvasSize-300);

        // RESET VARIABLES FOR NEW TREE

  
        translate(position, height)

        // SET  RULES AND ANGLE RANGE
        if (forestType == "temperate"){
          var treeHeight = random(125,175);
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
          var numIterations = 5;
          leafType = "short";
        } 
        else if (forestType == "tropical"){
          var treeHeight = random(125,150);
          var axiom = "F"
         
          rules[0] = {
            a: "F",
            b: "F[--FF][+FF]F"
            }

          var angleRange = [10,40];
          var numIterations = 3;
          leafType = "long";
          var leafLightness = 70;
        }
        else if (forestType == "boreal"){
          var treeHeight = random(75,125);
          var axiom = "X"
          rules[0] = {
            a: "F",
            b: "FFX+[+F-F-F]-[-F+F+F]"
          }
    
            var angleRange = [10,15];
            numIterations = 4;
            leafType = "long";
        }

        branchWidth = 3;
        len = treeHeight;
        sentence = axiom;
        

        turtle(position, angleRange[0], angleRange[1], leafType);
        for (j=0; j<=numIterations; j++){
        generate(position, angleRange[0], angleRange[1], leafType)
        
      }

      }
    }
   
  }
  
   