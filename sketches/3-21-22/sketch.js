function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSL);
  translate(width/2,height/2);

  var r = width/2;
  stroke(96, 100, 18);
  fill(96, 100, 18);
  strokeWeight(4);
  var xoff = 0;
  beginShape();

  for (var a = -PI/2; a <= PI/2; a+=0.05){
    var i = noise(xoff);
    var r = map(i, 0, 1, 100, 200);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);  
    xoff += 0.1;
  }

  for (var a = PI/2; a <= 3*PI/2; a+=0.05){
    var i = noise(xoff);
    var r = map(i, 0, 1, 100, 200);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);  
    xoff -= 0.1;
  }

  endShape();

  // push();
  // line(0, -height/4, 0, height/2);
  // stroke(96, 100, 18);
  // strokeWeight(2);
  // pop();


}

function draw(){   
  strokeWeight(5); 
  translate(width/2,height); 
  branch(3); 
  noLoop();
} 

// function branch(depth){ 
//   if (depth < 10) { 
//     line(0,0,0,-height/10); // draw a line going up
//     { 
//       translate(0,-height/10); // move the space upwards
//       rotate(random(-0.05,0.05));  // random wiggle

//       if (random(1.0) < 0.7){ // branching   
//         rotate(0.3); // rotate to the right
//         scale(0.8); // scale down
        
//         push(); // now save the transform state
//         branch(depth + 1); // start a new branch!
//         pop(); // go back to saved state
        
//         rotate(-0.6); // rotate back to the left 
        
//         push(); // save state
//         branch(depth + 1);   // start a second new branch 
//         pop(); // back to saved state        
//      } 
//       else { // no branch - continue at the same depth  
//         branch(depth);
//       } 
//     } 
//   }
// } 

function branch(depth){ 
  stroke(40,200,10);
  // if (depth==3) {
  //   line(0,0,0,-height/10);
  // }

  if (depth < 10) { 
    line(0,0,0,-height/10); // draw a line going up
    { 
      translate(0,-height/10); // move the space upwards
      rotate(random(-0.05,0.05));  // random wiggle

      if (random(1.0) < 0.7){ // branching   
        rotate(0.3); // rotate to the right
        scale(0.8); // scale down
        
        push(); // now save the transform state
        branch(depth + 1); // start a new branch!
        pop(); // go back to saved state
        
        rotate(-0.6); // rotate back to the left 
        
        push(); // save state
        branch(depth + 1);   // start a second new branch 
        pop(); // back to saved state        
     } 
      else { // no branch - continue at the same depth  
        branch(depth);
      } 
    } 
  }
} 