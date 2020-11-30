var isSymmetric = function(root) {
    return root === null || isSymmetricTree(root.left, root.right)
  };
  
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  function isSymmetricTree (p, q) {
    return p === null && q === null ||
      p !== null && q !== null && p.val === q.val && isSymmetricTree(p.left, q.right) && isSymmetricTree(p.right, q.left)
  };