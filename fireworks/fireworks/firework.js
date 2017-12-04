function Firework(){
  this.firework = new Particle(random(width), height);

  this.update = function() {
    this.firework.applyForce(gravity);
    this.firework.update();
  };
  
  this.draw= function() {
    this.firework.draw();
  };
}