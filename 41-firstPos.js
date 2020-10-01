var firstMissingPositive = function(nums) {
    const n = nums.length
  
    for (let i = 1; i < n; i++) {
      while (nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
        const t = nums[i]
        nums[i] = nums[t - 1]
        nums[t - 1] = t
      }
    }
  
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1
      }
    }
  
    return n + 1
  };