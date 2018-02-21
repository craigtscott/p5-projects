

function setup() {
  createCanvas(600,600);

}

function draw() {
  background(0);
  translate(width/2, height/2);

  for (var a = 0; a < TWO_PI; a +=0.01){
    var r = 100;
    var x = r* cos(a);
    var y = r * sin(a);
    stroke(255);
    strokeWeight(5);
    point(x,y);

  }

}
