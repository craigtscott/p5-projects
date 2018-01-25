var angle = .44879;
var tree = [];
// var slider;
function setup() {
  createCanvas(600,600);
  // slider = createSlider(0, PI, angle, 0.01);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height-100);
  root = new Branch(a, b, "white");
  tree[0] = root;
}

function mousePressed(){
  console.log(tree.length);
  if (tree.length < 177146){
    for (var i = tree.length - 1; i >= 0 ; i--) {
      var newBranches = tree[i].branches();
      tree.push(newBranches[0]);
      tree.push(newBranches[1]);
    }
  }

}

function draw() {
  background(60);
  // angle = slider.value();
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();

  }
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
