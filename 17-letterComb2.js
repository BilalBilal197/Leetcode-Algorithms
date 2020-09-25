var letterCombinations = function(digits) {
    const letters = [,, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const result = []
    if (digits.length > 0) {
      dfs(digits, 0, '', letters, result)
    }
    return result
  };
  
  function dfs (digits, idigit, path, letters, result) {
    if (idigit >= digits.length) {
      result.push(path)
      return
    }
    const str = letters[digits[idigit]]
    for (let i = 0; i < str.length; i++) {
      dfs(digits, idigit + 1, path + str[i], letters, result)
    }
  };