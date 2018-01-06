var cells = [];
function setup() {
  createCanvas(600,600);
  cells.push(new Cell());
}

function draw () {
  background(50);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();

  }
}

function mousePressed() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].clicked(mouseX, mouseY)){
      console.log("True");
    }

  }
}
