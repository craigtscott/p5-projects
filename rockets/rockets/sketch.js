var population;
var lifespan = 500;
var showL;
var showV;
var count = 0;
var target;
var vollies = 0;

function setup() {
  createCanvas(600, 600);
  population = new Population();
  showL = createP();
  showV = createP();
  target = createVector(width/2, 25);
}

function draw() {
  background(0);
  population.run();
  showL.html(count);
  showV.html(vollies);
  count++;
  
  if (count === lifespan) {
    population.eval();
    population.selection();
    count = 0;
    vollies++
  }
  
  ellipse(target.x, target.y, 15, 15);
}
