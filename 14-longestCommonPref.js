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