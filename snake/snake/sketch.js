var s;
var scl = 20;
var f;

function setup() {
  createCanvas(600,600);
  s = new Snake();
  f = new Food();
  f.pick();
  frameRate(10);
}



function draw() {
  background(100);
  print (f.food);
  if (s.eat(f.food)) {
    f.pick();
  }
  f.show();
  s.update();
  s.show();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
