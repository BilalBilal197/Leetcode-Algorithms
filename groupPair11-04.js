Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
Example 1:
Input: [1,2,3,1]
Output: true
Example 2:
Input: [1,2,3,4]
Output: false
Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

1 - make an object
2 - for keys choose array elements
3 - values choose number of time element is in array
4 - iterate through object and return true if any value is greater  than one
5 - return false for all other scenarios






Function arrDuplicate(arr){ // [1,2,3,1]
Let countObj = {}
for(let i = 0; i < arr.length; i++){  
If(countObj.include(arr[i])){
countObj[arr[i]] += 1;  // {1:2, 2:1, 3:1}
} else {
countObj[arr[i]] = 1;  // {1:1, 2:1, 3:1}
}

}
Let vals = countObj.values() // [2, 1, 1]
for(let j = 0; j < vals; j ++){
if(vals[j] > 1) {  // true  
Return true  // true
}
}
Return false
}
Time complexity: 0(N) - N will depend length array
Space complexity: 0(n) - N will depend length of array

Input: [1,2,3,1]
Output: true
