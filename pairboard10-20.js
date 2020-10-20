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