function Food() {
  this.cols = floor(width/scl);
  this.rows = floor(height/scl);
  this.x;
  this.y;

  this.pick = function () {
    this.x = floor(random(this.cols)) * scl;
    this.y = floor(random(this.rows)) * scl;
  };

  this.show = function () {
    //print(this.x);
    fill(0,128,0);
    rect(this.x, this.y, scl, scl);
  };
}
