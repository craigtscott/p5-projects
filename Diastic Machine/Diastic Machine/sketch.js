

function preload() {

}

function setup() {
  noCanvas();
  // srctxt = join(srctxt, ' ');
  var seed = select("#seed");
  var submit = select("#submit");
  submit.mousePressed(function() {
    createP(srctxt);
  });
}

function draw() {

}
