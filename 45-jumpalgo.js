var jump = function(nums) {
    const len = nums.length
    let jump = 0
    for (let l = 0, r = 1; r < len; jump++) {
      let rNext = r
      for (let i = l; i < r; i++) {
        const rNextAtmp = i + nums[i] + 1
        if (rNextAtmp > rNext) {
          rNext = rNextAtmp
        }
      }
      l = r
      r = rNext
    }
    return jump
  };