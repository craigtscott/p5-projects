
function setup() {
  createCanvas(600,600);
}

function draw() {
  background(60);
  stroke(255);
  translate(width/2, height);
  branch(100);

}

function branch(len){
  line(0, 0,0, - len);
  translate(0,-len);
  rotate(PI/7);
  branch(len* 0.75);



}
