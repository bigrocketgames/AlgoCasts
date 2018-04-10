// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // convert string to array, reverse it, and convert back to string
    // return str.split("").reverse().join("");

  // use for loop and loop through the word, adding each letter onto beginning of reversed word
    // let reverseWord = "";

    // for (let character of str) {
    //   reverseWord = character + reverseWord;
    // }

    // return reverseWord;

  // Utilizing reduce method
    return str.split("").reduce((reverseWord, character) => character + reverseWord, "");
}

module.exports = reverse;
