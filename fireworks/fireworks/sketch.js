var fireworks = [];
var gravity;

function setup() {
  createCanvas(400, 300);
  stroke(255);
  strokeWeight(5);
  gravity = createVector(0,.3)
}

function draw() {
  background(51);
  if (random(1) < 0.1){
    fireworks.push(new Firework());
  }
  for (var i = 0; i < fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].draw();
    
  }
}