var c = 3;
var phys = [];
function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);

}
function mouseClicked() {
  phy = new Phyllo(mouseX, mouseY);
  phys.push(phy);
}

function draw() {
  for (var i = 0; i < phys.length; i++) {
    phys[i].render();
  }

}
