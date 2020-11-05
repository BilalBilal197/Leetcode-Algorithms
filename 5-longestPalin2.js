var longestPalindrome = function(s) {
    if (s.length <= 1) { return s }
  
    const arr = [NaN, null]
    for (let i = 0; i < s.length; i++) {
      arr.push(s[i], null)
    }
    arr.push(null, NaN)
  
    const lens = new Array(arr.length).fill(0)
    let iMax = 1
    let iCenter = 1
    for (let i = 2; i < arr.length; i++) {
      if (arr.length - i - 1 < lens[iMax]) { break }
  
      if (i - iCenter <= lens[iCenter]) {
        lens[i] = Math.min(lens[iCenter] - (i - iCenter), lens[iCenter - (i - iCenter)])
      }
  
      while (arr[i + lens[i] + 1] === arr[i - lens[i] - 1]) {
        lens[i]++
      }
  
      if (i + lens[i] > iCenter + lens[iCenter]) {
        iCenter = i
      }
  
      if (lens[i] > lens[iMax]) {
        iMax = i
      }
    }
  
    return arr.slice(iMax - lens[iMax], iMax + lens[iMax] + 1).join('')
  };