const moment = require('moment');

function timeDiff(timePast, timeFuture){
    let timeFirst = moment(timePast, 'HH:mm').format('HH:mm');
    let timeLast = moment(timeFuture, 'HH:mm');

    return timeLast.subtract(timeFirst).format('HH:mm');
}


console.log(timeDiff('05:30', '05:35'));
