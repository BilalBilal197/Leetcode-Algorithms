var isValid = function(s) {
    const stack = []
    const pairs = {
      '}': '{',
      ']': '[',
      ')': '(',
    }
    for (const c of s) {
      const open = pairs[c]
      if (open) {
        if (stack.pop() !== open) {
          return false
        }
      } else {
        stack.push(c)
      }
    }
    return stack.length <= 0
  };