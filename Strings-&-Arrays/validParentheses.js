/* 

Valid Parentheses: Leet Code #20

ALGO/DS: The stack

Problem: Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Note that an empty string is also considered valid

INPUT: string - exp: '([]{))'

OUTPUT: boolean

EDGE CASES: empty string input ""

ASSUMPTIONS: if empty string return true, ALSO let's assume no weird characters (non parens)

GENERAL NOTES: 

* CHUNKING - breaking a problem into a smaller sub problem 

* simplify complex problems by starting with the simplest possible example
EXP: single loop iteration 

* STACK: an array with more specific rules - LAST IN FIRST OUT 

* METHODS: .push/.append - adds to end of array | .pop - removes from end of array
    - PUSH AND POP METHODS = STACK API

* we want to check one char at a time and do not need an index

PSEUDO CODE:

for char in str
    * if opening, push into stack
    * if closing, pop and compare
        * if test fails - return false
    * if all passed, return true

*/ 


// NAIVE SOLUTION
var isValid = function(s) {
    // empty array to keep track of opening parentheses 
    var stack = [];
    //we want to check one char at a time and do not need an index so 
    // we use for of loop
    for (let char of s) {
        if (char === '(' || char === '['|| char === '{' ){
            stack.push(char);
        } else {
            // check to see if stack is empty
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (last === '(' && char !== '0') {
                return false;
            } else if (last === '[' && char !== ']') {
                return false;
            } else if (last !== '{' && char !== '}') {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    } else {
        return true;
    }
};

// OPTIMAL SOLUTION 

var isValid = function(s) {
    // empty array to keep track of opening parentheses 
    var stack = [];
    //we want to check one char at a time and do not need an index so 
    // we use for of loop

    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (char in pairs){
            stack.push(char);
        } else {
            // check to see if stack is empty
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (pairs[last] !== char) return false;
        }
    }
    if (stack.length) {
        return false;
    } else {
        return true;
    }
};


// BIG O ^ 

/* 

Time Complexity - O(n): linear

* one loop

-------------------------------------------

Space Complexity - O(n): linear (where n = string length)

* worst case size n if all opening parentheses 


*/