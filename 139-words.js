var wordBreak = function(s, wordDict) { // s = "leetcode" wordDict = ["leet", "code"]
    
    let s3 = '';
                                        //    v
    for(let i = 0; i < s.length; i++){ // "aaaaaaa"
        s3 += s[i]                          // ""
        if (wordDict.includes(s3)){
            s3 = ''    
        }
        console.log(s3)
        
    }
    console.log(s3)
    if(s3.length !== 0){
            return false
        }
    console.log(s3)
    return true
    
};