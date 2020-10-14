function textAnalysis(text, maxLength) {
    console.log('text length: ' + text.length);
    console.log('text length w/o spaces: ' + text.replace(/\s+/g, '').length);
    (text.length % 2) ? console.log('text length is odd') : console.log('text length is even');
    (text.length > maxLength) && console.log(`text is longer than ${maxLength}`);
}

textAnalysis('s s s  ', 0);
