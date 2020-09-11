var firstUniqChar = function(s) {
    
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
    for (let i = 0; 1 < s.length; i++) {
        const char = s[i];
        if (hashTable[char] == 1) return i;
    }

    return -1;
}


// BIG O

/* ALWAYS LOOK FOR LOOPS
















*/