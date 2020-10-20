/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// # declare variable product  to zero

// # make combination of all subarrays

// # get products of element of subarrays

// # compare products

// # return bigger product


var maxProduct = function(nums) {

    let bigger = 0
    let combinationSubarr = []
  
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
        combinationSubarr.push(nums.slice(i,j))
      }
    }
  
    for(let k = 0; k < combinationSubarr.length; k++){
      
      let multiple = helperFunc(combinationSubarr[k]) 
  
      multiple >= bigger ? (bigger = multiple) : bigger
      
    }
  
    
  
    return bigger;
  
      
  };
  
  var helperFunc  = function(arr) {
  
      let multiple = arr.reduce((a,b)=> a*b, 1);
  
  
      if(multiple == 1){
        return 0
      } else
      return multiple
  
  }
  
  console.log(maxProduct([2,3,-2,4]))