var words;

function setup() {
  noCanvas();
  words = splitTokens(srctxt, ' ,!.?');
  var seed = select("#seed");
  var submit = select("#submit");
  submit.mousePressed(function() {
    var phrase = diastic(seed.value(), words);
  });
}

function diastic(seed, arr) {
  console.log(seed);
}
