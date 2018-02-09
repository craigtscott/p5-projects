var cities = [];
var shortest;
var cityCount = 15;


var minDist;
function setup() {
  createCanvas(600,600);

  for (var i = 0; i < cityCount; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
  minDist = calcDist(cities);
  shortest = cities.slice();
  console.log(minDist);
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

  stroke(0,255,100);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < shortest.length; i++) {
    vertex(shortest[i].x, shortest[i].y);
  }
  endShape();
  ellipse(shortest[0].x, shortest[0].y, 10,10);
  ellipse(shortest[cityCount-1].x, shortest[cityCount-1].y, 10,10);


  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities,i,j);

  var d = calcDist(cities);
  if ( d < minDist){
    minDist = d;
    shortest = cities.slice();
  }

}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function calcDist(points){
  var sum = 0;
  for (var i =0; i < points.length-1; i++){
    var dis = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    sum += dis;
  }
  return sum;
};
