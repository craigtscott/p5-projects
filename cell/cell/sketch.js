var cell;
function setup() {
  createCanvas(600,600);
  cell = new Cell();
}

function draw () {
  background(50);
  cell.move();
  cell.show();
}
