/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  /* IMPLEMENT ME */
  return arr.length;
}
/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
function sum(arr) {
  /* IMPLEMENT ME */
  counter = 0;
  for (var i = 0; i < arr.length; i++) {
    counter += arr[i];
  } return counter;
}
/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
function mean(arr) {
  /* IMPLEMENT ME */
  var counter = 0;
  if (arr.length === 0) {
    return null;
  } else {
    for (var i = 0; i < arr.length; i++) {
      counter += arr[i];
    } return counter / arr.length;
  }
}







function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };
