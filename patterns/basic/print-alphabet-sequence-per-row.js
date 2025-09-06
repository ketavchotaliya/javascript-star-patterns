/*
A
BC
DEF
GHIJ
KLMNO
*/

const n = 5;
function printAlphabetSequencePerRow(n) {
  startChar = "A";
  charAsciiValue = startChar.charCodeAt(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charAsciiValue));
      charAsciiValue++;
    }
    console.log();
  }
}

printAlphabetSequencePerRow(n);

// Explanation:
// ● char ch = 'A' initializes the starting alphabet.
// ● Outer loop runs from 1 to 5 (for 5 rows).
// ● Inner loop runs i times for row i.
// ● Each character is printed and then incremented (ch++).
// ● Output continues alphabetically from A to O.