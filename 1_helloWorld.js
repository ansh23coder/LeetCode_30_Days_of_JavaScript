// https://leetcode.com/problems/create-hello-world-function/

/**
 * @return {Function}
 */
// 1st
// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
//     }
// };

// 2nd
var createHelloWorld = function() {
    return () => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */