function arrayContainsSum(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length); j++) {
            if ((i !== j) && (array[i] + array[j] === sum)) {
                return  true;
            }
        }
    }
    return false;
}

console.log(arrayContainsSum([1, 2, 3, 4, 152], 887));


// let result = function(nums, k) {
//     return nums.some((n1, i, arr) => arr.some((n2, j) => i !== j && n1 + n2 === k));
// };
