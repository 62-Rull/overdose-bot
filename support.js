const { Message, Client, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "support",
    aliases: [''],

    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send(`🔔 Overdose Server https://dsc.gg/overdose-support.com`)
      
        message.channel.send({embeds: [embed]})
    },
};