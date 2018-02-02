const ROLLING = 0;
const MOVING = 1;
const SNADDER = 2;
let state = ROLLING;

let tiles = [];
let player;
let rolls = [];
let index = 0;
let averageRoll = -1;
let average;

function setup() {
  frameRate(5);
  createCanvas(600,600);
  average = createP('');
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

  tiles[17].snakeladder = -15;
  tiles[7].snakeladder = 15;

}

function draw() {
  background(100);

  for (let tile of tiles) {
    tile.render();
  }
  for (let tile of tiles) {
    tile.showSnakeLadders(tiles);
  }

  player.render(tiles);
  if (state === ROLLING)  {
    player.rollDie();
    rolls[index]++;
    player.showPreview(tiles);
    state = MOVING;
  } else if (state === MOVING) {
    player.move(tiles);
    if (player.isSnadder(tiles)) {
      state = SNADDER;
    } else {
      state = ROLLING;
    }
  } else if (state === SNADDER) {
    player.moveSnadder();
    state = ROLLING;
  }
  player.render(tiles);
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


    let total = 0;
    for (var i = 0; i < rolls.length-1; i++) {
      total += rolls[i];
    }
    let avg = total / (rolls.length - 1);
    average.html(avg);


}
