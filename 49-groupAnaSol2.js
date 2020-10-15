var groupAnagrams = function(strs) {
    const result = {};
    for (let i = 0; i < strs.length; i++) {
      const word = strs[i]
      let hash = 1
      for (let k = 0; k < word.length; k++) {
        hash *= prime[word.charCodeAt(k) - 97]
      }
      result[hash] = result[hash] || []
      result[hash].push(word)
    }
    return Object.values(result)
  };