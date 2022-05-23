/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

function getLikes(array) {
    if (!array) return 'Be the first to like this';
    else if (array.length === 1){
        return `${array[0]} likes this`
    } else if (array.length === 2) {
        return `${array[0]} and ${array[1]} like this`
    } else {
        return `${array[0]} and ${array.length-1} other people like this`
    }
}

module.exports = getLikes;
