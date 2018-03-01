function newGrid() {
  return [  [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
          ];
}


function flipGrid(grid){
  let nGrid = newGrid();
  for (var i = 0; i < 4; i++) {
    nGrid[i] = grid[i].reverse();
  }
  return nGrid;
}

function rotateGrid(grid, dir){
  let nGrid = newGrid();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (dir === 1) {
        nGrid[j][i] = grid[i][j];
      } else {
        nGrid[i][j] = grid[j][i];

      }
    }
  }
  return nGrid;
}

function flipAndRotateGrid(grid) {
  let nGrid = newGrid();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      nGrid[j][i] = grid[i][j];
    }
  }
  for (var i = 0; i < 4; i++) {
    nGrid[i] = grid[i].reverse();
  }

  return nGrid;

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
