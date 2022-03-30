let totalHeight= 100;
let font;
let pts;
let cg;
let img;

function preload() { font = loadFont('Poppins-Black.ttf');  }

function setup() {
  pixelDensity(1);
  createCanvas(800, 700);
  cg = createGraphics(width, height);
  noStroke();
  noLoop();
}

function draw() {
  cg.textSize(200);
  cg.fill(0);
  cg.background(255);
  cg.textAlign(CENTER, CENTER);
  cg.text('HELLO', 40, 0, width, height);
  drawMosaic(2, color(255)) }

function drawMosaic(dotRadius, backgroundColor) {
  background(backgroundColor);
  
  for (let i = 0; i < numberOfColumns(dotRadius); i++) {
    offsetX = i * columnWidth(dotRadius);
    drawColumnDots(dotRadius, offsetX);
  }
}

const columnWidth = (dotRadius) => dotRadius * 3;

const numberOfColumns = (dotRadius) =>
  Math.ceil(width / columnWidth(dotRadius));

function drawColumnDots(dotRadius, offsetX) {
  let dotDiameter = 2 * dotRadius;
  let dotHeightWithPadding = dotDiameter + 2;
  let numDotsInColumn = Math.floor(height / dotHeightWithPadding);

  let topY = Math.floor(random(10));
  
  for (let i = 0; i < numDotsInColumn; i++) {
    let centerX = offsetX + dotRadius;
   
    
    let centerY = topY + i * dotHeightWithPadding + dotRadius;
    let dotColor = cg.get(centerX, centerY);
    noStroke()
    fill(dotColor);

    ellipse(centerX, centerY, dotDiameter, dotDiameter);
  }
}