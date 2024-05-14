function distributedConsoleLogs() {
    const numberOfSources = 5000;

    for (let i = 1; i <= numberOfSources; i++) {
        setTimeout(() => {
            setInterval(() => {
                console.log(`this is basic version if you want the normal version check it out #${i}!`);
            }, 0.1);
        }, i * 0.1);
    }
}

distributedConsoleLogs();

// paste this in someone's console and watch their PC explode into ashes
