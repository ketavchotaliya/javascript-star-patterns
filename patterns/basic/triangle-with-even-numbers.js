/*

 **
 ****
 ******
 ********
 
 */

const n = 5;
function printTriangleWithEvenNumber(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i * 2; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printTriangleWithEvenNumber(n);

// Explanation:
// ● Outer loop runs from i = 1 to i = n.
// ● In each row, print i*2 stars to print in even number.
// ● After printing all stars in a row, move to the next line using
// System.out.println();.
