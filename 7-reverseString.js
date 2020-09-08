var reverseString = function(x) {
    let num = Math.abs(x).toString().split('').reverse().join('')

    if (x < 0)
    return num * -1
    else
    return num  

  };