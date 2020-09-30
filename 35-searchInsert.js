var searchInsert = function(nums, target) {
    let s = 0
    let e = nums.length - 1
  
    while (s <= e) {
      const p = (s + e) / 2 | 0
      const diff = nums[p] - target
      if (diff === 0) {
        return p
      } else if (diff < 0) {
        s = p + 1
      } else {
        e = p - 1
      }
    }
  
    return s
  };