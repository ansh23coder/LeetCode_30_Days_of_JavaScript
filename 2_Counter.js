// https://leetcode.com/problems/counter/

/**
 * @param {number} n
 * @return {Function} counter
 */
// method 1:
// var createCounter = function(n) {
//     let currCount = n-1;
//     return function() {
//         currCount += 1;
//         return currCount;
//     };
// };

// another method to solve the same problem:
var createCounter = function(n) {
  return function() {
    return n++;      
  };
};
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */