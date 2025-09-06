/*
bbbb*
bbb*b*
bb*b*b*
b*b*b*b*
*b*b*b*b*

*/

const n = 5;
function printCenteredPyramidWithBChar(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write("b");
    }

    for (let k = 0; k <= i * 2; k++) {
      if (k % 2 == 0) process.stdout.write("*");
      else process.stdout.write("b");
    }
    console.log();
  }
}

printCenteredPyramidWithBChar(n);

// Explanation:
// ● Outer loop runs from i = 0 to i = n-1.
// ● First inner loop: Print (n-i-1) spaces ("b") to align stars correctly.
// ● Second inner loop: Alternate between printing stars (*) and blank spaces (b) using
// if (k % 2 == 0) to check for even and odd positions.
// ● After printing stars and spaces for one row, move to the next line with console.log()
