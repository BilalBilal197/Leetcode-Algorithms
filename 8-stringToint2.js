var myAtoi = function (str) {
    return Math.min(2147483647, Math.max(-2147483648, (/^ *[-+]?\d+/.exec(str) || [0])[0]))
  };