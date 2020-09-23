var isMatch = function(s, p) {
    if (p[0] === '*') { return false }
    return new RegExp(`^${p}$`).test(s)
  };