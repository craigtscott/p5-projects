var population;
var lifespan = 250;
var showL;
var showV;
var showH;
var count = 0;
var target;
var vollies = 0;
var obstacle
var hitters = [];

function setup() {
  createCanvas(600, 600);
  population = new Population();
  showL = createP();
  showV = createP();
  showH = createP();
  target = createVector(width/2, 25);
  obstacle = new Obstacle();
}

function draw() {
  background(0);
  obstacle.show();
  population.run();
  showL.html(count);
  showV.html(vollies);
  showH.html(hitters.length);
  count++;
  
  if (count === lifespan) {
    population.eval();
    population.selection();
    count = 0;
    vollies++
  }
  
  ellipse(target.x, target.y, 15, 15);
}
