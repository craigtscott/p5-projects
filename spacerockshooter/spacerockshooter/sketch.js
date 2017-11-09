
var mid = 600 / 2;
var left = mid - 50;
var right = mid + 50;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(1);
  // color(256);

  stroke(255);
  noFill();
  triangle(mid, mid, left, left, right, left);
}
