const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.id} (${client.user.tag}) is up and ready to go!`)
    
    setInterval(() => {
        client.user.setActivity(`$help`, { type: "WATCHING"});

        client.user.setActivity(`LETS GO INVITE ME`, { type: "STREAMING"});    
    }, 100)
});
