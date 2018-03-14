var counts = {};
var keys = [];
var words;
function preload(){
  words = loadStrings('text.txt');
}
function setup() {
  console.log(words);
  // var tokens = words.split(/\W+/);
  for (var i = 0; i < wordss.length; i++) {
    var word = words[i].toLowerCase();
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
