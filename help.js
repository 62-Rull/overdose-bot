const { Message, Client, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  name: "help",
  aliases: ['hp'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let categories = [];
    readdirSync("./commands/").forEach((dir) => {
      const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
        file.endsWith(".js")
      );

      const cmds = commands.map((command) => {
        let file = require(`../../commands/${dir}/${command}`);

        if (!file.name) return "No command name.";

        let name = file.name.replace(".js", "");

        return `\`${name}\``;
      });

      let data = new Object();

      data = {
        name: dir,
        value: cmds.length === 0 ? "In progress." : cmds.join(" "),
      };

      categories.push(data);
    })
      
    const embed = new MessageEmbed()
      .setTitle(`Commands List ${client.user.username}`)
      .setDescription(`Deafult prefix ${client.config.prefix}help\ `)
        .setThumbnail("https://cdn.discordapp.com/attachments/969829479658704956/985616149620355092/overdose.png")

            .setColor('RANDOM')

      .addFields(categories)

    message.channel.send({ embeds: [embed] })
  },
};
