/* ES5 Map Callback */

/* function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
} */


/* Write an ES2015 Version */

const arr = [2, 4, 6];
let val;
// Above variables are for testing purposes

const double = arr.map(val => val * 2);  //uses implicit return, function arrows all on one line

console.log(double);    //for testing on the console


/* ----------------------------------------------------------- */
/* Refactor the following function to use arrow functions:     */
/* Replace ALL functions with arrow functions:                 */
/* ----------------------------------------------------------- */

/* function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
} */

/* ES2015 Shorthand Version: */
let numbers = [4, 8, 9];
let val2;
let square;
// Above variables are for testing purposes

const squareAndFindEvens = numbers.map(val2 => val2 ** 2).filter(square => square % 2 === 0);  // one line refactored using implicit returns

console.log(squareAndFindEvens);    //for testing on the console
