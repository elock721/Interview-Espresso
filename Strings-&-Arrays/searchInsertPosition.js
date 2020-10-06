/* 

Search Insert Position: Leet Code #35

Problem: Given a sorted array and a target value, return the index if the target is found -> 
IF NOT, return the index where it WOULD BE if it were inserted in order

ALGO/DS: Binary Search (allows to search through SORTED ARRAY)

INPUT: Array of numbers & target number

OUTPUT: Number (position or index)

EDGE CASES: empty array input

ASSUMPTIONS: no duplicates in the array, no empty inputs

GENERAL NOTES: 

PSEUDO CODE:

* init hi & lo pointers 
* while lo < hi
    * calculate mid pointer
    * compare mid value to target 
    * if target greater, lo = mid + 1
    * if target less, hi = mid - 1

*/ 

// Optimal solution 
var searchInsert = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        let midVal = nums[mid];
        if (target === midVal) {
            return mid;
        } else if (target > midVal) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};


// BIG O ^ 

/* 

Time Complexity - O(log n): logarithmic time

binary search is O(log n): logarithmic time because we are cutting the search in half over and over

-------------------------------------------

Space Complexity - O(1): constant space 

only using two pointers and temp values ->
space does not scale with the size of our input 


*/