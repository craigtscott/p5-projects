var cells = [];
function setup() {
  var start = random(8);
  createCanvas(600,600);
  for (var i = 0; i < start; i++) {
    cells.push(new Cell());
  }
}

function draw () {
  background(50);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();

  }
}

function mousePressed() {
  for (var i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)){
      console.log("hit");
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }

  }
}
