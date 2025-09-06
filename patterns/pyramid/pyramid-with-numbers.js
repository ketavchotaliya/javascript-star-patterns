/*
   1
  121
 12321
1234321

*/

const n = 5;
function printPyramidWithNumbers(n) {
  for (let i = 0; i < n; i++) {
    // add space at left side
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // add characters at middle
    for (let k = 1; k <= i; k++) {
      process.stdout.write(k.toString());
    }
    // add characters at right side
    for (let m = i - 1; m >= 1; m--) {
      process.stdout.write(m.toString());
    }
    console.log();
  }
}

printPyramidWithNumbers(n);

// Explanation:
// ● rows = 5: Defines the number of rows.
// ● Outer loop (i) runs from 1 to 5 (for 5 rows).
// ● Leading spaces: Inner loop prints spaces for alignment to form the pyramid shape.
// ● Ascending numbers: Print numbers from 1 to i.
// ● Descending numbers: Print numbers from i-1 down to 1.
// ● System.out.println() moves to the next line after each row.
