var grid ;
var wid;

function setup() {
  createCanvas(400,400);
  grid = newGrid();


  addNumber();
  addNumber();

  wid = width/4;
  drawCanvas();
}

function drawCanvas() {
  background(0);
  drawGrid();
}


function keyPressed() {
  var tempGrid = newGrid();
  arrayCopy(grid, 0, tempGrid, 0, 4);
  let flipped = false;
  let rotated = false;
  let flipAndRotate = false;
  let played = false;
  if (keyCode === LEFT_ARROW){
    grid = flipGrid(grid);
    flipped = true;
    played = true;
  } else if (keyCode === RIGHT_ARROW) {
    played = true;
  } else if (keyCode === UP_ARROW){
    // console.log("1: "+grid);
    grid = flipAndRotateGrid(grid);
    // console.log("2: "+grid);
    flippedAndRotated = true;
    played = true;
  } else if (keyCode === DOWN_ARROW) {
    grid = rotateGrid(grid);
    console.log("down: "+grid);
    rotated = true;
    played = true;
  }


  if (played) {
    for (var i = 0; i < 4; i++) {
      console.log("3: "+grid);
      grid[i] = slideRow(grid[i]);
      console.log("4: "+grid);
      grid[i] = combine(grid[i]);
      console.log("5: "+grid);
      grid[i] = slideRow(grid[i]);
    }
  }

  if (flipped) {
    grid = flipGrid(grid);
  }
  if (rotated){
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
  }
  if (flipAndRotate){
    grid = unFlipAndRotate(grid);
  }


  if (tempGrid.join('') !== grid.join('')){
    addNumber();
  }

  drawCanvas();
}

function drawGrid() {

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      noFill();
      strokeWeight(4);
      stroke(255);
      rect(i*wid, j*wid, wid,wid);
      let val = grid[i][j];
      if (val !== 0) {
        textSize(24);
        textAlign(CENTER);
        strokeWeight(1);
        text(val, (j * wid) + wid/2, (i * wid) + wid/2);
      }
    }
  }

}
