/* 

Valid Parentheses: Leet Code #20

Data Strucure: the stack

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

PSEUDO CODE:

for char in str
    * if opening, push into stack
    * if closing, pop and compare
        * if test fails - return false
    * if all passed, return true

*/ 

















// BIG O ^ 

/* 

Time Complexity - 

-------------------------------------------

Space Complexity - 


*/