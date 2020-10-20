function textModifier(text, sign) {
    let result = '';
    let swappedText = text.split('').map(function (letter) {
        return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()}).join('');

    for (let i = 0; i < swappedText.length; i++) {
        if (swappedText[i] === 'z' && sign === +1) {
            result += 'a';
        } else if (swappedText[i] === 'Z' && sign === +1) {
            result += 'A';
        } else if (swappedText[i] === 'a' && sign === -1) {
                result += 'z';
        } else if (swappedText[i] === 'A' && sign === -1) {
                result += 'Z';
        } else {
            result += String.fromCharCode(swappedText.charCodeAt(i) + sign);
        }
    }
    return result;
}
function textEncryption(text) {
    return textModifier(text, +1);
}
function textDecryption(text) {
    return textModifier(text, -1);
}

console.log(textEncryption('bbbZzACCC'));
console.log(textDecryption('CCCaAbddd'));
