/*
A
AB
ABC
ABCD
ABCDE
*/

const n = 5;
function printEachAlphabetRowWise(n) {
  for (let i = 1; i <= n; i++) {
    const startChar = "A";
    let charAsciiValue = startChar.charCodeAt(0);
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charAsciiValue));
      charAsciiValue++;
    }
    console.log();
  }
}

printEachAlphabetRowWise(n);

// Explanation:
// ● rows = 5 → 5 rows in the pattern.
// ● Outer loop runs from 1 to 5 (row count).
// ● Inner loop runs j < i to print increasing letters in each row.
// ● 'A' + j gives the next character (A, B, C, ...).
// ● Characters always start from 'A' in each row.
// ● console.log() moves to the next line.
