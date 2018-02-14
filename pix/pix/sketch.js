function setup() {
  createCanvas(640,480);
  pixelDensity(1);
}

function draw() {
  background(50);

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
        var idx = (x + y * width)*4;
        pixels[idx] = x;
        pixels[idx + 1] = 255;
        pixels[idx + 2] = y;
        pixels[idx + 3] = 255;
    }
  }

  updatePixels();
}
