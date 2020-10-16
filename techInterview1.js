Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.
Return the minimum size of the set so that at least half of the integers of the array are removed.
https://leetcode.com/problems/reduce-array-size-to-the-half/
Input: arr = [3,5,5,5,2,2,7,7,7,7]
Output: 2
[1,2,3,4,5,6,7,8]
Output = 4
[1]

1 - initialize a object  { 3: 1, 5: 3, 2: 2, 7: 4}
2 - count values element of object -
3 - start with greatest values subtract it from total of or sum values in object - arry length - 
4 - if greater than half then subtract second largest occurrences from object 
5 - I put the element that has been accounted for into the set 
6 - count values element reaches half of less of array length - stop & return the length of set 



Function minSet(arr){

Let objnum = {}

for (let i = 0; i< arr.length; i++){

	if(objnum.includes(arr[i])?){
objnum[arr[i]]+= 1   

}else {
Objnum[arr[i]] = 1;
}

	

}

Let counter = 0;

Let totalOccur = objnum.values Object.values(objnum)

Let sortedArr = totalOccur.sort((a,b)=>{a-b}) - nlogn

Let updatedLength = arr.length

[1,3,2,4,2]

[nul, 1, 0, 0, 0]*****
Let j = sortedArr.length - 1;

while(updatedLength > (arr.length)/2){

updatedLength = updatedLength - sortedArr[j]

 	
 	j--;

Counter ++;


}


Return counter;
}




Time complexity =  O(n) - n logn

Space complexity = O(n)
