//33. Search in Rotated Sorted Array
//Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

var search = function (nums, target){
    var low =0;
    var high= nums.length-1;
    while(low<high){
        var mid = ((high-low)/2)+low;
        var descendingCondition = target >=nums[mid] || target <=nums[high];
        var ascendingCondition = target >= nums[mid] && target <= nums[high];
        var isRight = nums[high] <= nums[mid] ? descendingCondition : ascendingCondition;

        if(nums[mid] === target){
            return mid;
        }else if(isRight){
           low =  mid + 1;
        }else {
            high = mid-1;
        }
        
    }
    return -1;
}