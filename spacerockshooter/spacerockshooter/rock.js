function Rock() {

  this.center = createVector(random(width), random(height));
  this.r = 75;

  this.render = function() {
    translate(this.center.x, this.center.y);
    stroke(255);
    noFill();
    ellipse(0,0, this.r);
  };

}
