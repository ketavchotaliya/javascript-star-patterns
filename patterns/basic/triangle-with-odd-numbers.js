/*

 **
 ****
 ******
 ********
 
 */

const n = 5;
function printTriangleWithOddNumber(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i * 2 + 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printTriangleWithOddNumber(n);

// Explanation:
// ● Outer loop runs from i = 1 to i = n.
// ● In each row, print 2*i+1 stars to print in odd number.
// ● After printing all stars in a row, move to the next line using
// console.log();.
