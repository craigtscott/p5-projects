var font;
var vehicles = [];
var inp;
var og;

function preload(){
    font = loadFont('./TheBrownies.otf');
}
function setup() {
  createCanvas(1024, 500);
  inp = createInput("Wren");
  updateText();
  inp.input(updateText);

}

function updateText(){
  vehicles = [];
  var points = font.textToPoints(inp.value(), 175,200,200);

  for (var i = 0; i < points.length; i++) {
    var poi = points[i];
    var vehicle = new Vehicle(poi.x, poi.y);
    vehicles.push(vehicle);
  }

}

function draw() {
  background(27);
  // textFont(font);
  // fill(255);
  // textSize(200);
  // text('Wren', 175,200);
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].behaviors();
    vehicles[i].update();
    vehicles[i].show();
  }

}
