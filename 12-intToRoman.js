var intToRoman = function(num) {
    const e = [1000, 900,  500, 400,  100, 90,   50,  40,   10,  9,    5,   4,    1  ]
    const s = ["M",  "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  
    let result = ''
    for (let i = 0; num; i++) {
      const d = e[i]
      const v = s[i]
      while (num >= d) {
        num -= d
        result += v
      }
    }
    return result
  };