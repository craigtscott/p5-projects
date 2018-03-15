var d = 300;
var r = d/2;
var x;
var y;
var total = 0.0;
var circle = 0;
function setup() {
  createCanvas(600,600);
  background(51);
  translate(height/2, width/2);

  stroke(0);
  noFill();
  ellipse(0,0,d,d);
  rectMode(CENTER);
  rect(0,0,d,d);

}

function draw() {
  translate(height/2, width/2);
  var pi;

  for (var i = 0; i < 100; i++) {
    x = random(-r,r );
    y = random(-r,r);
    total += 1;

    var dist = sqrt(x*x + y*y);
    if (dist < r){
      stroke(0,255,0);
      circle += 1;
    } else {
      stroke(255,0,0);
    }

    pi = 4 * (circle/total);
    point(x,y);
  }
  console.log(pi);

}
