function calculateWordFrequency(text, repeatsMax) {
    const punctuation = /([^a-zA-Zа-яА-Я ]+)+/g;
    const modifiedTextArray = text.toLowerCase()
        .replace(punctuation, ' ')
        .trim()
        .split(/\s+/)
     // .reduce((map, word) =>   This looks cool but I don't understand how it works
     //         Object.assign(map, {
     //             [word]: (map[word]) ? map[word] + 1 : 1,
     //         }),
     //     {}
     // );

    const freqMap = {};
    modifiedTextArray.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0
        }
        freqMap[w] += 1;
    });

    for (const number in freqMap) {
        (freqMap[number] <= repeatsMax) && delete freqMap[number];
    }

    return freqMap;
}

console.log(calculateWordFrequency(' And we are here... Here - and We and Are: The end.', 2));
