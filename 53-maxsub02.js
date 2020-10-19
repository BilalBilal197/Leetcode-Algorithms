var maxSubArray = function(nums) {
    let dp = nums[0]
    let max = dp || 0
    for (let i = 1; i < nums.length; i++) {
      max = Math.max(max, dp = Math.max(dp, 0) + nums[i])
    }
    return max
  };