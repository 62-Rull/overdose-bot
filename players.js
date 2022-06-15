const { Message, Client, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "players",
    aliases: ['player'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send(`**USAGE:** \`\`${client.config.prefix}players <ip:port>\`\`\n**EXAMPLE:** \`\`${client.config.prefix}players 127.51.82.162:7777\`\``)
      

        const split = args.join(" ").split(":");
        const ip = split[0];
        const port = split[1];
  
        const json = await fetch(`http://anabellebot.online/API/sampquery?ip=${ip}&port=${port}`).then(r => r.json())
        if (json.response === "Something Went Wrong Please Check ip And port correcly or Please Try Again Later") return message.channel.send(`Can't connect to \`\`${split[0]}:${split[1]}\`\``)
  
        if (json.response.isPlayersIngame > 10) return;
          
        const embed = new MessageEmbed()
        .setTitle(`${json.response.hostname}`)
      
.setThumbnail("https://cdn.discordapp.com/attachments/969829479658704956/985616149620355092/overdose.png")
        .addField(`${json.response.isPlayerOnline} • Players Online 👥`, `\`\`\`[ID] Name Score Ping\n${json.response.isPlayersIngame || "Too Many Players!"}\`\`\``)
        .setTimestamp()
    .setFooter(`REQUEST BY ${message.author.username}`)
        .setColor('RANDOM')

        message.channel.send({embeds: [embed]})
    },
};
