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
    grid = flipGrid(grid, 1);
    flipped = true;
    played = true;
  } else if (keyCode === RIGHT_ARROW) {
    played = true;
  } else if (keyCode === UP_ARROW){
    grid = rotateGrid(grid);
    grid = flipGrid(grid, 1);
    flipped = true;
    rotated = true;
    played = true;
  } else if (keyCode === DOWN_ARROW) {
    grid = rotateGrid(grid);
    rotated = true;
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
      if (val !== 0) {
        let string = "" + val;
        let len = string.length;
        let size = [64,64,32,24];
        textSize(size[len]);
        textAlign(CENTER);
        strokeWeight(1);
        text(val, (j * wid) + wid/2, (i * wid) + wid/2);
      }
    }
  }


}
