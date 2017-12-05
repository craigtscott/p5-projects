function Particle(x,y, shower, shape, rand) {
  this.pos = createVector(x,y);
  this.lifespan = 255;
  this.shower = shower;
  if (this.shower){
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
    if (this.shower){
      this.vel.mult(.95);
      this.lifespan -= 3;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.draw = function() {
    if (this.shower){
      strokeWeight(3);
      stroke(255, this.lifespan);
    } else {
    stroke(255);
  }
    point(this.pos.x, this.pos.y);
  };

  this.fin = function() {
    if (this.life <= 0){
      return true;
    }
    return false;
  };
}
