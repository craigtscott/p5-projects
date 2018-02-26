var grid ;
function setup() {
  createCanvas(400,400);
  grid = [  [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
          ];

  console.table(grid);
  addNumber();
  addNumber();
  console.table(grid);
}

function draw() {
  background(0);
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
