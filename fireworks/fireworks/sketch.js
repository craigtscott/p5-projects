var firework;
var gravity;

function setup() {
  createCanvas(400, 300);
  stroke(255);
  strokeWeight(5);
  gravity = createVector(0,.3)
  firework = new Particle(random(width), height);
}

function draw() {
  background(51);
  firework.applyForce(gravity);
  firework.update();
  firework.draw();
}