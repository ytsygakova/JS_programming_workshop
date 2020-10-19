function arrayContainsSumUpgrade(array, sum) {

    let numObject = array.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = currentValue;
        return accumulator;
    }, {});

    // Same thing with a loop
    //
    // let numObject = {};
    //
    // for (let i = 0; i < array.length; i++) {
    //     let thisNum = array[i];
    //     numObject[thisNum] = i;
    // }

    for (let i = 0; i < array.length; i++) {
        let diff = sum - array[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return true;
        }
    }
    return false;
}

console.log(arrayContainsSumUpgrade([1, 2, 3, 4, 152], 9999));

