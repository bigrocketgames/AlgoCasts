// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // my solution
    // let chars = {};
    // let maxCharCount = 0;
    // let returnChar = '';

    // str.split('').map((char) => {
    //   if (chars[char]) {
    //     chars[char] = chars[char] + 1;
    //   } else {
    //     chars[char] = 1;
    //   }
      
    //   if (chars[char] > maxCharCount) {
    //     maxCharCount = chars[char]
    //     returnChar = char;
    //   }
        
    // })

    // return returnChar;

  // video solution
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }

      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }

    return maxChar;
}

module.exports = maxChar;
