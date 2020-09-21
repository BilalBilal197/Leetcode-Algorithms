var longestCommonPrefix = function (strs) {
    let prefix = ''
    if (strs.length > 0) {
      for (let i = 0; ; i++) {
        const c = strs[0][i]
        if (!c) { return prefix }
        for (let j = 0; j < strs.length; j++) {
          if (strs[j][i] !== c) {
            return prefix
          }
        }
        prefix += c
      }
    }
    return prefix
  };