/* 

Rotate Image: Leet Code #48

Problem: 

You are given an n x n 2D matrix representing an image

Rotate the image by 90 degrees (clockwise)

You have to rotate the image IN PLACE (no second matrix)

ALGO/DS: Matrix - a 2 dimensional array

INPUT: Matrix nxn [][]number

OUTPUT: nothing 

EDGE CASES: na

ASSUMPTIONS: matrix will always hold numbers

GENERAL NOTES: draw out examples for matrix's, 
reverse array and flip the coordinates,
in JS the reverse method will work on any array (mutating the array not making a copy like splice),
SLICE METHOD MAKES A COPY OF THE ARRAY

PSEUDO CODE:

Reverse outer arrays
for each row ->
    * for each column
        * flip coordinates 

*/ 

// 
var rotate = function(matrix) {
  matrix.reverse();  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
        let temp = matrix [i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp; 
    }
  }
};














// BIG O ^ 

/* 

Time Complexity - 

-------------------------------------------

Space Complexity - 


*/
