var strStr = function(s, w) {
    const lens = s.length
    const lenw = w.length
  
    const next = [-1]
    for (let i = 0, j = -1; i < lenw - 1;) {
      if (j === -1 || w[i] === w[j]) {
        if (w[++i] !== w[++j]) {
          next[i] = j
        } else {
          next[i] = next[j]
        }
      } else {
        j = next[j]
      }
    }
  
    let i = 0
    let j = 0
    while (i < lens && j < lenw) {
      if (j === -1 || s[i] === w[j]) {
        i += 1
        j += 1
      } else {
        j = next[j]
      }
    }
  
    return j >= lenw ? i - lenw : -1
  };