/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
function min(array) {
    if(array === null || array.length === 0) {
        return null;
    } else {
        return array.reduce((prev,current) => {
            return current < prev ? current : prev;
        })
    }
}

module.exports = min;
