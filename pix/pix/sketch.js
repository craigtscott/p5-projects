var video;

var vScale = 16;

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
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
        var idx = (video.width - x + 1 + (y * video.width))*4;
        var r = video.pixels[idx];
        var b = video.pixels[idx+1];
        var g = video.pixels[idx+2];

        var bright = (r+b+g)/3;

        var threashold = 127;

        if (bright > threashold) {
          fill(255);
        } else {
          fill(0);
        }

        // var wid = map(bright, 0, 255, 0, vScale);

        noStroke();
        rectMode(CENTER);
        rect(x*vScale, y*vScale, vScale, vScale);

    }
  }

}
