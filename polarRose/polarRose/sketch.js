

function setup() {
  createCanvas(600,600);

}

function draw() {
  background(0);
  translate(width/2, height/2);

  beginShape();
  stroke(255);
  noFill();
  for (var a = 0; a < TWO_PI; a +=0.01){
    var r = 300 * cos(7*a);
    var x = r* cos(a);
    var y = r * sin(a);
    vertex(x,y);

  }
  endShape();

}
