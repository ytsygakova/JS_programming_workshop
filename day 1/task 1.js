const username = 'YT';

function usersGreeting() {
    let time = new Date().getHours();
    console.log(time);
    switch (true) {
        case 0 <= time < 5:
            return console.log('Good night, ' + username);
        case 5 <= time < 10:
            return console.log('Good morning, ' + username);
        case 10 <= time < 17:
            return console.log('Good afternoon, ' + username);
        case 17 <= time < 0:
            return console.log('Good evening, ' + username);
    }
}

usersGreeting();
