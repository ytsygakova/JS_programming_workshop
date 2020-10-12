const username = 'YT';

function usersGreeting() {
    let hour = new Date().getHours();
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
