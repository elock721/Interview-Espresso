/* 

Three Sum: Leet Code #15

Problem: 
Given an array nums of n integers,
are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which give the sum of 0.

ALGO/DS:

INPUT:
nums [-1, 0, 1, 2, -1, -4] []number

OUTPUT:
solutions [[-1, 0, 1], [-1, 2, -1]] | [][]number

EDGE CASES:
none numbers sum to 0

ASSUMPTIONS:
1. input can have duplicate numbers 
2. out put triplets must be unique 
3. triplet order does not matter

GENERAL NOTES:
intelligent traversal 



PSEUDO CODE:
for every number in nums 
* while left < right
    - too low? move left 
    - too high? move right
    - zero? add to output, move both
*/ 

// Optimal Solution 
var threeSum = function(nums) {
    const output = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            
        }
    }
};














// BIG O ^ 

/* 

Time Complexity - 

-------------------------------------------

Space Complexity - 


*/