/*
    5
   545
  54345
 5432345
543212345
*/

const n = 5;
function printPyramidWithReversedNumbers(n) {
  for (let i = 0; i < n; i++) {
    let reverseNumber = n;
    // add space at left side
    for (let j = 1; j <= n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // add number at middle part
    for (let k = 0; k <= i; k++) {
      process.stdout.write(reverseNumber.toString());
      reverseNumber--;
    }
    // add number at right part
    let numberToPrint = reverseNumber + 2;
    for (let k = i - 1; k >= 0; k--) {
      process.stdout.write(numberToPrint.toString());
      numberToPrint++;
    }
    console.log();
  }
}

printPyramidWithReversedNumbers(n);

// Explanation:
// ● rows = 5: Defines the number of rows.
// ● The first loop prints the leading spaces to center-align the pattern.
// ● The second loop prints numbers in descending order, starting from 5 and decreasing
// until the appropriate number for each row.
// ● The third loop prints numbers in ascending order, starting from the number after the
// descending ones.
// ● console.log() moves to the next line after each row.
