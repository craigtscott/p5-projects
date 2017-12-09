var stacks = [];
var number = 40;
var letSize = 30;
function setup() {
createCanvas(window.innerWidth, innerHeight);
for (var i = 0; i < number; i++) {
  stacks.push(new Stack(letSize, (i * letSize)));
  stacks[i].buildStack();
}
}

function draw() {
  background(0);
  for (var i = 0; i < stacks.length; i++) {
    stacks[i].render();
  }

}
