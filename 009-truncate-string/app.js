/* 
  Truncate a String
  'Orange' , 1, 3, 7
*/
// Basic Solution

function truncateString(str, num) {
  return str.substr(0, num);
}

console.log(truncateString("Orange", 1));
console.log(truncateString("Orange", 3));
console.log(truncateString("Orange", 9));
