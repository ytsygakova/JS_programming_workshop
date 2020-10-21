const databaseJsonFile = require('./users_ds.json');

const operators = {
    '=': function (a, b) {
        return a === b
    },
    '>': function (a, b) {
        return a > b
    },
    '<=': function (a, b) {
        return a <= b
    },
};

let result = [];

function readDb(field, condition, value) {
    for (let i = 0; i < databaseJsonFile.length; i++) {
        if (field === 'country' && operators[condition](databaseJsonFile[i].country, value)) {
            result.push(databaseJsonFile[i]);
        } else if (field === 'age' && operators[condition](databaseJsonFile[i].age, value)) {
            result.push(databaseJsonFile[i]);
        } else if (field === 'teens' && databaseJsonFile[i].is_teen === true) {
            result.push(databaseJsonFile[i]);
        } else if (field === 'legal age') {
            if (databaseJsonFile[i].country === 'Russia' && databaseJsonFile[i].age >= 18) {
                result.push(databaseJsonFile[i]);
            } else if ((databaseJsonFile[i].country === 'Japan' || databaseJsonFile[i].country === 'Thailand')
                && databaseJsonFile[i].age >= 20) {
                result.push(databaseJsonFile[i]);
            } else if (databaseJsonFile[i].country === 'USA' && databaseJsonFile[i].age >= 21) {
                result.push(databaseJsonFile[i]);
            }
        } else if (field === 'incorrect records') {
            if (databaseJsonFile[i].country === 'Russia'
                && databaseJsonFile[i].age >= 18
                && databaseJsonFile[i].is_teen === true) {
                result.push(databaseJsonFile[i]);
            } else if ((databaseJsonFile[i].country === 'Japan'
                || databaseJsonFile[i].country === 'Thailand')
                && databaseJsonFile[i].age >= 20
                && databaseJsonFile[i].is_teen === true) {
                result.push(databaseJsonFile[i]);
            } else if (databaseJsonFile[i].country === 'USA'
                && databaseJsonFile[i].age >= 21
                && databaseJsonFile[i].is_teen === true) {
                result.push(databaseJsonFile[i]);
            }
            else if (databaseJsonFile[i].country === 'Russia'
                && databaseJsonFile[i].age < 18
                && databaseJsonFile[i].is_teen === false) {
                result.push(databaseJsonFile[i]);
            } else if ((databaseJsonFile[i].country === 'Japan'
                || databaseJsonFile[i].country === 'Thailand')
                && databaseJsonFile[i].age < 20
                && databaseJsonFile[i].is_teen === false) {
                result.push(databaseJsonFile[i]);
            } else if (databaseJsonFile[i].country === 'USA'
                && databaseJsonFile[i].age < 21
                && databaseJsonFile[i].is_teen === false) {
                result.push(databaseJsonFile[i]);
            }
        }

    }
    return result;
}

function usersFromCountry(country) {
    return readDb('country', '=', country);
}

function usersOfAge(age) {
    return readDb('age', '=', age);
}

function usersOlder(age) {
    return readDb('age', '>', age);
}

function usersYounger(age) {
    return readDb('age', '<=', age);
}

function usersTeen(age) {
    return readDb('teens');
}

function usersOfLegalAge() {
    return readDb('legal age');
}

function usersIncorrectRecords() {
    return readDb('incorrect records');
}

console.log(usersFromCountry('USA')); // 6 +
console.log(usersOfAge(91)); // 1 +
console.log(usersOlder('45')); // 2 +
console.log(usersYounger('11')); // 3 +
console.log(usersTeen()); // 9 +
console.log(usersOfLegalAge()); // 2+7+1+3=13 +
console.log(usersIncorrectRecords()); // 8 +
