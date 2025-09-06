/*
1
12
123
1234
*/

const n = 5;
function printTriangleWithIncreasingNumberSequence(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 1; k <= i; k++) {
      process.stdout.write(k.toString());
    }
    console.log();
  }
}

printTriangleWithIncreasingNumberSequence(n);

// Explanation:
// ● Outer loop runs from i = 1 to i = n.
// ● Inner loop prints numbers starting from 1 up to i in each row.
// ● After printing the numbers in each row, move to the next line with
// System.out.println();.
