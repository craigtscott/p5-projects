var stack;
function setup() {
createCanvas(window.innerWidth, innerHeight);
stack = new Stack(5);
stack.buildStack();
}

function draw() {
  background(0);
  stack.render();
  
}
