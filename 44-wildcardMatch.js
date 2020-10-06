var isMatch = function(s, p) {
  const dp = [new Array(p.length + 1).fill(false)]
  dp[0][0] = true
  for (let j = 1; j <= p.length; j++) {
    if (p[j-1] === '*') {
      dp[0][j] = true
    } else {
      break
    }
  }

  for (let i = 1; i <= s.length; i++) {
    dp[i] = [false]
    for (let j = 1; j <= p.length; j++) {
      if (p[j-1] === '*') {
        dp[i][j] = dp[i][j-1] || dp[i-1][j]
      } else {
        dp[i][j] = dp[i-1][j-1] && (p[j-1] === '?' || s[i-1] === p[j-1])
      }
    }
  }

  return dp[s.length][p.length]
};