function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    var sentence = `${musicians[i]} plays ${instruments[i]}`
    array.push(sentence)
  }
  return array
}

// JLfacts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ]
//


function johnLennonFacts(facts) {
    var i = 0
    while (i < facts.length) {

      facts[i] = facts[i] + '!!!'
      i = i + 1
    }
    return facts
    // console.log(facts)
}

// johnLennonFacts(JLfacts)


function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return array;
}

// function iLoveTheBeatles(number) {
//   var array = []
//   do {
//     array.push("I love the Beatles!")
// <<<<<<< HEAD
//     number++
// =======
// >>>>>>> 56bbe05b198141e828a8f1d9056ca144f68cefe4
//   } while (number < 15);
//   return array
// }
