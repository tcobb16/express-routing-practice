function createCounter(arr) {
return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
}, {});
}


function findMode(arr) {
let freqCounter = createCounter(arr);

let count = 0;
let mostFrequent;

for (let key in freqCounter) {
    if (freqCounter[key] > count) {
    mostFrequent = key;
    count = freqCounter[key];
    }
}

return +mostFrequent;
}


function validateNumsArray(numsAsStrings) {
let result = [];

for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNum = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNum)) {
    return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
    );
    }

    result.push(valToNum);
}
return result;
}


function findMean(nums){
if(nums.length === 0) return 0;
return nums.reduce(function (acc, cur) {
    return acc + cur;
}) / nums.length
}

function findMedian(nums){

nums.sort((a, b) => a - b);

let middleIndex = Math.floor(nums.length / 2);
let median;

if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
} else {
    median = nums[middleIndex];
}
return median
}



module.exports = {
createCounter,
findMean,
findMedian,
findMode,
validateNumsArray
};