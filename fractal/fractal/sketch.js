
function setup() {
  createCanvas(600,600);
}

function draw() {
  background(60);
  stroke(255);
  branch(100);

}

function branch(len){
  line(width/2, height, width/2, height - len);
}
