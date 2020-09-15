

var smallestDifference = function(arr1, arr2){
    let smallestDiff = Infinity;
    let arr = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            let absVal = Math.abs(arr1[i] - arr2[j]);
            if(absVal < smallestDiff ){
                smallestDiff = absVal;
                arr = [ arr1[i], arr2[j]];
            }
        }
        
    }

    return arr;

}

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]


//                    v
arr1Sort = [-1, 3, 5, 10, 20, 28] 
//                       v
arr2Sort = [15, 17, 26, 134, 135]


console.log(smallestDifference(arrayOne, arrayTwo));