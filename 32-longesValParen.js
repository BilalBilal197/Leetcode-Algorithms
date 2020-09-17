var longestValidParentheses = function(s) {
    let dp = [0]
    for (let i = 1; i < s.length; i++) {
      dp[i] = s[i] === ')' && s[i - dp[i-1] - 1] === '('
        ? dp[i-1] + 2 + (dp[i - dp[i-1] - 2] || 0)
        : 0
    }
    return Math.max(...dp)
  };