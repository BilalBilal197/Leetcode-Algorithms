var trap = function(height) {
    let i = 0
    let j = height.length - 1
    let lMax = 0
    let rMax = 0
    let result = 0
  
    while (i < j) {
      const left = height[i]
      const right = height[j]
      if (left < right) {
        if (left < lMax) {
          result += lMax - left
        } else {
          lMax = left
        }
        i++
      } else {
        if (right < rMax) {
          result += rMax - right
        } else {
          rMax = right
        }
        j--
      }
    }
  
    return result
  };