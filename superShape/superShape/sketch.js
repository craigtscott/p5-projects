
function setup() {
  createCanvas(600,600);

}

function draw() {
  background(70);
  translate(width/2, height/2);
  stroke(0,255,0);
  noFill();
  var rad = 200;
  beginShape();
  for (var a = 0; a < TWO_PI; a += 0.1) {
    var x = rad * cos(a);
    var y = rad * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
}
