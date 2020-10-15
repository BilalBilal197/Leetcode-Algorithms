var groupAnagrams = function(strs) {
    let result = {};
    for (let i = 0; i < strs.length; i++) {
      const hash = strs[i].split('').sort().join('');
      result[hash] = result[hash] || []
      result[hash].push(strs[i])
    }
    return Object.values(result)
  };