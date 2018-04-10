// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // my answer
    // let reverseNumberString = n.toString().split("").reverse().join("");
    // const sign = Math.sign(n)

    // if (sign === -1) {
    //   reverseNumberString = "-" + reverseNumberString;
    //   return parseInt(reverseNumberString);
    // } else if (sign === 0 || sign === 1) {
    //   return parseInt(reverseNumberString);
    // }

  // video answer
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);


}

module.exports = reverseInt;
