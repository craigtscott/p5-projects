var population;
var lifespan = 250;
var showL;
var showV;
var showH;
var showR;
var count = 0;
var target;
var vollies = 0;
var obstacle;
var hitters = [];
var slider;

function setup() {
  createCanvas(600, 600);
  population = new Population();
  showL = createP();
  showV = createP();
  showH = createP();
  showR = createP();
  target = createVector(width/2, 25);
  slider = createSlider(0, 400, 200);
  obstacle = new Obstacle();

}

function draw() {
  background(0);
  obstacle.show();
  population.run();
  showL.html(count);
  showV.html(vollies);
  showH.html(hitters.length);
  showR.html(population.rockets.length);
  count++;

  if (count === lifespan) {
    population.eval();
    population.selection();
    count = 0;
    vollies++;
  }

  ellipse(target.x, target.y, 15, 15);
}
