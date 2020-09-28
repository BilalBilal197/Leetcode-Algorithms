var generateParenthesis = function(n) {
    if (n <= 0) { return [] }
  
    const queue = [{
      path: '(',
      open: 1,
      close: 0,
    }]
  
    while (true) {
      const { path, open, close } = queue.shift()
      if (open + close === n * 2) {
        queue.unshift({ path, open, close })
        break
      }
  
      if (open < n) {
        queue.push({
          path: path + '(',
          open: open + 1,
          close,
        })
      }
  
      if (close < open) {
        queue.push({
          path: path + ')',
          open,
          close: close + 1,
        })
      }
    }
  
    return queue.map(x => x.path)
  };