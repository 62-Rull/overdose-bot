const { Message, Client, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "invite",
    aliases: [''],

    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send(`📩 Invite Bots https://dsc.gg/overdose.`)
      
        message.channel.send({embeds: [embed]})
    },
};