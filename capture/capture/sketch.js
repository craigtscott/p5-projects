var video;
var button;
var shots = [];

function setup() {
  createCanvas(640,480);
  background(50);
  video = createCapture(VIDEO);
  // video.hide();
  button = createButton('snap');
  button.mousePressed(takesnap);


}

function draw() {
  for (var i = 0; i < shots.length; i++) {
    image(shots[i], i*(width/5), 0, width / 5, height / 5);
  }
  // tint(0,100,50);
  // image(video, 0, 0);
}

function takesnap() {
  shots.push(video.get());
  // image(video, 0, 0);
}
