function Food() {
  this.cols = floor(width/scl);
  this.rows = floor(height/scl);
  this.food;

  this.pick = function () {
    // print (.cols);
    this.food = createVector(floor(random(this.cols)), floor(random(this.rows)));

    this.food.mult(scl);
  };

  this.show = function () {
    fill(0,128,0);
    rect(this.food.x, this.food.y, scl, scl);
  };
}
