//283. Move Zeroes
//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeros = (nums)=>{
    let len = nums.length;
    for(let i =0; i < len;){
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
            len--;
        } else i++;
    }
}