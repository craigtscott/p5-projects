var grid ;
var wid;
var score = 0;


function setup() {
  createCanvas(400,400);
  noLoop();
  grid = newGrid();


  addNumber();
  addNumber();

  wid = width/4;
  drawCanvas();
}

function drawCanvas() {
  background(0);
  drawGrid();
  select('#score').html(score);
}


function keyPressed() {
  var tempGrid = newGrid();
  arrayCopy(grid, 0, tempGrid, 0, 4);
  let flipped = false;
  let rotated = false;
  let flipAndRotate = false;
  let played = false;
  if (keyCode === LEFT_ARROW){
    grid = rotateGrid(grid);
    grid = flipGrid(grid, 1);
    flipped = true;
    rotated = true;
    played = true;
  } else if (keyCode === RIGHT_ARROW) {
    grid = rotateGrid(grid);
    rotated = true;
    played = true;
  } else if (keyCode === UP_ARROW){
    grid = flipGrid(grid, 1);
    flipped = true;
    played = true;
  } else if (keyCode === DOWN_ARROW) {
    played = true;
  }


  if (played) {
    for (var i = 0; i < 4; i++) {
      grid[i] = operate(grid[i]);
    }
    if (flipped) {
      grid = flipGrid(grid);
    }
    if (rotated){
      grid = rotateGrid(grid, -1);
    }



    if (tempGrid.join('') !== grid.join('')){
      addNumber();
    }

    drawCanvas();

    let gameOver = isGameOver();
    if (gameOver) {
      console.log("GAME OVER");
    }
    let gameWon = isGameWon();
    if (gameWon) {
      console.log("GAME WON");
    }
  }
}

function drawGrid() {

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      noFill();
      strokeWeight(4);
      let val = grid[i][j];
      let string = "" + val;
      stroke(0);
      if (val !== 0){
        fill(colorsSizes[string].color);
      } else {
        noFill();
      }
      rect(i*wid, j*wid, wid,wid);
      if (val !== 0) {
        let len = string.length;
        let size = [64,64,32,24,24];
        fill(255);
        textSize(size[len]);
        textAlign(CENTER);
        strokeWeight(1);
        text(val, (i * wid) + wid/2, (j * wid) + wid/2);
      }
    }
  }


}
