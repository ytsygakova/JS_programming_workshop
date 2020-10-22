function binaryConversion(num){
    let bin = [];
    while (num > 0) {
        bin[bin.length] = num % 2;
        num >>= 1;
    }

    return bin.reverse().join('');
}


console.log(binaryConversion(10));


// Another option
//
// while (num > 0) {
//
//     if (num % 2 === 1) {
//
//         bin.splice(0,0,1);
//         num = (num - 1) / 2;
//
//     } else {
//
//         bin.splice(0,0,0);
//         num /= 2;
//     }
// }
