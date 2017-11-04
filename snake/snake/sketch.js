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

function gameOver() {
  background(100);
  textSize(36);
  msg = 'Game Over';
  score = 'You Got ' + s.tail.length;
  tWidth = textWidth(msg);
  sWidth = textWidth(score);
  fill(255);
  text(msg, (width - tWidth)/2, height/2 - 40);
  text(score, (width - sWidth)/2, height/2);
  startBtn = createButton('Restart Game');
  startBtn.position(width/2 - startBtn.width/2, height/2 + 40);
  startBtn.mousePressed(game);
}



function draw() {
  background(100);
  if (s.eat(f.food)) {
    f.pick();
  }

  s.update();
  s.show();
  f.show();
  s.isDead();
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
  } else if (keyCode === 32){
    s.total++;
    s.ate = true;
  } else if (keyCode === 82){
    game();
  }
}
