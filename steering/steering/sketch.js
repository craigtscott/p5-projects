var font;
var vehicles = [];

function preload(){
    font = loadFont('./TheBrownies.otf');
}
function setup() {
  createCanvas(1024, 786);
  background(27);
  // textFont(font, 200);
  //
  // fill(255);
  // text('Wren', 175,200);

  var points = font.textToPoints('Wren', 175,200,200);
  console.log(points);

  for (var i = 0; i < points.length; i++) {
    var poi = points[i];
    var vehicle = new Vehicle(poi.x, poi.y);
    vehicles.push(vehicle);
  }
}

function draw() {

}
