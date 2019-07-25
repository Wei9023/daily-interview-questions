//238. Product of Array Except Self
//Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

var productExceptSelf = function (nums){
    var results =[];
    var productSoFar = 1;

    for(let i =0; i<nums.length; i++){
        results[i] = productSoFar;
        productSoFar *= nums[i];
    }

    productSoFar = 1;
    for(let j=nums.length-1; j>=0; j--){
        results[j] *= productSoFar;
        productSoFar *= nums[j];
    }
    return results;
}