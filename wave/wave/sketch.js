let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(600, 600, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(100);
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(ma);
  rotateY(-QUARTER_PI);


  let offset = 0;
  for (var dep = 0; dep < height; dep += w) {
    for (var x = 0; x < width; x += w) {
      push();
      let d = dist(x, dep, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let ang = angle + offset;
      let h = floor(map(sin(ang), -1, 1, 0, 200));
      normalMaterial();
      translate(x - width/2 , 0, dep - width/2);
      box(w, h, w);
      pop();
    }
  }

  angle -= 0.05;

}
