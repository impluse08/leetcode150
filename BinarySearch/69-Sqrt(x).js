/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 ) return 0
    let left = 1
    let right = x
    let res = -1
    while(right >= left){
        let mid = left + Math.floor((right - left)/2);
        if(mid * mid === x){
            return mid
        }else if(mid * mid > x){
            res = mid
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return res - 1
};