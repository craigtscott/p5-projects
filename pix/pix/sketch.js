var video;
var vScale = 8;

function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);

}

function draw() {
  background(50);

  video.loadPixels();
  loadPixels();
  for (var x = 0; x < video.width; x++) {
    for (var y = 0; y < video.height; y++) {
        var idx = (x + y * video.width)*4;
        var r = video.pixels[idx];
        var b = video.pixels[idx+1];
        var g = video.pixels[idx+2];

        var bright = (r*b*g)/3;

        fill(bright);
        rect(x*vScale, y*vScale, vScale, vScale);
    }
  }

}
