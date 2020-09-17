var romanToInt = function (s) {
    const rdigit = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }
  
    let result = 0
    for (let i = 0, lastDigit = Infinity; i < s.length; i++) {
      let digit = rdigit[s[i]]
      result += digit <= lastDigit ? digit : digit - lastDigit * 2
      lastDigit = digit
    }
    return result
  };