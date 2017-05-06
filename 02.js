/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 *
 * Returns:
 *
 *    4
 */
function median(arr) {
  /* IMPLEMENT ME */
  var sorted = arr.sort();
  var half = Math.round(sorted.length / 2);
  var halfNegOne = half - 1;
  var halfNegTwo = half - 2;
  if (arr.length % 2 === 0) {
    return arr[halfNegOne] + arr[halfNegTwo] / 2;
  } else {
    return arr[halfNegOne];
  }
}
function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { median: median };
