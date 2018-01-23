var angle = .44879;
var slider;
function setup() {
  createCanvas(600,600);
  slider = createSlider(0, PI, angle, 0.01);
}

function draw() {
  background(60);
  angle = slider.value();
  stroke(255);
  translate(width/2, height);
  branch(100);

}

function branch(len){

  line(0, 0,0, - len);
  translate(0,-len);
  if (len > 5){
    push();
    rotate(angle);
    branch(len* 0.75);
    pop();
    push();
    rotate(-angle);
    branch(len* 0.75);
    pop();
  }



}
