var cities = [];
var cityCount = 5;
function setup() {
  createCanvas(600,600);

  for (var i = 0; i < cityCount; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
}

function draw() {
  background(0);
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 5,5);
  }

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

}
