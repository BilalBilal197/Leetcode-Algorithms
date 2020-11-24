var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++
        return digits
      }
      digits[i] = 0
    }
  
    for (let i = digits.length; i > 0; i--) {
      digits[i] = digits[i-1]
    }
    digits[0] = 1
    
    return digits
  };














#########################################

Example 3:
Input: digits = [0]
Output: [1]
// input is going to be an array
// output is going to be an array
// one for loop iterating through digits
// if the last digit is a “9”, carry the one over to the left

Function incrementByOne(digits) {
	For (let i = digits.length - 1; i <= 1; i--)
		Let currentDigit = digits[i];
		Let nextDigit = digits[i - 1];

		If (i === digits.length - 1 && currentDigit === 9) { 
	currentDigit = 0;
	nextDigit = nextDigit + 1;
} else if (i === digits.length - 1 && currentDigit !== 9) {
	currentDigit = currentDigit + 1;
	Return digits;
}

If (currentDigit === 10) {
	currentDigit = 0;
	nextDigit = nextDigit + 1;
}

}

If (digits[0] === 10) {
currentDigit = 0;
digits.shift(1);
}

	Return digits;
}

Space Complexity = O(n), where n is the length of the digits array
Time Complexity = O(1), no extra space was created in memory
