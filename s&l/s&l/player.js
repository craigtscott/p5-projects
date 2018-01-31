class Player {
  constructor() {
    this.reset();
  }

  roll() {
    let r = floor(random(1,4));
    this.spot += r;
  }
  render(tiles){
    let current = tiles[this.spot];
    fill(125);
    let center = current.getCenter();
    ellipse(center[0], center[1], 50, 50);
  }

  reset() {
    this.spot = 0;
  }
}
