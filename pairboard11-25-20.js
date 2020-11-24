Given an array of positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.
 
Note that you have access to an unlimited amount of coins. In other words, if the denominations are [1, 5, 10], you have access to an unlimited amount of 1s, 5s, and 10s.
 
If it's impossible to make change for the target amount, return -1.
 
Sample Input:
const n = 7
const denoms = [1, 5, 10]
 
Sample Output: 3
 
Time Complexity - O(n * d)
Space Complexity - O(n)


# sudo code

1 - define a function that takes in a sum of money - 7 , 8 

2 - define output counter =  -1  

3 - go through array and check if input is smaller than element - iterate to next element

4 - two variable - one variable store output count - other variable will store remainder of input

5 - if the input is 0  then return output counter




# code

Const function = currencyCounter (input, array){


If (input == 0) {

Return -1
} 
#  input = 7, arr = [1,5,10]

Let outputCounter = 0;

while(input != 0){ // false 
for( let i = arr.length - 1; i < arr.length; i--){     // n = 7 

if( arr[i] <= input) {		// 1  true

Input = (input % arr[i])    //  1 % 1 = 0

outputCounter ++;  //   3  

}
}


}

If (input == 0) { ///
Return outputCounter   // 3
}

If (input != 0){

Return	- 1
}



}




Time O n2   space O
