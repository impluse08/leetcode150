/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(nums[mid] === target){
            return true
        }

        if(nums[mid] === nums[left] && nums[right] === nums[mid]){
            left++
            right--
        }else if(nums[left] <= nums[mid]){
            if(nums[left] <= target && nums[mid] > target){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }else{
            if(nums[right] >= target && nums[mid] < target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }

    }
    return false
};