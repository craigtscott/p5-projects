var box = [];
function setup() {
  createCanvas(600,600);
  box = [new Box()];
}

function draw() {
  background(51);
  for (var i = 0; i < box.length; i++) {
    box[i].render();
  }

}

function mouseClicked() {
  this.pos = createVector(mouseX, mouseY);
  console.log(this.pos);

  for (var i = 0; i < box.length; i++) {
    if( this.pos.x > box[i].pos.x &&
        this.pos.x < box[i].pos.x + 50 &&
        this.pos.y > box[i].pos.y &&
        this.pos.y < box[i].pos.y + 50) {

      if (box[i].color === 0) {
        box[i].color = 255;
      } else {
        box[i].color = 0;
      }
    }
  }
}

function Box() {
  this.pos = createVector(height/2, width/2);
  this.color = 0;

  this.render = function() {
    stroke(this.color);
    fill(this.color);
    rect(height/2, width/2, 50, 50);
  };


}
