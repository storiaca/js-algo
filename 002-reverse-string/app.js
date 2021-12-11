/* 
  Reverse a string

  Ex: "hello"
  Ex: "Howdy"
  Ex: "Greeting from earth"
*/
// 1st Solution

// function reverseString(str) {
//   const arrString = str.split("").reverse().join("");
//   return arrString;
// }

// 2nd Solution
// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// 3rd Solution
function reverseString(str) {
  let rev = "";
  const strArr = str.split("");
  for (let i = strArr.length - 1; i >= 0; i--) {
    rev += strArr[i];
  }
  return rev;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greeting from earth"));
console.log(reverseString("Aleksandar"));
