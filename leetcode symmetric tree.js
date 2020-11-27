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

function isLevelSymmetric(nodes) {
    var len = nodes.length;
    var beg = 0;
    var end = len - 1;
    
    while(beg < end) {
        if(nodes[beg] === null && nodes[end] === null || (nodes[beg] && nodes[end] && nodes[beg].val === nodes[end].val)) {
            beg++;
            end--;
        } else {
            return false;
        }
    }
    
    return true;
}