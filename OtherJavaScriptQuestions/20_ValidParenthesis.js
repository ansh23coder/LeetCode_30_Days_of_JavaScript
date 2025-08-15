// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    let stack = []; // Stack to hold opening brackets
    
    for (let ch of s) {
        // Push opening brackets to stack
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            // If stack is empty or top does not match closing bracket, return false
            if (stack.length === 0) {
                return false;
            }

            let top = stack[stack.length - 1];
            if ((ch === ')' && top === '(') || (ch === ']' && top === '[') || (ch === '}' && top === '{')) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    // If stack is empty at the end, all brackets matched correctly
    return stack.length === 0;
};
