function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 5;

  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };

  this.show = function() {
    noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    ellipse(this.x, this.y, this.r, this.r);
  };

}
