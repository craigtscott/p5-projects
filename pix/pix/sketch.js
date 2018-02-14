function setup() {
  createCanvas(640,480);

}

function draw() {
  background(50);

  loadPixels();

  pixels[0] = 255;
  pixels[1] = 255;
  pixels[2] = 255;
  pixels[3] = 255;

  updatePixels();
}
