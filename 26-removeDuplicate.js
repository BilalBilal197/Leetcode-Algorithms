var removeDuplicates = function(nums) {
    let len = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i-1]) {
        nums[len++] = nums[i]
      }
    }
    return len
  };