//350. Intersection of Two Arrays II
//
// Given two arrays, write a function to compute their intersection.

const intersection = (nums1, nums2) =>{
    let obj = {};
    let result = [];
    for(let i of nums1){
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }

    for(let j of nums2){
        if(obj[j]){
            obj[j]--;
            result.push(j);
        }
    }
    return result;
}