class Tile {
  constructor(x, y, res, index, n) {
    this.x = x;
    this.y = y;
    this.wh = res;
    this.index = index;
    this.next = n;
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

  render() {
    fill(this.color);
    rect(this.x, this.y, this.wh, this.wh);
  }
}
