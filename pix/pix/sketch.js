var video;

function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(640,480);

}

function draw() {
  background(50);

  video.loadPixels();
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
        var idx = (x + y * width)*4;
        var r = video.pixels[idx];
        var b = video.pixels[idx+1];
        var g = video.pixels[idx+2];

        var bright = (r*b*g)/3;

        pixels[idx] = bright;
        pixels[idx + 1] = bright;
        pixels[idx + 2] = bright;
        pixels[idx + 3] = 255;
    }
  }

  updatePixels();
}
