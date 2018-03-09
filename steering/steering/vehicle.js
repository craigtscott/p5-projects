function Vehicle(x,y){
  this.pos = createVector(random(width), random(height));
  // this.pos = createVector(0, 0);

  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.rad = 8;
  this.maxAcc = 5;
  this.maxForce = 0.2;
}


Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
};

Vehicle.prototype.show = function() {
  stroke(0,255,0);
  strokeWeight(4);
  point(this.pos.x, this.pos.y);
};

Vehicle.prototype.behaviors = function() {
  var arive = this.arived(this.target);
  this.applyForce(arive);
};

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
};

Vehicle.prototype.arived = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var dist = desired.mag();
  var speed = this.maxAcc;
  if (dist < 100){
    speed = map(dist,0,100,0,this.maxAcc);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
};


Vehicle.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  desired.setMag(this.maxAcc);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.MaxForce);
  return steer;
};
