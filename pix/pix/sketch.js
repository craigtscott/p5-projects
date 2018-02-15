var video;
var slider;
var cols = 40;
var rows = 30;

var vScale = 16;

function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  slider = createSlider(0,255,19);

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      var box = createCheckbox();
      box.style('display', 'inline');
      box.parent('mirror');
    }
    var linebreak = createSpan('<br/>');
    linebreak.parent('mirror');
  }
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

        var threashold = slider.value();

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
