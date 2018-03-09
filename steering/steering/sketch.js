var font;

function preload(){
    font = loadFont('./TheBrownies.otf');
}
function setup() {
  createCanvas(1024, 786);
  background(27);
  textFont(font, 128);

  fill(255);
  text('Wren', 10,200);

}

function draw() {

}
