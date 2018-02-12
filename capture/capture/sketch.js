var video;
var button;

function setup() {
  createCanvas(640,480);
  background(50);
  video = createCapture(VIDEO);
  // video.hide();
  button = createButton('snap');
  button.mousePressed(takesnap);


}

function draw() {
  // tint(0,100,50);
  // image(video, 0, 0);
}

function takesnap() {
  image(video, 0, 0);
}
