function trueFalse(array){

    function thirteen (num) {
        return num === 13;
    }

    function fortyOne (num) {
        return num === 41;
    }

    return !!(array.find(thirteen) && array.find(fortyOne));
}


console.log(trueFalse([1,3,13,150,41]));
