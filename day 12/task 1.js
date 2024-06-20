const moment = require('moment');

function timeDiff(timePast, timeFuture) {
    let timeFirst = moment(timePast, 'HH:mm').format('HH:mm');
    let timeLast = moment(timeFuture, 'HH:mm');
    return timeLast.subtract(timeFirst).format('HH:mm');

    // Old good ways
    // const past = timePast.split(':');
    // const future = timeFuture.split(':');
    // return ('0' + (future[0] - past[0])).slice(-2).toString() + ':' + ('0' + (future[1] - past[1])).slice(-2).toString();
}


console.log(timeDiff('01:30', '22:45'));
console.log(timeDiff('05:30', '05:35'));
