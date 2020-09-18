var longestValidParentheses = function(s) {
    const stack = [-1]
    let max = 0
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(i)
      } else {
        stack.pop() // This one is used to match the current ')'.
        if (stack.length > 0) {
          max =  Math.max(max, i - stack[stack.length - 1])
        } else {
          stack.push(i)
        }
      }
    }
  
    return max
  };