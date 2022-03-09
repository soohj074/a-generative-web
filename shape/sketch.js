function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 720);
  background(0);
  noStroke();
  colorMode(HSB);


  var color1 = Math.floor(Math.random() * (360 - 0 + 1));
  var color2 = Math.floor(Math.random() * (360 - 0 + 1));
  var size1 = Math.floor(Math.random() * (200 - 50 + 1))+50;
  var size2 = Math.floor(Math.random() * (200 - 50 + 1))+50;

  
  fill(color1, 204, 100);
  ellipse(200, 200, size1, size1);

  fill(color2, 100, 100);
  ellipse(500, 500, size2, size2);


  for (i=0; i<6; i++) {
  var a = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
  var a1 = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
  var b = Math.floor(Math.random() * (500 - 350 + 1)) + 350;
  var b1 = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
  var c = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
  var d = Math.floor(Math.random() * (700 - 600 + 1)) + 600;


  noFill();
  stroke(255);
  beginShape()
        curveVertex(0, 0) ;
        curveVertex(0, 0) ;
        curveVertex(a, 100);
        curveVertex(a1, 200);
        curveVertex(100, b);
        curveVertex(300, b);
        curveVertex(c, b1);
        curveVertex(d, 500);
        curveVertex(700, 700) ;
        curveVertex(700, 700) ;
    endShape()


  }


  for (i=0; i<6; i++) {
    var a = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    var a1 = Math.floor(Math.random() * (190 - 100 + 1)) + 100;
    var b = Math.floor(Math.random() * (500 - 350 + 1)) + 350;
    var b1 = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    var c = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
    var d = Math.floor(Math.random() * (700 - 600 + 1)) + 600;
  

    noFill();
    stroke(255);
    beginShape()
          curveVertex(0, 700) ;
          curveVertex(0, 700) ;
          curveVertex(a, 500);
          curveVertex(a1, 450);
          curveVertex(200, b);
          curveVertex(350, b);
          curveVertex(c, b1);
          curveVertex(d, 100);
          curveVertex(700, 0) ;
          curveVertex(700, 0) ;
      endShape()
    }

}
