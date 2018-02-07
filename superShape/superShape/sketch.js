var slider;
var slider1;
var slider2;
var slider3;
var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 5;
var a = 1;
var b = 1;
var r;

function setup() {
  createCanvas(600,600);
  slider = createSlider(0,1000,5,1);
  slider1 = createSlider(0,1000,50,.5);
  slider2 = createSlider(1,10,1,.5);
  slider3 = createSlider(1,10,1,.5);
}

function supershape(theta) {
  a = slider2.value();
  b = slider3.value();
  var r = 1;
  var part1 = (1/a) * cos(theta*m/4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  var part2 = (1/b) * sin(theta*m/4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  var part3 = pow(part1 + part2, 1 / n1);
  return (1 / part3);
}

function sgn(num) {
  if (num > 0) {
    return 1;
  } else if (num < 0) {
    return -1;
  } else {
    return 0;
  }
}

function draw() {
  background(70);
  translate(width/2, height/2);
  stroke(0,255,0);
  noFill();
  r = slider1.value();
  // var rad = 200;
  // var a = 200;
  // var b = 200;
  m = slider.value();
  var total = 500;
  var inc = TWO_PI / total;
  beginShape();
  for (var ang = 0; ang < TWO_PI; ang += inc) {

    var rad = supershape(ang);
    var x = r *rad * cos(ang);
    var y = r * rad * sin(ang);
    vertex(x,y);
  }
  endShape(CLOSE);
}
