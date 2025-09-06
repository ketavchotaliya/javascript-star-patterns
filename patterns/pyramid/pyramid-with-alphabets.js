/*
    A
   BCD
  EFGHI
 JKLMNOP
QRSTUVWXY

*/

const n = 5;
function printPyramidWithAlphabets(n) {
  startChar = "A";
  charAsciiValue = startChar.charCodeAt(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    for (let k = 0; k < i * 2 + 1; k++) {
      process.stdout.write(String.fromCharCode(charAsciiValue));
      charAsciiValue++;
    }
    console.log();
  }
}

printPyramidWithAlphabets(n);

// Explanation:
// ● Outer loop runs from i = 0 to i = n-1.
// ● First inner loop: Print (n-i-1) spaces to align stars correctly.
// ● Second inner loop: Alternate between printing Alphabets and blank spaces using
// if (k % 2 == 0) to check for even and odd positions.
// ● To determine the next Alphabet, convert the Alphabets to ASCII value then increment
// ● After printing Alphabets and spaces for one row, move to the next line with console.log()
