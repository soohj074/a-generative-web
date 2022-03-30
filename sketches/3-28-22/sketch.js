// var font;

// function preload() {
//   font = loadFont('Poppins-Black.ttf');
// }

// function setup() {
//   // colorMode(HSL);
//   createCanvas(1000, 1000);
//   var points = font.textToPoints('hello', 100, 400, 300);

//   for (var i=0; i<points.length; i++){
//     var pt = points[i];

//     push()
//     stroke(20,100,100);
//     strokeWeight(1);
//     fill(0,0)
//     ellipse(pt.x, pt.y, 10, 10);
//     pop()

//     push()
//     fill(200,0)
//     triangle(pt.x-4, pt.y+2, pt.x, pt.y-2, pt.x+4, pt.y+2);
//     pop()
//   }
// }

let totalHeight= 100;
let font;
let pts;

let cg;

function preload(){
	font = loadFont('Poppins-Black.ttf');  
}

function setup() {
  pixelDensity(1);
  createCanvas(800, 700);
  cg = createGraphics(width, height);
  
  noStroke();
}

function draw() {

  cg.textSize(200);
  cg.fill(255);
  cg.background(0);
  cg.textAlign(CENTER, CENTER);
  cg.text('HELLO', 40, 0, width, height);
  
  for(let i =0; i< 10000; i++){
    let x = random(width);
    let y = random(height);

    if( cg.get(x, y)[0] == 255 ){
     let r = int(random(3));

      fill(0,80,255); 

     ellipse(x, y, random(1, 10));
    }
  }

//   for(let i =0; i< width; i++){
//     if (i % 5 === 0) {
//       let x = i;
//       let y = 100;

//       if( cg.get(x, y)[0] == 255 ){
//       fill(255,0,80);
//       ellipse(x, y, 10);
//     }
//   }
// }

  noLoop();
  
}


  
