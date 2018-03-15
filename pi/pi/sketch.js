function setup() {
  createCanvas(600,600);


}

function draw() {
  background(51);
  translate(height/2, width/2);

  stroke(0,255,0);
  noFill();
  ellipse(0,0,300,300);
  rect(-150,-150,300,300);

}
