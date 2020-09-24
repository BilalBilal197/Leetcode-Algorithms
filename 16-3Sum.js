var threeSumClosest = function(nums, target) {
    const len = nums.length
    const sorted = nums.sort((a, b) => a - b)
  
    let minDiff = Infinity
  
    for (let i = 0; i < len - 2; i++) {
      if (i > 0 && sorted[i] === sorted[i-1]) {
        continue
      }
  
      const twoSum = target - sorted[i]
  
      for (let l = i + 1, r = len - 1; l < r;) {
        const diff = twoSum - sorted[l] - sorted[r]
        if (diff === 0) {
          return target
        } else {
          if (diff > 0) {
            l++
          } else {
            r--
          }
  
          if (Math.abs(diff) < Math.abs(minDiff)) {
            minDiff = diff
          }
        }
      }
    }
  
    return target - minDiff
  };