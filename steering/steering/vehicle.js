function Vehicle(x,y){
  this.pos = createVector(x,y);
  this.target = createVector(x,y);
  this.vel = createVector();
  this.acc = createVector();
  this.rad = 8;
}


Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
};

Vehicle.prototype.show = function() {
  stroke(0,255,0);
  strokeWeight(4);
  point(this.pos.x, this.pos.y);
};
