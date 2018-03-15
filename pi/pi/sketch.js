var d = 300;
var r = d/2;
var x;
var y;
function setup() {
  createCanvas(600,600);
  background(51);


}

function draw() {
  translate(height/2, width/2);

  stroke(0,255,0);
  noFill();
  ellipse(0,0,d,d);
  rectMode(CENTER);
  rect(0,0,d,d);

  x = random(-r,r );
  y = random(-r,r);

  point(x,y);


}
