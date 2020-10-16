function arrayContainsSum(array, sum) {
   for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length); j++){
            if ((array[i] !== array[j])) {
                return array[i] + array[j] === sum;
            }
        }
    }
}

console.log(arrayContainsSum([1, 2, 3, 4, 152], 33333));
