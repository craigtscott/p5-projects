class Tile {
  constructor(x, y, res, index, n) {
    this.x = x;
    this.y = y;
    this.wh = res;
    this.index = index;
    this.snakeladder = 0;
    if (this.index % 2 ===0){
      this.color = 200;
    } else {
      this.color = 100;
    }
  };

  getCenter() {
    let cx = this.x + this.wh/2;
    let cy = this.y + this.wh/2;
    return [cx, cy];
  }

  render(tiles) {
    fill(this.color);
    rect(this.x, this.y, this.wh, this.wh);

    if (this.snakeladder !== 0){
      let myc = this.getCenter();
      let nxtc = tiles[this.index + this.snakeladder].getCenter();
      push();
      strokeWeight(5);
      stroke(255,0,0);
      line(myc[0], myc[1], nxtc[0], nxtc[1]);
      pop();

    };

  }
}
