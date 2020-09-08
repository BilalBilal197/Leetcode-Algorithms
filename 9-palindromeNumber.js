var palindrome = function(x) {
    const str = String(x)
    for (let i = 0, j = str.length -1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return false
      }
    }
    return true
  };