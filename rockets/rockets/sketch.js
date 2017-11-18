var population;
var lifespan = 500;
var showL;
var count = 0;
var target;

function setup() {
  createCanvas(600, 800);
  population = new Population();
  showL = createP();
  target = createVector(width/2, 25);
}

function draw() {
  background(0);
  population.run();
  showL.html(count);
  count++;
  
  if (count === lifespan) {
    population.eval();
    population.selection();
    count = 0;
  }
  
  ellipse(target.x, target.y, 15, 15);
}
