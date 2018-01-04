let angle = 0;

function setup() {
createCanvas(600, 600);

}

function draw() {
  background(0);
  rectMode(CENTER);
  let h = map(sin(angle), -1, 1, 0, 200);
  fill(0,255, 0);
  rect(300, 300, 20, h);

  angle += 0.1;

}
