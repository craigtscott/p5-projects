let tiles = [];
let player;

function setup() {
  createCanvas(600,600);

  let resolution = 100;
  let cols = width/resolution;
  let rows = height/resolution;

  let x = 0;
  let y = (rows - 1) * resolution;
  let dir = 1;

  player = new Player();
  for (var i = 0; i < cols*rows; i++) {
    let tile = new Tile(x, y, resolution, i, i + 1);
    tiles.push(tile);
    x = x + (resolution * dir);
    if (x >= width || x <= -resolution) {
      dir *= -1;
      x += resolution * dir;
      y -= resolution;
    }
  }

}

function draw() {
  background(100);

  for (let tile of tiles) {
    tile.render();
  }
  player.render(tiles);

}
