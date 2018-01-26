var cols, rows;
var w =40;
var grid = [];
var current;
function setup() {
  createCanvas(600,600);
  cols = floor(width/w);
  rows = floor(height/w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  frameRate(5);
  current = grid[0];

}

function draw() {
  background(60);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  var neighbor = current.checkNeighbors();

  if (neighbor){
    neighbor.visited = true;
    current = neighbor;
  }
}
