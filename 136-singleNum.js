var singleNum = function(nums) {
    var total = 0;
    
    for(var i = 0; i < nums.length; i++){
        var num = nums[i];
        total = total ^ num;
    }
    
    return total;
};