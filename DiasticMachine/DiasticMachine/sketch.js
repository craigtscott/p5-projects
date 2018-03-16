var words;


function preload() {
  words = loadStrings('text.txt');
  console.log(words[0]);
}

function setup() {
  noCanvas();
  words[0] = splitTokens(srctxt, ' ,!.?"');
  var seed = select("#seed");
  var submit = select("#submit");
  submit.mousePressed(function() {
    var phrase = diastic(seed.value(), words);
    createP(phrase);
  });

}

function diastic(seed, arr) {

  var phrase = "";
  var currentWord = 0;

  for (var i = 0; i < seed.length; i++) {
    var c = seed.charAt(i);
    for (var j = currentWord; j < arr.length; j++) {
      if (arr[j].charAt(i) === c) {
        phrase += words[j];
        phrase += " ";
        currentWord = j + 1;
        break;
      }
    }
  }
  return phrase;
}
