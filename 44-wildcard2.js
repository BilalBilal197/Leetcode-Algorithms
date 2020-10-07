var isMatch = function(s, p) {
    const lens = s.length
    const lenp = p.length
    let i = 0
    let j = 0
    let iLast = -1
    let jLast = -1
  
    while (i < lens) {
      if (j < lenp && p[j] === '*') {
        iLast = i
        jLast = j++
      } else if (j < lenp && (p[j] === '?' || p[j] === s[i])) {
        i++
        j++
      } else if (jLast !== -1) {
        j = jLast + 1
        i = ++iLast
      } else {
        return false
      }
    }
  
    while (j < lenp && p[j] === '*') {
      j++
    }
  
    return j === lenp
  };