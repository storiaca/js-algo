/* 
  Truncate a String
  'Orange' , 1, 3, 7
*/
// Basic Solution

function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + "...";
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// Advanced Solution

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num > 3 ? num - 3 : num) + "...";
  }
  return str;
}

console.log(truncateString("Orange", 1));
console.log(truncateString("Orange", 3));
console.log(truncateString("Orange", 9));
