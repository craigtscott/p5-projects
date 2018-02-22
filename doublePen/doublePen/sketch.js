var r1 = 100;
var r2 = 100;
var m1  = 10;
var m2 = 10;
var ang1 = 0;
var ang2 = 0;
let px2 = -1;
let py2 = -1;
let buffer;


function setup() {
  createCanvas(600,600);
  buffer = createGraphics(width, height);
  buffer.background(0);
  buffer.translate(width/2,height/2);
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(buffer, 0, 0, width, height);
  translate(width/2,height/2);

  var x1 = r1 * sin(ang1);
  var y1 = r1 * cos(ang1);

  var x2 = x1 + r2 * sin(ang2);
  var y2 = y1 + r2 * cos(ang2);


  stroke(255);
  line(0,0,x1,y1);
  ellipse(x1,y1,m1,m1);

  line(x1,y1,x2,y2);
  ellipse(x2,y2,m2,m2);

  ang1 += 0.1;
  ang2 -= 0.2;

  buffer.stroke(255);
if (frameCount > 1) {
  buffer.line(px2, py2, x2, y2);
}

px2 = x2;
py2 = y2;
}
