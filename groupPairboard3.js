

// the input is in the form of nodes meaning there is left and right for each node.(the input given is misleading)

var kthSmallest(root, k){

    let arr = []
    let stackArr = [root]
    
    
    while( !stackArr.length){
        let current = stackArr.shift()
        stackArr.push(current.left)
        stackArr.push(current.right)
    
        if (current.value != null){
            arr.push(current.value)
        }
       
    }
    
     let arr2 = arr.sort((a,b) => (a - b))
    
     return arr2[k - 1]
    
    
    
    }
#########

    // Kadane's Algorithm
    function kadane(array) {
        
        let max = array[0]
         let curSubtotal = array[0]
         for (let i = 1; i < array.length; i++) {   
             curSubtotal = Math.max(array[i], (curSubtotal + array[i]));
            // console.log(curSubtotal)    
            max = Math.max(curSubtotal, max)   }
      return max
    }