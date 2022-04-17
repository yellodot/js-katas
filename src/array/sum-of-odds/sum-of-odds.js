/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

function sum(array){
    if ((array !== null) && (array.length>0)) {
      let result = array.reduce((prev, current) =>
				current % 2 === 0 ? prev + 0 : prev + current
        , 0)
      return result;
    }
  	else return 0;
}

module.exports = sum;
