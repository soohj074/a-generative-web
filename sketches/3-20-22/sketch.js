function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
      happyFace(width/2, height/2, 170);
      drawLeaf(170, 12);
}

function happyFace (x, y, diam) {
      colorMode(HSL)
      // Face
      fill(44, 100, 83)
      strokeWeight(0);
      ellipse(x, y, diam, diam);
      
      // Mouth
      var offsetMouthx = diam/3/2;
      var offsetMouthy = diam/2/8;
      fill(0,0,0)
      rect(x-offsetMouthx, y+offsetMouthy, diam/3, diam/8, 20)
      
      // Eyes
      var offset = .2*diam;
      var eyeDiam = .1*diam;
      fill(0);
      ellipse(x-offset, y-offset+15, eyeDiam, eyeDiam);
      ellipse(x+offset, y-offset+15, eyeDiam, eyeDiam);
}

function drawLeaf (diam, size) {
  colorMode(HSL);
  angleMode(DEGREES);
  fill(130,100,20);

  push();
  translate(width/2, height/2-diam/2);
  rotate(45);
  ellipse(0, -10*size/2, 5*size, 10*size);
  pop();

  push();
  translate(width/2, height/2-diam/2);
  rotate(-45);
  ellipse(0, -6*size/2, 3*size, 6*size); 
  pop();
}