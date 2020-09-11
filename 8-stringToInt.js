var myAtoi = function (str) {
    return Math.min(2147483647, Math.max(-2147483648, parseInt(str))) || 0
  };