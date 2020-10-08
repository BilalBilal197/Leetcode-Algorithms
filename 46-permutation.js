var permute = function(nums) {
    const result = []
    _permute(nums, 0, result)
    return result
  };
  
  function _permute (nums, start, result) {
    if (start === nums.length) {
      return result.push(nums.slice())
    }
  
    const begin = nums[start]
    for (let i = start; i < nums.length; i++) {
      const next = nums[i]
  
      nums[start] = next
      nums[i] = begin
  
      _permute(nums, start + 1, result)
  
      nums[start] = begin
      nums[i] = next
    }
  };