/* 
Valid Palindrome: Leet Code #125

PROBLEM: Given a string, determine whether it is a palindrone 

ALGO/DS: Hash table 

INPUT: string 

OUTPUT: boolean 

EDGE CASES: special characters 

ASSUMPTIONS: remove special characters, treat upper case and lower case letters the same 

GENERAL NOTES: New method introduced: Pointer method aka Pointer Traversal, 
a big part of solving algorithms is comparing different solutions 

*/ 
// ----------------------------------------------------------------------
// NAIVE SOLUTION 

var isPalindrome = function (s) {
    // call split method on string
    return s.split('').reverse().join('') === s; 
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

 /*
 GENERAL NOTES: define unclean as having spaces or special characters (in this context) ->
 aka "cleaning" the data or "sanitization"

 PSEUDO CODE:
 * create left and right pointers (rep. by indicies)
 * while pointers haven't met
    -> check if char are the same
    -> move pointers towards each other  
 
 */

var isPalindrome = function (s) {
    // v replacing everything that is not an alphanumeric char with an empty string or nothing
    s = s.replace(/[.*+?^${}()|[\]\\]/gi, '').toLowerCase();
    //left pointer
    let left = 0;
    //right pointer
    let right = s.length - 1; 
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

var isPalindrome = function (s) {
    s = s.replace(/[.*+?^${}()|[\]\\]/gi, '').toLowerCase();
}

// OPTIMAL BIG O ^ 
/* 

TIME COMPLEXITY: O(n) - linear time

while loop -> O(n/2) reduces to O(n)

SPACE COMPLEXITY: O(1) - constant space

recycle s to save space 

now only using extra space for the two pointers O(2)

O(2) space reduces to O(1) - constant space

*/