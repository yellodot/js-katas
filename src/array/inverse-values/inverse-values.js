/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

function inverse(array){
    if ((array !== null) && (array.length>0)) {
        let negative = "-";
        const result = array.map((num) => 
          {           
          return Math.sign(num) === 1 ? parseInt(negative.concat(num.toString())) : parseInt(num.toString().split('').pop());
        }
        )
    		console.log("result",result);
    return result;
      }
    else return [];
}

module.exports = inverse;
