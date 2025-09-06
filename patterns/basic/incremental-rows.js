/*

*****
*******
*********
***********
*************

*/

const n = 5;
function printIncrementalRows(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i * 2 + n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printIncrementalRows(n);

// Explanation:
// ● Outer loop runs from i = 1 to i = n.
// ● In each row, print i*2+n stars to print in 2 star extra on each row. (similar to Odd number).
// ● After printing all stars in a row, move to the next line using
// System.out.println();.
