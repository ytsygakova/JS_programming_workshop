function arrayContainsSumUpgrade(array, sum) {
    for (let i = 0; i < array.length; i++) {
        if (array.some(currentValue => currentValue === sum - array[i])){
            return true
        }
    }
    return false;
}

console.log(arrayContainsSumUpgrade([1, 2, 3, 4, 152], 155));

