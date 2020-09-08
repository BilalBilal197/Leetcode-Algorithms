var singleNum = function(nums) {
    var total = 0;
    
    for(var i = 0; i < nums.length; i++){
        var num = nums[i];
        total = total ^ num;
    }
    
    console.log(total)
    return total;
};

// console.log(2)

singleNum([3,4,5,6,4])