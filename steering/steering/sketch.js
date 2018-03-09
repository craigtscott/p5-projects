var font;

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
    stroke(0,255,0);
    strokeWeight(4);
    point(poi.x, poi.y);
  }
}

function draw() {

}
