/*
  Find the longest word in a string
  Ex. "The quick brown fox jumped over the lazy dog"
  Ex. "What if we try a super-long word such as otorhinolaryngology"
*/
// Basic Solution
function longestWord(str) {
  const words = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(
  longestWord("What if we try a super-long word such as otorhinolaryngology")
);
