var multiply = function(num1, num2) {
    const result = []
  
    for (i = num1.length - 1; i >= 0; i--) {
      for (j = num2.length - 1; j >= 0; j--) {
        const sum = num1[i] * num2[j] + (result[i+j+1] || 0)
        result[i+j] = (sum / 10 | 0) + (result[i+j] || 0)
        result[i+j+1] = sum % 10
      }
    }
  
    return result.join('').replace(/^0+(?=[0-9])/, '')
  };