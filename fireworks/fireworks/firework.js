function Firework(){
  this.firework = new Particle(random(width), height, false, null, false);
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
    for (var i = this.shower.length - 1; i >= 0; i--) {
      this.shower[i].applyForce(gravity);
      this.shower[i].update();

      if (this.shower[i].fin()){
        this.shower.splice(i,1);
      }
    }
  };

  this.explod = function() {
    var shape = "square";
    var rand = false;
    var roll = random(1);
    if (roll >= .5){
      shape ="circle";
    } else if (roll < .3 || roll > .7) {
      rand = true;
    }

    for (var i = 0; i < 100; i++) {
      var part = new Particle(this.firework.pos.x, this.firework.pos.y, true, shape, rand);
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
