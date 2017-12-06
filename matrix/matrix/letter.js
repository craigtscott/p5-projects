function Letter(){
  this.letter = random(26) + 65;
  
  this.render = function(){
    stroke(0, 255, 85);
    textSize(100);
    text(char(floor(this.letter)), 300,300);
  }
}