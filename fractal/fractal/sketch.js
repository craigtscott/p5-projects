var angle = .44879;
var root;
// var slider;
function setup() {
  createCanvas(600,600);
  // slider = createSlider(0, PI, angle, 0.01);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height-100);
  root = new Branch(a, b);
}

function draw() {
  background(60);
  // angle = slider.value();
  root.show();
}

// function branch(len){
//
//   line(0, 0,0, - len);
//   translate(0,-len);
//   if (len > 5){
//     push();
//     rotate(angle);
//     branch(len* 0.75);
//     pop();
//     push();
//     rotate(-angle);
//     branch(len* 0.75);
//     pop();
//   }
//}
