var r1 = 100;
var r2 = 100;
var m1  = 10;
var m2 = 10;
// var ang1 = 0;
// var ang2 = 0;
// var ang1V = 0;
// var ang2V = 0;
var a1 = 0;
let a2 = 0;
let a1_v = 0;
let a2_v = 0;

let px2 = -1;
let py2 = -1;
let buffer;
let g = 1;;



function setup() {
  createCanvas(600,600);
  a1 = PI / 2;
  a2 = PI / 2;
  buffer = createGraphics(width, height);
  buffer.background(0);
  buffer.translate(width/2,height/2);
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(buffer, 0, 0, width, height);

  // var first = -g * (2 * m1 + m2) * sin(ang1);
  // var second = -m2 * g * sin(ang1 - 2 * ang2);
  // var third = -2 * sin(ang1 - ang2) * m2;
  // var fourth = ang2V * ang2V * r2 + ang1V*ang1V*r1*cos(ang1 - ang2);
  // var denom = r1 * (2*m1+m2-m2*cos(2*ang1-2*ang2));
  // ang1A = (first + second + third * fourth) / denom;
  //
  // first = 2 * sin(ang1 - ang2);
  // second = (ang1V*ang1V*r1*(m1-m2));
  // third = g * (m1 + m2) * cos(ang1);
  // fourth = ang2V * ang2V * r2 * m2 *cos(ang1 - ang2);
  // denom = r2 * (2*m1+m2-m2*cos(2*ang1-2*ang2));
  // ang2A = (first *( second + third + fourth)) / denom;

  let num1 = -g * (2 * m1 + m2) * sin(a1);
    let num2 = -m2 * g * sin(a1 - 2 * a2);
    let num3 = -2 * sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * sin(a1 - a2);
    num2 = (a1_v * a1_v * r1 * (m1 + m2));
    num3 = g * (m1 + m2) * cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

  translate(width/2,height/2);
  stroke(255);

  var x1 = r1 * sin(a1);
  var y1 = r1 * cos(a1);

  var x2 = x1 + r2 * sin(a2);
  var y2 = y1 + r2 * cos(a2);


  line(0,0,x1,y1);
  ellipse(x1,y1,m1,m1);

  line(x1,y1,x2,y2);
  ellipse(x2,y2,m2,m2);

  // ang1V += ang1A;
  // ang2V += ang2A;
  // ang1 += ang1V;
  // ang2 += ang2V;

  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;

  buffer.stroke(255);
if (frameCount > 1) {
  buffer.line(px2, py2, x2, y2);
}

px2 = x2;
py2 = y2;
}
