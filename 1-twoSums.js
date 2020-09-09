var twoSum = function(nums, target) {
    const indicies = {}
    
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (indicies[target - num] != null) {
        return [indicies[target - num], i]
      }
      indicies[num] = i
    }
  };