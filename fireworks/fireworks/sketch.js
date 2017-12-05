var fireworks = [];
var gravity;

function setup() {
  createCanvas(400, 600);
  colorMode(HSB);
  strokeWeight(7);
  gravity = createVector(0,.3);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0,0,0, 25);
  if (random(1) < 0.1){
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    stroke(255);
    fireworks[i].update();
    fireworks[i].draw();
    if (fireworks[i].fin()){
      fireworks.splice(i,1);
    }
    console.log(fireworks.length);

  }
}
