// Group Anagrams: Leet Code #49

// Problem: Given an array of strings, return the strings grouped by anagram

// anagram: when two words have the same letters, but they can be in a different order

// INPUT: array of strings[]
// OUTPUT: array of array of strings string[][]

// EDGE CASE: getting passed an empty array as an input
// ASSUMPTIONS: checking for complete anagrams, partial matches don't count

// General Notes: you can sort anagrams with sort() function, more practice with hash table

// PSEUDO CODE: 
// loop through the string input list =>
// sort each string =>
// sorted key in table? add to array =>
// sorted key not in table? create array

var groupAnagrams = function(string) {
    // initalizing hash table to an empty object
    const ht = {};
    // loop through strings with for of loop
    for (let str of strs) {
        // v => 'abc' -> ['a','b','c'].sort() -> .join('')
        const sorted = str.split('').sort().join() // <= method chaining (commnon in JS)
        // 
        if (ht[sorted]) ht[sorted].push(str);
        else ht[sorted] = [str];
    }
    // Object.values - the way we convert our hashtable output format array of arrays =>
    // pulls off all values and throws away keys
    return Object.values(ht)
};


// BIG O ^ 

/* 

Time Complexity - O(n * (m log m))
n = length of "strings" | m = longest string

1 loop -> n 

sorting operations are very expensive, built in sort method is n log n 

-------------------------------------------

Space Complexity - O(n)

n keys in the hash table 

n = length of stings 


*/