var font;

function preload() {
  font = loadFont('Poppins-Black.ttf');
}

function setup() {
  colorMode(HSL);
  createCanvas(1000, 1000);
  var points = font.textToPoints('ARBORETUM', 10, 400, 150);

  for (var i=0; i<points.length; i++){
    var pt = points[i];
    noStroke()
    push()
    var width = random(10,20);
    var height = random(10,20);
    // translate(width/2,height/2);
    // rotate(radians(random(0,5)))
    fill(color(random(40,80), 70, 30, 0.4))
    ellipse(pt.x, pt.y, width, height);
    pop()

  }
}

// let totalHeight= 100;
// let font;
// let pts;

// let cg;

// function preload(){
// 	font = loadFont('Poppins-Black.ttf');  
// }

// function setup() {
//   pixelDensity(1);
//   createCanvas(800, 700);
//   cg = createGraphics(width, height);
  
//   noStroke();
// }

// function draw() {

//   cg.textSize(200);
//   cg.fill(255);
//   cg.background(0);
//   cg.textAlign(CENTER, CENTER);
//   cg.text('HELLO', 40, 0, width, height);
  
//   for(let i =0; i< 10000; i++){
//     let x = random(width);
//     let y = random(height);

//     if( cg.get(x, y)[0] == 255 ){
//      let r = int(random(3));

//       fill(0,80,255); 

//      ellipse(x, y, random(1, 10));
//     }
//   }

// //   for(let i =0; i< width; i++){
// //     if (i % 5 === 0) {
// //       let x = i;
// //       let y = 100;

// //       if( cg.get(x, y)[0] == 255 ){
// //       fill(255,0,80);
// //       ellipse(x, y, 10);
// //     }
// //   }
// // }

//   noLoop();
  
// }


  
