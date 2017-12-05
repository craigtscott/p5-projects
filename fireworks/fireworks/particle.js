function Particle(x,y, shower, shape, rand) {
  this.pos = createVector(x,y);
  if (shower){
    if (shape === "circle"){
        this.vel = createVector(random(-.5,3), random(-.5,3));
      } else {
        this.vel = p5.Vector.random2D();
      }
    if (rand){
      this.vel.mult(random(1,4));
    }

  } else {
    this.vel = createVector(random(-1, 1),random(-6,-20));
  }
  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  },

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.draw = function() {
    point(this.pos.x, this.pos.y);
  };
}
