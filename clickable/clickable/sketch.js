var boxes = [];
var locations = [ [225, 175], [275,175], [325, 175],
                  [225, 225],
                  [225, 275], [275,275], [325, 275],
                  [225,325],
                  [225, 375], [275,375], [325, 375]

                ];
var order = [];
var pop = false;
function setup() {
  createCanvas(600,600);
  for (var i = 0; i < locations.length; i++) {
    boxes.push(new Box(locations[i]));
  }

}

function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].render();
  }
  if (order.length === 11) {
    pop = true;
  }
    frameRate(5);
  if (order.length > 0 && pop === true) {
    box = order.pop();
    box.color = 0;
  }

  if(order.length === 0 && pop === true) {
    pop = false;
  }


}

function mouseClicked() {
  this.pos = createVector(mouseX, mouseY);

  for (var i = 0; i < boxes.length; i++) {
    if( this.pos.x > boxes[i].pos.x &&
        this.pos.x < boxes[i].pos.x + 50 &&
        this.pos.y > boxes[i].pos.y &&
        this.pos.y < boxes[i].pos.y + 50 &&
        boxes[i].color ===0 ) {

        boxes[i].color = 255;
        order.push(boxes[i]);

    }
  }
}

function Box(pos) {
  this.pos =createVector(pos[0], pos[1]);
  this.color = 0;

  this.render = function() {
    stroke(51);
    fill(this.color);
    rect(this.pos.x, this.pos.y, 50, 50);
  };


}
