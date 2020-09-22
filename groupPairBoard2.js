

var anagram = function(str){


    let outArr = []

    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length; j++){

        let obj1 = Object.create(str[i])
        let obj2 = Object.create(str[j])

            let arr = [str[i]]

            let arrCmp = []

        while (obj1 == obj2) {
                arr.push[str[j]]
                delete str[j]
            }    
           
       }
       outArr.push(arr);

    }

    return outArr


}