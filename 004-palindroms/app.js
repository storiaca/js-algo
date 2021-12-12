/* 
  Check for Palindromes
  "eye"
*/

function palindrome(str) {
  //assing a front and back ponter
  let front = 0;
  let back = str.length - 1;

  // back and front pointers won't always meet in t he middle, so use (back>front)
  while (back > front) {
    // increment front pointer if current character doesn't meet criteria
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    // decrements back pointer if current character doesn't meet criteria
    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    // finally do the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }

  // if the whole string has been compared without returning false, it's a palindrome
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("kayak"));
console.log(palindrome("radar"));
console.log(palindrome("madam"));
console.log(palindrome("pera"));

// drugo resenje
function checkPalindrome(string) {
  var testString = string;
  string = string.replace(/\s+/g, "").split("");
  for (i = 0, a = string.length - 1; i <= string.length - 1; i++, a--) {
    if (string[a] !== string[i]) {
      return testString + " is not a palindrome";
    }
  }
  return testString + " is a palindrome";
}

console.log(checkPalindrome("whatever"));
