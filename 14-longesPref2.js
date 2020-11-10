var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) { return '' }
    
    let i = 0
    while (strs.every(s => s[i] && s[i] === strs[0][i])) {
      i++
    }
    return strs[0].slice(0, i)
  };

  var longestCommonPrefix = function (strs) {
    if (strs.length > 0) {
      let minLen = Math.min(...strs.map(s => s.length))
      const anyStr = strs[0]
      while (minLen) {
        const prefix = anyStr.slice(0, minLen--)
        if (strs.every(s => s.startsWith(prefix))) {
          return prefix
        }
      }
    }
    return ''
  };