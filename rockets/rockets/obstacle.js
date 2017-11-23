function Obstacle(){
  this.location = createVector(slider.value(), 300);
  this.height = 10;
  this.width = 200;

  this.show = function() {
    this.location.x = slider.value();
    fill(255);
    rect(this.location.x, this.location.y, this.width, this.height);
  };

}
