var s;
var scl = 20;
var f;

function setup() {
  createCanvas(600,600);
  frameRate(10);
  game();
}

function game() {
  s = new Snake();
  f = new Food();
  f.pick();
}



function draw() {
  background(100);
  if (s.eat(f.food)) {
    f.pick();
  }

  s.update();
  s.show();
  f.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.direction(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.direction(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.direction(-1, 0);
  } else if (keyCode === 71){
    s.total++;
    s.changes = true;
  } else if (keyCode === 82){
    game()
  }
}
