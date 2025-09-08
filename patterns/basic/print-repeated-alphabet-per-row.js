/*
A
BB
CCC
DDDD
EEEEE
*/

const n = 5;
function printRepeatedAlphabetPerRow(n) {
  const startChar = "A";
  let charAsciiValue = startChar.charCodeAt(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charAsciiValue));
    }
    charAsciiValue++;
    console.log();
  }
}

printRepeatedAlphabetPerRow(n);

// Explanation:
// ● rows = 5 → pattern has 5 rows.
// ● Outer loop runs from 0 to 4.
// ● In each row, calculate the character as 'A' + i:
// ○ Row 0 → A, Row 1 → B, ..., Row 4 → E.
// ● Inner loop prints the same character i+1 times.
// ● console.log() moves to next line.
