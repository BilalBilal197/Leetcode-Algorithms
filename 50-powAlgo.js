ar myPow = function(x, n) {
    if (n === 0) { return 1 }
    if (n === 1) { return x }
    if (n === -1) { return 1 / x }
    if (n % 2 === 0) {
      const res = myPow(x, n / 2)
      return res * res
    }
    const res = myPow(x, (n - 1) / 2)
    return x * res * res
  };