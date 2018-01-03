let graphics;

function setup() {
createCanvas(400, 300);
pixelDensity(1);
graphics = createGraphics(400, 300);
graphics.background(0);

}

function draw() {

  if (mouseIsPressed) {
    graphics.fill(255);
    graphics.stroke(255);
    graphics.ellipse(mouseX, mouseY, 64);
  }

  image(graphics, 0, 0);
  fill(255,255,0);
  ellipse(mouseX, mouseY, 28);

}
