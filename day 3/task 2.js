function calculateWordFrequency(text, repeatsMax) {
    const punctuation = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    const newDataArray = text.toLowerCase()
        .replace(punctuation, ',')
        .split(/[\s,]+/)
     // .reduce((map, word) =>   This looks cool but I don't understand how it works
     //         Object.assign(map, {
     //             [word]: (map[word]) ? map[word] + 1 : 1,
     //         }),
     //     {}
     // );

    const freqMap = {};
    newDataArray.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    for (const number in freqMap) {
        (freqMap[number] <= repeatsMax || number === '') && delete freqMap[number];
    }

    return freqMap;
}

console.log(calculateWordFrequency(' And we are here... Here - and We and Are: The end.', 2));
