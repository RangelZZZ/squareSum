'use strict';

function findOddArray(array){
    const oddArray =[];
    for(const number of array){
        if(number%2 === 1){
            oddArray.push(number);
        }
    }
    return oddArray;
}


function  generateOddSumArray(oddArray){
    const oddSumArray  =[];
    for(const subSum of oddArray){
        oddSumArray.push(subSum*subSum);
    }
    return oddSumArray;

}

function calculateSum(oddSumArray){
    let sum =0;
    for(let subSum of oddSumArray){
        sum +=subSum;
    }
    return sum;
}

function printSum(sum){
    console.log(sum);
}

module.exports = {
    findOddArray:findOddArray,
    generateOddSumArray: generateOddSumArray,
    calculateSum:calculateSum,
    printSum:printSum
}