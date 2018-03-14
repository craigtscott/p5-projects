var counts = {};
var keys = [];
var words;
var tokens;
function preload(){
  words = loadStrings('text.txt');
}
function setup() {
  words = words[0];
  console.log(words);
  tokens = words.split(" ");
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (counts[word] === undefined) {
      counts[word] = 1;
      keys.push(word);
    } else {
      counts[word]++;
    }
  }
  keys.sort(compare);

  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    createDiv(key + " " + counts[key]);
  }
}

function draw() {

}
