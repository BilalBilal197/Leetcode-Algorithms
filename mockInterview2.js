There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.
Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
Initially, all the rooms start locked (except for room 0).
You can walk back and forth between rooms freely.
Return true if and only if you can enter every room.
Example 1:
Input: [[1],[2],[3],[]] 
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.
Example 2:     
Input= [[3],[1],[2],[0,1]] 
Output: false
Explanation: We can't enter the room with number 2 in it





















[[1,2,3],[],[],[]] 

Let rooms = function(arr){
	
	Let indexArr = []

	Let j = 0

	Let i = 0

	while(indexArr.length < arr.length){
		
	 //
	If (!indexArr.includes(arr[i][0])){
		indexArr.push(arr[i][0]) //[1]

i = arr[i][0] 

// return false in case of infinite loop

If (j > arr.length)){
Return false
}

j++
}


	Return true
}


}














[[1,2,3],[],[],[]] 
const roomsAndKeys = (arr) =>{
	let keys = [arr[0]]  //[]
	let roomsEntered = new Set.add(0) //{0,1,2,3}
	while(keys.length !==0){
		let currentRoomKeys = keys.pop() //[]
		currentRoomKeys.forEach(key =>{
			if(!roomsEntered.has(key)){
				roomsEntered.add(key)
				keys.push(arr[key])
}
})
}

return roomsEntered.size === arr.length
	


} 
