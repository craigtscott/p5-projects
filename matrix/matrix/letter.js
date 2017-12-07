function Letter(x,y){
  this.letter = floor(random(26) + 65);
  this.pos = createVector(x,y);
  
  this.render = function(){
    this.fall();
    if (random(1) < .01) {
      this.letter = floor(random(26) + 65)
    }
    
    stroke(0, 255, 85);
    textSize(40);
    text(char(this.letter), this.pos.x, this.pos.y);
  }
  
  this.fall = function(){
    this.pos.y += 10;
    if (this.pos.y > height) {
      this.pos.y -= height;
    }
    
  }
}