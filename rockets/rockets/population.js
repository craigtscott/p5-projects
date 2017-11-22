function Population() {
  this.rockets = [];
  this.numRockets = 100;
  this.pool = [];
  
  for (var i = 0; i < this.numRockets; i++) {
    this.rockets[i] = new Rocket();
  }
  
  this.run = function() {
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].update();
      this.rockets[i].show();

    }
  };
  
  this.eval = function() {
    var maxfit = 0;
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].calcFit();
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }
    
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].fitness /= maxfit;
    }
    
    this.pool = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.pool.push(this.rockets[i]);   
      }
    }
  };
  
  this.selection = function() {
    var newRockets = [];

    for (var i = 0; i < this.numRockets; i++) {
      var parentA = random(this.pool).dna;
      var parentB = random(this.pool).dna;
      var child = parentA.cross(parentB);
      child.mutate();
      newRockets[i] = new Rocket(child);
    }
    for (var i = 0; i < hitters.length; i++) {
      newRockets[i] = hitters[i];
    }

    this.rockets = newRockets;
  };
}