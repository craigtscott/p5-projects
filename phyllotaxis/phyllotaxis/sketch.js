var n = 0;
var c = 3;
function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);

}

function draw() {
  translate(height/2, width/2);
  ang = n * 137.5;
  rad = c * sqrt(n);

  var x = rad * cos(ang);
  var y = rad * sin(ang);
  fill(ang % 256, 255, 255);
  ellipse(x,y,2);

  n++;
}
