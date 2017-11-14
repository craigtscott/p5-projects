function Rock() {

  this.center = createVector(random(width), random(height));
  this.r = 75;
  this.direction = random( PI * 2);
  this.vel = createVector(1,0);

  this.render = function() {
    this.move();
    translate(this.center.x, this.center.y);
    stroke(255);
    noFill();
    ellipse(0,0, this.r);
  };

  this.move = function() {
    this.center.add(this.vel);
  };

}
