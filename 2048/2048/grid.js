function newGrid() {
  return [  [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
          ];
}


function flipGrid(grid){
  for (var i = 0; i < 4; i++) {
    grid[i].reverse();
  }
  return grid;
}

function rotateGrid(grid){
  let nGrid = newGrid();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      nGrid[j][i] = grid[i][j];
    }
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
