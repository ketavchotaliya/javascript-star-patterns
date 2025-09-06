/*
1
01
010
1010
10101
*/

const n = 5;
function printBinaryNumberPerRow(n) {
  rowValue = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(rowValue.toString());
      if (rowValue == 1) rowValue = 0;
      else rowValue = 1;
    }
    console.log();
  }
}

printBinaryNumberPerRow(n);

// Explanation:
// ● Loop runs for 5 rows.
// ● Inner loop prints i values in row i.
// ● Alternates the rowValue between 0 and 1
// ● The pattern starts with 1 and alternates accordingly.
