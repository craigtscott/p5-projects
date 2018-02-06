var slider;

var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 1;
var a = 1;
var b = 1;

function setup() {
  createCanvas(600,600);
  slider = createSlider(0,10,2,0.1);
}

function supershape(a) {
  var r = 1;

  return r;
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
  var rad = 200;
  // var a = 200;
  // var b = 200;
  var n = slider.value();
  beginShape();
  for (var ang = 0; ang < TWO_PI; ang += 0.1) {
    var na = 2/n;
    var rad = supershape(ang);
    var x = 100 *rad * cos(ang);
    var y = 100 * rad * sin(ang);
    vertex(x,y);
  }
  endShape(CLOSE);
}
