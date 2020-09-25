var generateParenthesis = function(n) {
    const result = []
    if (n > 0) {
      dfs(n, 0, 0, '', result)
    }
    return result
  };
  
  function dfs (n, nopen, nclose, path, result) {
    if (path.length === n * 2) {
      result.push(path)
      return
    }
  
    if (nopen < n) {
      dfs(n, nopen + 1, nclose, path + '(', result)
    }
  
    if (nclose < nopen) {
      dfs(n, nopen, nclose + 1, path + ')', result)
    }
  };