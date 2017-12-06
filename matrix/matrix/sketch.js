var letter;
function setup() {
createCanvas(window.innerWidth, innerHeight);
letter = new Letter();
}

function draw() {
  background(0);
  letter.render();
  
}
