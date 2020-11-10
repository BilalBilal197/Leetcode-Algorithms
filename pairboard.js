Sudocode

1 - declare a function for peak
2 - declare a variable to store the final length of peak as well as a counter to increment the length of peak
3 - begin iterating the array 
4 - check if left and right element of my current index element is lower than 
5 - if this condition is fulfilled then it is a peak - we set the counter to 3
6 - to check peak with longest length - if left/right element is lower - we will check the element on left/right of the element - this condition is true - we increment the counter
7 - check the counter and compare it with final peak length variable if counter is bigger - then we change the peak length to counter’s length
8 - return final peak 


function peakLength(arr){  		//
Let peakLn = 0;

for( let i = 1; i < arr.length - 1; i++){
	Let lengthCounter = 0;
 	if( (arr[i-1] < arr[i]) | && (arr[i + 1] < arr[i]  ) {

	lengthCounter = 3;
}

Let j = 2;

While (  (i - j) > 0 ) {

if( (arr[i - j ] < arr[i - j + 1]) ){
	lengthCounter += 1;
	J++;
	
} else {
	break;
}

 j = 2;

}

While ( (i + j) < arr.length) {

if( arr [i + j] < arr[i + j - 1] )){
	lengthCounter += 1;
	j++;
} else {
	break;
}


}






peakLn < lengthCounter ?  (peakLn = lengthCounter) : peakLn


}



Return peakLn;
