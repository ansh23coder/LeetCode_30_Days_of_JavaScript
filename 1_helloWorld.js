// https://leetcode.com/problems/create-hello-world-function/

/**
 * @return {Function}
 */
// 1st code:
// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
//     }
// };

// 2nd code:
var createHelloWorld = function() {
    return () => "Hello World";
};