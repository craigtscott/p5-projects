var video;
var vScale = 16;
var particles = [];

function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle(320,240);

  }
  background(50);

}

function draw() {
  video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

  }
