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

    removeWalls(current, neighbor);
    current = neighbor;
  }
}

function removeWalls (a,b) {
  var x = a.i - b.i;
  console.log(a);
  if (x === 1 ){
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1){
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.j - b.j;

  if (y === 1 ){
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1){
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
