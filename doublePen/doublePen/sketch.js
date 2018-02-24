var r1 = 100;
var r2 = 100;
var m1  = 10;
var m2 = 10;
var ang1 = 0;
var ang2 = 0;
var ang1V = 0;
var ang2V = 0;


let px2 = -1;
let py2 = -1;
let buffer;
let g = 1;;



function setup() {
  createCanvas(600,600);
  ang1 = PI / 2;
  ang2 = PI / 2;
  buffer = createGraphics(width, height);
  buffer.background(0);
  buffer.translate(width/2,height/2);
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(buffer, 0, 0, width, height);

  var first = -g * (2 * m1 + m2) * sin(ang1);
  var second = -m2 * g * sin(ang1 - 2 * ang2);
  var third = -2 * sin(ang1 - ang2) * m2;
  var fourth = ang2V * ang2V * r2 + ang1V*ang1V*r1*cos(ang1 - ang2);
  var denom = r1 * (2*m1+m2-m2*cos(2*ang1-2*ang2));
  ang1A = (first + second + third * fourth) / denom;

  first = 2 * sin(ang1 - ang2);
  second = (ang1V*ang1V*r1*(m1-m2));
  third = g * (m1 + m2) * cos(ang1);
  fourth = ang2V * ang2V * r2 * m2 *cos(ang1 - ang2);
  denom = r2 * (2*m1+m2-m2*cos(2*ang1-2*ang2));
  ang2A = (first *( second + third + fourth)) / denom;



  translate(width/2,height/2);
  stroke(255);

  var x1 = r1 * sin(ang1);
  var y1 = r1 * cos(ang1);

  var x2 = x1 + r2 * sin(ang2);
  var y2 = y1 + r2 * cos(ang2);


  line(0,0,x1,y1);
  ellipse(x1,y1,m1,m1);

  line(x1,y1,x2,y2);
  ellipse(x2,y2,m2,m2);


  ang1V += ang1A;
  ang2V += ang2A;
  ang1 += ang1V;
  ang2 += ang2V;

  buffer.stroke(255);
if (frameCount > 1) {
  buffer.line(px2, py2, x2, y2);
}

px2 = x2;
py2 = y2;
}
