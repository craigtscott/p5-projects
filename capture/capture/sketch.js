var video;
var button;
var shots = [];

function setup() {
  createCanvas(640,480);
  background(50);
  button = createButton('snap');
  button.mousePressed(takesnap);
  video = createCapture(VIDEO);
  // video.hide();


}

function draw() {
  var wid = width / 5;
  var heg = height / 5;
  var x = 0;
  var y = 0;
  for (var i = 0; i < shots.length; i++) {
    image(shots[i], x, y, wid, heg);
    x = x + wid;
    if (x > width - wid) {
      x = 0;
      y = y + heg;
    }
  }
  // tint(0,100,50);
  // image(video, 0, 0);
}

function takesnap() {
  shots.push(video.get());
  // image(video, 0, 0);
}
