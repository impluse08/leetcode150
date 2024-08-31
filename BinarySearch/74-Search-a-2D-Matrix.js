/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(arr, low, high, x){
    if(high >=  low){
        let mid = low + Math.floor((high - low)/2)
        if(arr[mid] === x){
            return true;
        }else if(arr[mid] > x){
            return binarySearch(arr, low, mid-1, x)
        }else{
            return binarySearch(arr, mid+1, high, x)
        }
    }
    return false
}
var searchMatrix = function(matrix, target) {
    matrix = [].concat(...matrix);
    return binarySearch(matrix, 0, matrix.length - 1, target)
};