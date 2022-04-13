let startWeight = 6;
let canvasSize = 600;
let temperature;
var angle;
// var axiom = "F";
var sentence;
var len = 70;

// LEAF COLOR
var leafColorList = [60,92,50,100];
var leafColor;
var minColor = 1;
var maxColor = 50;


// FOLIAGE LISTS
var shrubList = ["tumbleweed", "stick"]

var numEmergent = 2;
var numCanopy = 5;
var numUnderstory = 10;
var numForestFloor = 25;


var treeDict = {
  birch:{
    rule:"FF+[+F-F-F]-[-F+F+F]",
    angleMin: 20,
    angleMax: 30
  },
  weed:{
    rule:"F[+F]F[-F][F]",
    angleMin: 10,
    angleMax: 30
  }
}


var rules = [];



function setup() {
  let drawing = createCanvas(canvasSize, canvasSize);
  drawing.parent("drawing");
  colorMode(HSL);
  // temperatureInput = createSlider(10, 25, 10);
  // temperatureInput.position(20, 20);
  // temperatureInput.parent("inputs");
  // text('Temperature', temperatureInput.x * 2 + temperatureInput.width, 35).parent("inputs");
  background(225);


  // WRITE METADATA
  temperature = select("#temperatureInput").value();
  text("Temperature: "+temperature, 20, 35);
  // temperature.changed(changeTemperature)

  // DRAW FOREST
  drawFoliage(numEmergent, "emergent");
  drawFoliage(numCanopy, "canopy");
  drawFoliage(numUnderstory, "understory");
drawFoliage(numForestFloor, "forest floor");




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
      // line(0, 0, -len, 0);
      // translate(0, -len);
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
         var leafW = 3 * 0.90;
         var leafH = 6 * 0.90;
         ellipse(0, 0, leafW, leafH);
      pop();
    }
  }

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
var randomIndex = random(0,1);

    if (type=="emergent"){
      leafColor = color(random(minColor,maxColor), 50, 32, 0.2)
      for (i=0; i<=amount-1; i++){
        var treeHeight = random(200,250);
        var position = random(0,canvasSize);

        push()
        var axiom = "X";
        len = treeHeight;
        sentence = axiom;

        console.log(sentence.length)
        console.log(axiom)


        translate(position, height)
        stroke(47, 18, 70, 0.4);

        scale(treeHeight)
        
        // SET  RULES AND ANGLE RANGE
        // rules[0] = {
        //   a: "X",
        //   b: ">[+FX]-FX"
        // }

        rules[0] = {
          a: "X",
          b: "F[+X]F[-X]+X"
        }

        rules[1] = {
          a: "F",
          b: "FF"
        }


        var angleRange = [10,40];

        
        // DRAW THE TREE

        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=6; j++){
        generate(position, angleRange[0], angleRange[1])
        }


        translate(0, -150)
        pop()
      }
    }
  
    if (type=="canopy"){
      leafColor = color(random(minColor,maxColor), 50, 32, 0.2)
      for (i=0; i<=amount-1; i++){
        var treeHeight = random(150,200);
        var position = random(0,canvasSize);

        

        push()
        var axiom = "X";
        len = treeHeight;
        sentence = axiom;

        console.log(sentence.length)
        console.log(axiom)


        translate(position, height)
        stroke(47, 18, 50, 0.4);

        scale(treeHeight)
        
        // SET  RULES AND ANGLE RANGE
        rules[0] = {
          a: "X",
          b: "F[+X][-X]FX"
        }
        rules[1] = {
          a: "F",
          b: "FF"
        }
        
        var angleRange = [20,50];

        
        // DRAW THE TREE

        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=6; j++){
        generate(position, angleRange[0], angleRange[1])}


        translate(0, -150)
        pop()


      }
    }
  
    if (type=="understory"){
      leafColor = color(random(minColor,maxColor), 50, 32, 0.2)
      for (i=0; i<=amount-1; i++){
        
        var treeHeight = random(50,70);
        var position = random(0,canvasSize);
        

        // RESET VARIABLES FOR NEW TREE
        var axiom = "X";
        len = treeHeight;
        sentence = axiom;

        push()

        translate(position, height)
        stroke(47, 18, 32, 0.4);

        scale(treeHeight)
        
        // SET  RULES AND ANGLE RANGE

        rules[0] = {
          a: "F",
          b:"FF"
        }

        rules[1] = {
          a: "X",
          b:" F+[-F-XF-X][+FF][--XF[+X]][++F-X]"
        }


        
        var angleRange = [23,30];

        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=4; j++){
        angle = radians(random(20,30));
        generate(position, angleRange[0], angleRange[1])}


        translate(0, -150)
        pop()

      }
    }
  
    if (type=="forest floor"){
      leafColor = color(random(1,50), 50, 32, 0.2)
      for (i=0; i<=amount-1; i++){
        var treeHeight = random(10,20);
        var position = random(0,canvasSize);

        
        // RESET VARIABLES FOR NEW TREE
        var axiom = "F";
        len = treeHeight;
        sentence = axiom;

        push()

        translate(position, height)
        stroke(47, 10, 32, 0.2);

        scale(treeHeight)
        
        // SET  RULES AND ANGLE RANGE

        rules[0] = {
          a: "F",
          b:"FF+[+F-F-F]-[-F+F+F]"
        }
        
        var angleRange = [23,30];

        turtle(position, angleRange[0], angleRange[1]);
        for (j=0; j<=2; j++){
        angle = radians(random(20,30));
        generate(position, angleRange[0], angleRange[1])
        
      }


        translate(0, -150)
        pop()
      }
    }
   
  }
  
   