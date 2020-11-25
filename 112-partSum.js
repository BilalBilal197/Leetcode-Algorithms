var hasPathSum = function(root, sum) {
    if(root === null){
        return false;
    }
    
    if(root.val === sum && root.left === null && root.right === null){
        return true;
    }
    
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};




var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }
    
    var left = root.left;
    var right = root.right;
    
    if (left === null && right === null) {
        return root.val === sum;
    }
    
    return hasPathSum(left, sum - root.val) || hasPathSum(right, sum - root.val);
};