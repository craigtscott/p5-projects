var k;
var slider;

function setup() {
  createCanvas(600,600);
  slider = createSlider(1,50,4,1)
;
}

function draw() {
  background(0);
  translate(width/2, height/2);
  k = slider.value();

  beginShape();
  stroke(255);
  noFill();
  for (var a = 0; a < TWO_PI; a +=0.01){
    var r = 300 * cos(k*a);
    var x = r* cos(a);
    var y = r * sin(a);
    vertex(x,y);

  }
  endShape();

}
