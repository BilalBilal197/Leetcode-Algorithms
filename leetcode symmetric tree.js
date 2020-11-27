var isSymmetric = function(root) {
    var queue = [];
    queue.push(root);
    
    while(queue.length !== 0) {
        var len = queue.length;
        
        if(!isLevelSymmetric(queue)) {
            return false;
        }
        
        for(var i = 0; i < len; i++) {
            var node = queue.shift();
            
            if(node !== null) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
    
    return true;
};

