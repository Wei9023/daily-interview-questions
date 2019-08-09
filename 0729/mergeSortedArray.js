//Merge Sorted Array
//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

var merge = function(nums1, m, nums2, n){
    m--;
    n--;
    for(let k = nums1.length-1; k >=0; k--){
        if(m>=0 && n>=0){
            if(nums1[m] >= nums2[n]){
                nums1[k] = nums1[m];
                m--;
            } else {
                nums1[k] = nums2[n];
                n--;
            }
        } else if(m<0 && n>=0){
            nums1[k] = nums2[n];
            n--;
        }
    }
}