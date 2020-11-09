var fourSum = function(nums, target) {
    const len = nums.length
    const sorted = nums.sort((a, b) => a - b)
    const result = []
  
    for (let k = 0; k < len - 3; k++) {
      if (k > 0 && sorted[k] === sorted[k-1]) {
        continue
      }
  
      const threeSum = target - sorted[k]
  
      for (let i = k+1; i < len - 2; i++) {
        if (i > k+1 && sorted[i] === sorted[i-1]) {
          continue
        }
  
        const twoSum = threeSum - sorted[i]
  
        for (let l = i + 1, r = len - 1; l < r;) {
          const diff = twoSum - sorted[l] - sorted[r]
          if (diff > 0) {
            l++
          } else if (diff < 0) {
            r--
          } else {
            result.push([sorted[k], sorted[i], sorted[l], sorted[r]])
            while (++l < r && sorted[l] === sorted[l - 1]);
            while (--r > l && sorted[r] === sorted[r + 1]);
          }
        }
      }
    }
  
    return result
  };