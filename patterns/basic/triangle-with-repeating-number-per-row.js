/*
1
22
333
4444
55555
*/

const n = 5;
function printTriangleWithRepeatingNumberPerRow(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 1; k <= i; k++) {
      process.stdout.write(i.toString());
    }
    console.log();
  }
}

printTriangleWithRepeatingNumberPerRow(n);

// Explanation:
// We have two for loops:
// ● Outer loop runs for each row (from 1 to 5).
// ● Inner loop prints the current row number (i) exactly i times.
// ● After printing for one row, we move to the next line using
// console.log().