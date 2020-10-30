function helper(str, maxLen, end) {
    if (str.length < maxLen) {
        return str
    }

    let split = str.split(' ');
    let newStr = '';

    for (let i = 0; i < split.length; i++) {
        if (newStr.length > maxLen) {
            break
        }
        newStr += split[i];
    }
    newStr += end;
    return newStr
}

console.log(helper('never never never say never', 10, ' <- doesn\'t fit'));
