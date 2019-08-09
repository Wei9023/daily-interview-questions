//167. Two Sum II - Input array is sorted
//Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

const twoSum = (numbers, target) =>{
    let l = numbers.length;
    let i = 0;
    let j = l-1;
    while(numbers[i] + numbers[j] !== target){
        numbers[i] + numbers[j] > target ? j-- : i++;
    }
    return [i+1, j+1];
}