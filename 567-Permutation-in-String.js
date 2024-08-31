/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    let strMap = new Map() // Creating a Map for S1
    for(let s of s1){
        strMap.set(s, 1 + (strMap.get(s) || 0))
    }
    let left = 0;  // Left Pointer
    let count = strMap.size
    for(let right = 0; right < s2.length; right++){
        let char = s2[right];
        if(strMap.has(char)){
            strMap.set(char, (strMap.get(char) - 1))
            if(strMap.get(char) === 0){
                count--
            }
        }
        while(count === 0){
            if(right - left + 1 === s1.length){
                return true
            }
            let leftChar = s2[left];
            if(strMap.has(leftChar)){
                strMap.set(leftChar, strMap.get(leftChar) + 1)
                if(strMap.get(leftChar) > 0){
                    count++
                }
            }
            left++
        }
    }
    return false
};