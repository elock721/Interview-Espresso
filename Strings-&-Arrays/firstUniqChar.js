var firstUniqChar = function (s) {

    /*start by declaring a variable "hashTable" 
    and set it to an empty object*/
    const hashTable = {};

    /* then we can loop through the characters 
     in our string by using a "for of" loop
     - this simply gives us each char in the string in the var
     char on each iteration of the loop */
    for (let char of s) {

        /*inside the loop, we check for the existence of a counter
         for each character (++ adds 1 if counter already exists)*/
        if (hashTable[char]) hashTable[char]++;

        // creates counter
        else hashTable[char] * 1;
    }
    /* use a standard "for" loop here because we don't have access
    to the index*/
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hashTable[char] == 1) return i;
    }
    // fall through is -1
    return -1;
}

// BIG O ^ 

/* 

Time Complexity - 0(n): linear time

ALWAYS LOOK FOR LOOPS because 
that will take at least n time where n is the number
of times you're looping over

n = number of characters

- we have 2 loops in this example, one happens after the other
giving us n + n which reduces down to 2n which reduces down to just n 

n + n => 2n => 0(n): linear time

- remember you drop the constant 

-------------------------------------------

Space Complexity - 0(1): constant space

Max number of keys we can have in this problem (letters in alphabet)

Lower Case: a-z (26)
Upper Case: A-Z (26)

26 + 26 = 52 => 0(52) => 0(1): constant space 

*/


// MORE EFFIECENT SOLUTION 

var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        //checking equality btw 1st and last index 
        if (s.indexof(char) === s.lastIndexOf(char)) {
            //if equal, return the index
            return i;
        }
    }
    // fall through is still -1
    return -1;
}

// BIG O ^ 

/*

Time Complexity - O(n^2): quadratic time

- when operations are nested inside a loop => multiple instead of add

-------------------------------------------

Space Complexity - 0(1): constant space

- not using any data structures to store intermediate variables


*/

