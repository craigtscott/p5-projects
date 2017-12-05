function Particle(x,y, shower, shape, rand, hu) {
  this.pos = createVector(x,y);
  this.lifespan = 255;
  this.shower = shower;
  // if (hu){
  //   this.hu = hu;
  // } else {
  //   this.hu = random(255);
  // }
  this.hu = hu;
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
    colorMode(HSB);
    if (this.shower){
      strokeWeight(3);
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
    stroke(this.hu, 255, 255);
  }
    point(this.pos.x, this.pos.y);
  };

  this.fin = function() {
    if (this.lifespan <= 0){
      return true;
    }
    return false;
  };
}
