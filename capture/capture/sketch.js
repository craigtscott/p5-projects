var video;
function setup() {
  createCanvas(640,480);
  background(50);
  video = createCapture(VIDEO);

}

function draw() {
  tint(0,100,50);
  image(video, 0, 0);
}
