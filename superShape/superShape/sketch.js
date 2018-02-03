
function setup() {
  createCanvas(600,600);

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
  var a = 200;
  var b = 200;
  var n = 4;
  beginShape();
  for (var ang = 0; ang < TWO_PI; ang += 0.1) {
    var na = 2/n;
    var x = pow(abs(cos(ang)), na) * a * sgn(cos(ang));
    var y = pow(abs(sin(ang)), na) * b * sgn(sin(ang));
    // var x = rad * cos(a);
    // var y = rad * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
}
