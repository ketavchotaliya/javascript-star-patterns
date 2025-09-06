/*
1
23
456
7890
12345
*/

const n = 5;
function printNumberSequenceBetweenZeroToNinePerRow(n) {
  rowValue = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(rowValue.toString());
      rowValue++;
      if (rowValue > 9) {
        rowValue = 0;
      }
    }
    console.log();
  }
}

printNumberSequenceBetweenZeroToNinePerRow(n);

// Explanation:
// ● num starts at 1 and increases after every print.
// ● Reset the rowValue to 0 if value exceeds 9. (You can use rowValue % 10 logic as well to determine value below 9)
// ● Outer loop runs for each row.
// ● Inner loop prints i numbers in row i.
// ● After each row, move to the next line.
