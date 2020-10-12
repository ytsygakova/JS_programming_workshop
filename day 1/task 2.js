const axios = require('axios');
const moment = require('moment');

const username = 'YT';

function axiosDateTime() {
    axios.get('http://worldtimeapi.org/api/timezone/America/New_York')
        .then(function (response) {
            return response.data.datetime;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function usersGreeting() {
    let hour = moment(axiosDateTime()).format('H');
    switch (true) {
        case 0 <= hour && hour < 5:
            return console.log('Good night, ' + username);
        case 5 <= hour && hour < 10:
            return console.log('Good morning, ' + username);
        case 10 <= hour && hour < 17:
            return console.log('Good afternoon, ' + username);
        case 17 <= hour && hour < 24:
            return console.log('Good evening, ' + username);
    }
}

usersGreeting();
