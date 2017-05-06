/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  /* IMPLEMENT ME */
  var counter = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (counter > arr[i]) {
      counter = arr[i];
    } else {
      counter;
    }
  } return counter;
}

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  /* IMPLEMENT ME */
  var counter = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (counter < arr[i]) {
      counter = arr[i];
    } else {
      counter;
    }
  } return counter;
}

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  /* IMPLEMENT ME */
  return max(arr) - min(arr);
}

// Don't change below:

module.exports = { min: min, max: max, range: range };
