/* 
 Confirm the ending
 "Bastian", "n"
*/
// 1st Solution

// function confirmEnding(str, target) {
//   return str.substr(-target.length) === target;
// }

// 2nd Solution

function confirmEnding(str, target) {
  if (str.substr(str.length - target.length, str.length) !== target) {
    return false;
  } else {
    return true;
  }
  return str;
}
console.log(confirmEnding("He has to give me a new name", "name"));
// Moje resenje

// function confirmEnding(str, target) {
//   //let letters = str.split("");
//   //let lastT = letters.pop();
//   let lastLetter = str.slice(str.length - 1);

//   if (lastLetter === target) {
//     return true;
//   }

//   return false;
// }

//console.log(confirmEnding("Bastian", "n"));
