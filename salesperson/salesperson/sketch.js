var cities = [];
var shortest;
var cityCount = 8;

var order =[];
var totalperm = factor(cityCount);
 var count = 0;



var minDist;
function setup() {
  createCanvas(600,600);

  for (var i = 0; i < cityCount; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
    order[i] = i;

  }
  minDist = calcDist(cities, order);
  shortest = cities.slice();
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
  for (var i = 0; i < order.length; i++) {
    var n = order[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();

  stroke(0,255,100);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < order.length; i++) {
    var n = shortest[i];
    vertex(cities[i].x, cities[i].y);
  }
  endShape();
  ellipse(shortest[0].x, shortest[0].y, 10,10);
  ellipse(shortest[cityCount-1].x, shortest[cityCount-1].y, 10,10);


  // var i = floor(random(cities.length));
  // var j = floor(random(cities.length));
  // swap(cities,i,j);

  var d = calcDist(cities, order);
  if ( d < minDist){
    minDist = d;
    shortest = order.slice();
  }

  textSize(64);
  var s = "";
  for (var i = 0; i < order.length; i++) {
    s += order[i];
  }

  fill(255);
  text(s, 20, height-15);


  if (count < totalperm) {
    var t = 100 * (count / totalperm);
    textSize(64);
    fill(255);
    text(nf(t, 0,2), 400, height-15);
  }
  nextOrder();
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function calcDist(points, order){
  var sum = 0;
  for (var i =0; i < order.length-1; i++){
    var cityAIndex = order[i];
    var cityA = points[cityAIndex];
    var cityBIndex = order[i+1];
    var cityB = points[cityBIndex];
    var dis = dist(cityA.x, cityA.y, cityB.x, cityB.y);
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
    textSize(64);
    var s = shortest.join('');
    fill(255);
    text(s, 400, height-15);
    nextOrder();
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
 count++;
}

function factor(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factor(n - 1);
  }
}
