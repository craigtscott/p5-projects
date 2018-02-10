var cities = [];
var shortest;
var cityCount = 4;

var order =[];


var minDist;
function setup() {
  createCanvas(600,600);

  for (var i = 0; i < cityCount; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
    order[i] = i;

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

  textSize(64);
  var s = "";
  for (var i = 0; i < order.length; i++) {
    s += order[i];
  }

  fill(255);
  text(s, 20, height-15);
  nextOrder();
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

function nextOrder() {

  var largestI = -1;
  for (var i = 0; i < order.length; i++) {
    if (order[i] < order[i + 1]) {
      largestI = i;
    }
  }
  if (largestI === -1) {
    noLoop();
    console.log("fin");
  }
  var largestJ = -1;
  for (var j = 0; j < order.length; j++) {
    if (order[largestI] < order[j]) {
      largestJ = j;
    }
  }

  swap(order, largestI, largestJ);

  var endArray = order.splice(largestI + 1);
  endArray.reverse();
  order = order.concat(endArray);

  // background(0);
  // textSize(50);
  // var s = "";
  // for (var i = 0; i < order.length; i++) {
  //   s += order[i];
  // }
  // fill(255);
  // text(s, 20, height-15);
}
