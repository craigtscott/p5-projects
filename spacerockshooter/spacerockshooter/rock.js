function Rock() {

  this.center = createVector(random(width), random(height));
  this.r = 25;
  // this.direction = random( PI * 2);
  this.vel = p5.Vector.random2D();

  this.render = function() {
    push();
    this.move();
    translate(this.center.x, this.center.y);
    stroke(255);
    noFill();
    ellipse(0,0, this.r * 2);
    pop();
  };

  this.move = function() {
    this.center.add(this.vel);

    if (this.center.x > 600) {
      this.center.x = 0;
    } else if (this.center.x < 0) {
      this.center.x = width;
    }else if (this.center.y < 0) {
      this.center.y = width;
    }else if (this.center.y > 600) {
      this.center.y = 0;
    }
  };

}
