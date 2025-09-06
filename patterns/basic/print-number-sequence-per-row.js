/*
1
23
456
78910
*/

const n = 4;
function printNumberSequencePerRow(n) {
  rowValue = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(rowValue.toString());
      rowValue++;
    }
    console.log();
  }
}

printNumberSequencePerRow(n);

// explanation:
// ● Start from num = 1.
// ● For each row i, print i numbers.
// ● After each number, add a space.
// ● After each row, go to the next line.
// ● Keep incrementing num after printing.
