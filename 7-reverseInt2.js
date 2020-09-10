var reverse = function(num) {
    let result = 0
    while (num) {
      result = result * 10 + num % 10
      num = num / 10 | 0
    }
    if (Math.abs(result) > 2147483647) 
        return  0;
    else
        return result
  };