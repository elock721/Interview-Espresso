/* 
Valid Palindrome: Leet Code #125

PROBLEM: Given a string, determine whether it is a palindrone 

INPUT: string 

OUTPUT: boolean 

EDGE CASES: special characters 

ASSUMPTIONS: remove special characters, treat upper case and lower case letters the same 

GENERAL NOTES: New method introduced: Pointer method aka Pointer Traversal, 
a big part of solving algorithms is comparing different solutions 

PSEUDO CODE:

*/ 
// ----------------------------------------------------------------------
// NAIVE SOLUTION 

var isPalindrome = function (s) {
    // call split method on string
    s.split('').reverse().join('') === s; 
    // ^ 'aba' -> ['a','b','a'] -> 'aba'
}

// NAIVE BIG O ^ 
/* 

TIME COMPLEXITY: O(n) -> linear time 

n time for each method (3 methods) - 3n => O(n)

SPACE COMPLEXITY: O(n): linear space 

implicit O(n) space
*/
// ----------------------------------------------------------------------

// OPTIMAL SOLUTION 

