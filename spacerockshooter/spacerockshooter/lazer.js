function Lazer(center, direction) {
  this.center = createVector(center.x, center.y);
  this.vel = p5.Vector.fromAngle(direction);

  this.update = function () {
    this.center.add(this.vel);

  };

  this.render = function() {
    stroke(255);
    point(this.center.x, this.center.y);
  };
}
