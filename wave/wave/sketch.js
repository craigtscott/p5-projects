let angle = 0;
let w = 20;
let width = 500;

function setup() {
createCanvas(600, 600, WEBGL);

}

function draw() {
  background(50);
  directionalLight(255,255,255, 1, 0, 1);
  translate(0, 50, -50);
  rotateX(-PI / 8);
  rectMode(CENTER);

  let offset = 0;
  for (var x = 0; x < width; x += w) {
    push();
    let ang = angle + offset;
    let h = map(sin(ang), -1, 1, 0, 200);
    ambientMaterial(0,255, 0);
    //rect(x - width / 2 + w / 2, 300, 40, h);
    translate(x - width/2 ,0 ,0);
    box(w, h, w);
    offset += 0.1;
    pop();
  }

  angle += 0.05;

}
