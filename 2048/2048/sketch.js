var grid ;
var wid;

function setup() {
  createCanvas(400,400);
  grid = newGrid();


  addNumber();
  addNumber();

  wid = width/4;
}

function draw() {
  background(0);
  drawGrid();
}


function keyPressed() {
  var tempGrid = [];
  arrayCopy(grid, 0, tempGrid, 0, 4);
  let flipped = false;
  let rotated = false;
  let played = false;
  if (keyCode === LEFT_ARROW){
    console.log("hi");
    grid = flip(grid);
    flipped = true;
    played = true;
  } else if (keyCode === RIGHT_ARROW) {
    played = true;
  } else if (keyCode === UP_ARROW){
    grid = flip(grid);
    flipped = true;
    grid = rotate(grid);
    rotated = true;
    played = true;
  }else if (keyCode === DOWN_ARROW) {
    grid = rotate(grid);
    rotated = true;
    played = true;
  }


  if (played) {
    for (var i = 0; i < 4; i++) {
      grid[i] = slideRow(grid[i]);
      grid[i] = combine(grid[i]);
      grid[i] = slideRow(grid[i]);
    }
  }

  if (flipped) {
    grid = flip(grid);
  }
  if (rotated){
    grid = rotate(grid);
    grid = rotate(grid);
    grid = rotate(grid);
  }


  if (tempGrid.join('') !== grid.join('')){
    addNumber();
  }
}

function drawGrid() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      noFill();
      strokeWeight(4);
      stroke(255);
      rect(i*wid, j*wid, wid,wid);
      let val = grid[i][j];
      if (grid[i][j] !== 0) {
        textSize(24);
        textAlign(CENTER);
        strokeWeight(1);
        text(val, (j * wid) + wid/2, (i * wid) + wid/2);
      }
    }
  }

}
