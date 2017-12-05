function Firework(){
  this.firework = new Particle(random(width), height, false);
  this.exploded = false;
  this.shower = [];

  this.update = function() {
    if (!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explod();
      }
    }
    for (var i = 0; i < this.shower.length; i++) {
      this.shower[i].applyForce(gravity);
      this.shower[i].update();
    }
  };

  this.explod = function() {
    var shape = "square";

    if (random(1) >= .5){
      shape ="circle";
    }
    for (var i = 0; i < 100; i++) {
      var part = new Particle(this.firework.pos.x, this.firework.pos.y, true, shape);
      this.shower.push(part);
    }
  };

  this.draw = function() {
    if (!this.exploded) {
      this.firework.draw();
    }
    for (var i = 0; i < this.shower.length; i++) {
      this.shower[i].draw();
    }
  };
}
