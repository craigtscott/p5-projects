var population;
var lifespan = 500;
function setup() {
  createCanvas(600, 800)
  population = new Population();
  
}

function draw() {
  background(0);
  population.run();
}

function DNA() {
  this.genes = [];
  for (var i = 0; i < lifespan; i++) {
    this.genes[i] = p5.Vector.random2D();
  }
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