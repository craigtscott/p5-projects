function Cell () {
  this.pos = createVector(random(width), random(height));
  this.r = 35;

  this.move = function() {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  };

  this.show = function() {
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };
}
