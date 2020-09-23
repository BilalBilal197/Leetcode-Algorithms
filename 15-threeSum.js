var threeSum = function (nums) {
    const len = nums.length
    const sorted = nums.sort((a, b) => a - b)
    const result = []
  
    if (sorted[0] > 0 || sorted[len-1] < 0) {
      return result
    }
  
    for (let i = 0; i < len - 2; i++) {
      if (sorted[i] > 0) {
        break
      }
  
      if (i > 0 && sorted[i] === sorted[i-1]) {
        continue
      }
  
      const twoSum = 0 - sorted[i]
  
      for (let l = i + 1, r = len - 1; l < r;) {
        const diff = twoSum - sorted[l] - sorted[r]
        if (diff > 0) {
          l++
        } else if (diff < 0) {
          r--
        } else {
          result.push([sorted[i], sorted[l], sorted[r]])
          while (++l < r && sorted[l] === sorted[l - 1]);
          while (--r > l && sorted[r] === sorted[r + 1]);
        }
      }
    }
  
    return result
  };