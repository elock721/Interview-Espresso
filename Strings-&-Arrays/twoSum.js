/* 

Two Sum: Leet Code #1

Problem: Given an array of numbers and a target, 
return the indices of the numbers that add up to the target

ALGO/DS: Hash table 

INPUT: array of numbers []number & target number

OUTPUT: indices [1,3] or twople (2 cell array)

EDGE CASES: no nums add up to target
 
ASSUMPTIONS: always exactly one solution & each number can only be used once

GENERAL NOTES:
TIME SPACE TRADE OFF

PSEUDO CODE:

NAIVE PSEUDO CODE
for every number in nums    
    * check every other number
    * if == target, return indices

*/ 

// naive solution 
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const want = target - num;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] === want) return [i,j];
        }
    }
};

// NAIVE BIG O ^ 

/* 

Time Complexity - O(n^2): quadratic time

* 2 two nested for loops

-------------------------------------------

Space Complexity - 0(1): constant space 

*/

/*
OPTIMAL PSUEDO CODE

for every number in nums 
    * calculate "counterpart"
    * in table? return indices
    * not in table? store with index

*/

// optimal solution 

var twoSum = function(nums, target) {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const want = target - num;
        if (want in ht) {
            const leftIndex = ht[want];
            return [leftIndex, i];
        } else {
            ht[num] = i;
        }
    }
};

// OPTIMAL BIG O ^ 

/* 

Time Complexity - 0(n): linear time

one loop

-------------------------------------------

Space Complexity - 0(n): linear space

hash table

*/