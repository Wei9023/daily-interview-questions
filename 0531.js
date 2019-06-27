'use strict';

const findNum = (arr, k) =>{
    let res = false;
    for (let i = 0; i< arr.length; i++){
        for(let j = 1;j <arr.length; j++){
            if(arr[i] + arr[j]=k){
                res =true;
            }
        }
    }
    return res;
}

module.exports = {findNum};