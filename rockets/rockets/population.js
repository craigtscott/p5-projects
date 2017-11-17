function Population() {
  this.rockets = [];
  this.numRockets = 50;
  this.pool = [];
  
  for (var i = 0; i < this.numRockets; i++) {
    this.rockets[i] = new Rocket();
  }
  
  this.run = function() {
    for (var i = 0; i < this.numRockets; i++) {
      this.rockets[i].update();
      this.rockets[i].show();

    }
  };
  
  this.eval = function() {
    // debugger;
    var maxfit = 0;
    for (var i = 0; i < this.numRockets; i++) {
      this.rockets[i].calcFit();
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }
    
    for (var i = 0; i < this.numRockets; i++) {
      this.rockets[i].fitness /= maxfit;
    }
    
    this.pool = [];
    for (var i = 0; i < this.numRockets; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.pool.push(this.rockets[i]);   
      }
    }
  };
  
  this.selection = function() {
    debugger;
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.pool);
      var parentB = random(this.pool);
      var child = parentA.cross(parentB);
      newRockets[i] = new Rocket(child);
    }
    this.roackets = newRockets;
  };
}