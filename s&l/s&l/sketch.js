let tiles = [];
let player;
let rolls = [];
let index = 0;
let averageRoll = 0;

function setup() {
  createCanvas(600,600);
  rolls[index]=0;
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
  player.roll();
  rolls[index]++;
  let gameOver = false;
  if (player.spot >= tiles.length) {
    player.spot = tiles.length ;
    console.log("game over");
    gameOver = true;
  }
  if (gameOver){
    player.reset();
    index++;
    rolls[index] = 0;
  }


  if (index == 100) {
    let total = 0;
    for (var i = 0; i < rolls.length; i++) {
      total += rolls[i];
    }
    console.log(total/100);
    noLoop();
  }
}
