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
