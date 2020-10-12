const username = 'YT';

function usersGreeting() {
    let time = new Date().getHours();
    switch (true) {
        case 0 <= time && time < 5:
            return console.log('Good night, ' + username);
        case 5 <= time && time < 10:
            return console.log('Good morning, ' + username);
        case 10 <= time && time < 17:
            return console.log('Good afternoon, ' + username);
        case 17 <= time && time < 0:
            return console.log('Good evening, ' + username);
    }
}

usersGreeting();
