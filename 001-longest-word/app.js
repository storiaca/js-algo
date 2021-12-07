/*
  Find the longest word in a string
  Ex. "The quick brown fox jumped over the lazy dog"
  Ex. "What if we try a super-long word such as otorhinolaryngology"
*/
// Basic Solution

// function longestWord(str) {
//   const words = str.split(" ");
//   let longestWord = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord) {
//       longestWord = words[i].length;
//     }
//   }
//   return longestWord;
// }

// Intermediate Solution

// function longestWord(str) {
//   return str.split(" ").reduce(function (x, y) {
//     return Math.max(x, y.length);
//   }, 0);
// }

// Advanced Solution
function longestWord(str) {
  str = str.split(" ");

  if (str.length == 1) {
    return str[0].length;
  }

  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return longestWord(str.join(" "));
  }

  if (str[0].length <= str[1].length) {
    return longestWord(str.slice(1, str.length).join(" "));
  }
  return str.length;
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(
  longestWord("What if we try a super-long word such as otorhinolaryngology")
);
