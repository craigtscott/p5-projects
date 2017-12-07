function Letter(x,y, letSize){
  this.letter = floor(random(255) + 65);
  this.pos = createVector(x,y);
  this.letSize = letSize;
  
  this.render = function(){
    this.fall();
    if (random(1) < .001) {
      this.letter = floor(random(26) + 65)
    }
    
    stroke(0, 0, 0);
    fill(0, 255, 85)
    textSize(this.letSize);
    text(char(this.letter), this.pos.x, this.pos.y);
  }
  
  this.fall = function(){
    this.pos.y += 2;
  }
  
}