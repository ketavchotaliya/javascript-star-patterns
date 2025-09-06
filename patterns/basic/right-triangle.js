/*
    *
   **
  ***
 ****
*****

*/

const n = 5;
function printRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    for (let k = 0; k <= i; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printRightTriangle(n);

// Explanation:
// ● First inner loop: Print (n-i-1) spaces.
// ● Second inner loop: Print (i+1) stars after spaces.
// ● After printing spaces and stars for one row, use System.out.println(); to
// move to the next line.
