function setup() {
createCanvas(400, 300);
background(0);

}

function draw() {

  if (mouseIsPressed) {
    fill(255);
    stroke(255);
    ellipse(mouseX, mouseY, 64);
  }

}
