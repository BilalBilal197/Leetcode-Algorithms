var letterCombinations = function(digits) {
    if (digits.length <= 0) { return [] }
  
    const letters = [
      ,
      ,
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
      ['j', 'k', 'l'],
      ['m', 'n', 'o'],
      ['p', 'q', 'r', 's'],
      ['t', 'u', 'v'],
      ['w', 'x', 'y', 'z'],
    ]
  
    let result = ['']
  
    for (let i = 0; i < digits.length; i++) {
      const arr = letters[digits[i]]
      let newResult = []
      arr.forEach(c => newResult.push(...result.map(r => r + c)))
      result = newResult
    }
  
    return result
  };