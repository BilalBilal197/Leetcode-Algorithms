var permuteUnique = function(nums) {
    const result = []
    _permuteUnique(nums, 0, result)
    return result
  };
  
  function _permuteUnique (nums, start, result) {
    if (start === nums.length) {
      result.push(nums.slice())
    }
  
    const used = new Set()
    const begin = nums[start]
    for (let i = start; i < nums.length; i++) {
      const next = nums[i]
  
      if (used.has(next)) {
        continue
      }
  
      used.add(next)
  
      nums[start] = next
      nums[i] = begin
  
      _permuteUnique(nums, start + 1, result)
  
      nums[start] = begin
      nums[i] = next
    }
  };