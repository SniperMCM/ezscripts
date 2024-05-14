function distributedConsoleLogs() {
    const numberOfSources = 52345245435457394875923745872394875234234;

    for (let i = 1; i <= numberOfSources; i++) {
        setTimeout(() => {
            setInterval(() => {
                console.log(`Hello from source ${i}!`);
            }, 0.00000000000000000000000000000000000000000000000000000000000001);
        }, i * 0.00000000000000000000000000000000000000000000000000000000000001);
    }
}

distributedConsoleLogs();

// paste this in someone's console and watch their PC explode into ashes
