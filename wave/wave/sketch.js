let angle = 0;
let w = 20;
let width = 1200;

function setup() {
createCanvas(600, 600);

}

function draw() {
  background(0);
  rectMode(CENTER);
  let offset = 0;
  for (var x = 0; x < width; x += w) {
    let ang = angle + offset;
    let h = map(sin(ang), -1, 1, 0, 200);
    fill(0,255, 0);
    rect(x - width / 2 + w / 2, 300, w - 2, h);
    offset += 0.1;
  }

  angle += 0.1;

}
