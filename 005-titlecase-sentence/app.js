/* 
  Title Case a Sentence
  "I'm a little tea pot"
*/
// Basic Solution
// String.prototype.replaceAt = function (index, character) {
//   return (
//     this.substr(0, index) + character + this.substr(index + character.length)
//   );
// };
// function titleCase(str) {
//   var newTitle = str.split(" ");
//   var updatedTitle = [];
//   for (var st in newTitle) {
//     updatedTitle[st] = newTitle[st]
//       .toLowerCase()
//       .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//   }
//   return updatedTitle.join(" ");
// }

// Intermediate solution
// function titleCase(str) {
//   let convertToArray = str.toLowerCase().split(" ");
//   let result = convertToArray.map((val) => {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }

// Advanced solution
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
// }

// Advanced solution 2
function titleCase(str) {
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split("");
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join("");
  }

  return str.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
