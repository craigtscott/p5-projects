function Rocket(dna) {
  this.pos = createVector(width/2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.hit = false;
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }
  this.fitness = 0;

  
  this.applyForce = function(force) {
    this.acc.add(force);
  },
  
  this.update = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    
    if (d < 10) {
      this.hit = true
      this.pos = target.copy();

    }
    this.applyForce(this.dna.genes[count]);
    if (!this.hit) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  };
  
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0,0, 50, 10);
    pop();
    
  };
  
  this.calcFit = function() {

    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = map(d, 0, width,0, width);
    if (this.hit){
      this.fitnes *= 10;
    }
  };
  
}