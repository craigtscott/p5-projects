var population;
function setup() {
  createCanvas(600, 800)
  population = new Population();
  
}

function draw() {
  background(0);
  population.run();
}

function Population() {
  this.rockets = [];
  this.numRockets = 50;
  
  for (var i = 0; i < this.numRockets; i++) {
    this.rockets[i] = new Rocket();
  }
  
  this.run = function() {
    for (var i = 0; i < this.numRockets; i++) {
      this.rockets[i].update();
      this.rockets[i].show();

    }
  }
}