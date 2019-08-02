//349. Intersection of Two Arrays
//Given two arrays, write a function to compute their intersection.

const intersection = (nums1, nums2) =>{
    let set = new Set(num1);
    return [...new Set(nums2.filter(x => set.has(x)))];
}