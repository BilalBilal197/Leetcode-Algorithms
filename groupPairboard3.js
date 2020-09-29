

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