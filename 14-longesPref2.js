var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) { return '' }
    
    let i = 0
    while (strs.every(s => s[i] && s[i] === strs[0][i])) {
      i++
    }
    return strs[0].slice(0, i)
  };