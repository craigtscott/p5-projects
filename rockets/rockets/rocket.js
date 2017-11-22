function Rocket(dna) {
  this.pos = createVector(width/2, height - 20);
  this.vel = createVector();
  this.acc = createVector();
  this.hit = false;
  this.crash = false;
  this.prox = 0;
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
    
    if (d < 50 && !this.hit) {
      this.hit = true;
      this.pos = target.copy();
      var rocket = new Rocket(this.dna);
      append(hitters, rocket)
      

    }
    if ( d < 100) {
      this.prox += 5;
    }
    if( 100 < d < 200) {
      this.prox += 3;
    }
    if (this.pos.x > obstacle.location.x && this.pos.x < obstacle.location.x + obstacle.width && this.pos.y > obstacle.location.y && this.pos.y < obstacle.location.y + obstacle.height) {
      this.crash = true;
    }
    if (this.pos.y >= height) {
      this.crash = true;
    }
    this.applyForce(this.dna.genes[count]);
    if (!this.hit && !this.crash) {
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
    if (this.pos.y < target.y){
      this.fitness +=2;
    }
    this.fitnes += this.prox;
    if (this.hit){
      this.fitnes *= 10;
    }
    if (this.crash){
      this.fitness = 1;
    }
  };
  
}