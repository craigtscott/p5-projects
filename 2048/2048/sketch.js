var grid ;
var wid;
function setup() {
  createCanvas(400,400);
  grid = [  [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
          ];


  addNumber();
  addNumber();

  wid = width/4;
}

function draw() {
  background(0);
  drawGrid();
}

function flip(grid){
  for (var i = 0; i < 4; i++) {
    grid[i].reverse();
  }
}

function keyPressed() {
  var tempGrid = [];
  arrayCopy(grid, 0, tempGrid, 0, 4);
  let flipped = false;
  if (keyCode === LEFT_ARROW){
    flip(grid);
    flipped = true;
  } else if (keyCode === RIGHT_ARROW) {

  } else if (keyCode === RIGHT_ARROW){

  }else if (keyCode === RIGHT_ARROW) {

  }


  for (var i = 0; i < 4; i++) {
    grid[i] = slideRow(grid[i]);
    grid[i] = combine(grid[i]);
    grid[i] = slideRow(grid[i]);
  }

  if (flipped) {
    flip(grid);
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

function addNumber() {
  var opts = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        opts.push({
          x: i,
          y: j
        });
      }
    }
  }
  if (opts.length > 0){
    let spot = random(opts);
    let ran = random(1);
    grid[spot.x][spot.y] = ran > 0.5 ? 2 : 4;
  }
}

  function slideRow(row) {
    let arr = row.filter(val => val);
    let mis = 4 - arr.length;
    let zeros = Array(mis).fill(0);
    arr = zeros.concat(arr);
    return arr;
  }

  function combine(row){
    for (var i = 3; i >= 1; i--) {
      let a = row[i];
      let b = row[i-1];
      if (a === b && a !== 0) {
        row[i] = a + b;
        row[i-1] = 0;
      }
    }
    return row;
  }
