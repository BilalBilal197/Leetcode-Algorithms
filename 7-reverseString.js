var reverse = function(x) {
    let n = Math.abs(x).toString().split('').reverse().join('')
    if (n > 2147483647) { return 0 }
    return (x < 0? -1: 1) * n
  };