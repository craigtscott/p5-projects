var counts = {};
function setup() {
var tokens = srctxt.split(/\W+/);
for (var i = 0; i < tokens.length; i++) {
  var word = tokens[i];
  if (counts[word] === undefined) {
    counts[word] = 1;
  } else {
    counts[word]++;
  }
}
}

function draw() {

}
