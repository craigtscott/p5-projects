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

function keyPressed() {
  var tempGrid = [];
  arrayCopy(grid, 0, tempGrid, 0, 4);
  if (key === ' ') {
    for (var i = 0; i < 4; i++) {
      grid[i] = slideRow(grid[i]);
    }
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
    arr = arr.concat(zeros);
    return arr;
  }

  function combine(){}
