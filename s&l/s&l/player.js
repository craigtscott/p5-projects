class Player {
  constructor() {
    this.reset();

  }

  rollDie(tiles) {
    this.roll = floor(random(1,4));
    this.next = this.spot + this.roll;
  }
  move() {
    this.spot = this.next;
  }

  showPreview(tiles){
    let end = min(this.next, tiles.length);
    for (var i = this.spot; i <= end; i++) {
      tiles[i].hilight();
    }
  }
  isSnadder() {
    let tile = tiles[this.spot];
    return (tile && tile.snakeladder !==0);
  }
  render(tiles){
    let current = tiles[this.spot];
    fill(125);
    let center = current.getCenter();
    ellipse(center[0], center[1], 50, 50);
  }

  reset() {
    this.spot = 0;
    this.roll = -1;
    this.next = -1;
  }
}
