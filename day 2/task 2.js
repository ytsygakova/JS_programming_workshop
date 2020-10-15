function textAnalysis(text, maxLength, forbiddenWords) {

    // Attempt to solve with filter and map
    //
    // let match = text.split(' ').filter(elem =>
    //     forbiddenWords.includes(elem));
    //
    // const pureText = forbiddenWords.forEach((item)=> {
    //     text = item.split("").map(()=>'***').join("");
    // });


    // Attempt to solve with replaceAll
    //
    // String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }


    // Attempt to solve with forEach
    //
    // console.log(forbiddenWords.forEach(word => text.toLowerCase().split(word.toLowerCase()).join('***')));


    let pureText = text;
    for (let i = 0; i < forbiddenWords.length; i++) {
        pureText = pureText.replace(new RegExp(forbiddenWords[i], "ig"), '***');
    }

    const pureShortText =
        (maxLength < text.length) ?
            (text.substr(0, maxLength) + '...') : text;

    return `{"length": "${text.length}",
    "pure_length": "${text.replace(/\s+/g, '').length}",
    "origin_text": "${text}",
    "pure_text": "${pureText}",
    "pure_short_text": "${pureShortText}"}`;
}

console.log(textAnalysis('I have one apple and TWO hands so I want tWo apples', 30, ['one', 'tWo']));
