function Obstacle(){
  this.location = createVector(200,300);
  this.height = 10;
  this.width = 200;
  
  this.show = function() {
    fill(255);
    rect(this.location.x, this.location.y, this.width, this.height);
  }
  
}