let graphics;
let x = 50;
let y = 50;
let angle = 0;

function setup() {
createCanvas(400, 300);
pixelDensity(1);
graphics = createGraphics(100, 100);
graphics.background(50);

}

function draw() {
  background(0);
  graphics.fill(255);
  graphics.stroke(255);
  graphics.ellipse(x, y, 15);
  x += random(-5, 5);
  y += random(-5, 5);

  image(graphics, 0, 0);
  push();
  imageMode(CENTER);
  translate(200,200);
  rotate(angle);
  image(graphics, 0, 0);
  pop();

  angle += 0.1;
  // if (mouseIsPressed) {
  //   graphics.fill(255);
  //   graphics.stroke(255);
  //   graphics.ellipse(mouseX, mouseY, 64);
  // }
  //
  // image(graphics, 0, 0);
  // fill(255,255,0);
  // ellipse(mouseX, mouseY, 28);

}
