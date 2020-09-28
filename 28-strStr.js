var strStr = function(haystack, needle) {
    const len = haystack.length - needle.length + 1
    for (let i = 0; i < len; i += 1) {
      let j, k
      for (j = i, k = 0; k < needle.length; j += 1, k += 1) {
        if (haystack[j] !== needle[k]) {
          break
        }
      }
      if (k === needle.length) {
        return i
      }
    }
    return -1
  };