const Discord = require("discord.js");

exports.run = (client, message, args, level) => {

  let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply("What're u asking doe")

  const embed = new Discord.RichEmbed()
  .setTitle("Poll")
  .setColor("#ffa0df")
  .setDescription(`${question}`)
  .setFooter(`Poll started by: ${message.author.username}`, `${message.author.avatarURL}`)

  message.delete().catch();
  message.channel.send({embed})
  .then(msg => {
    msg.react('👍')
    msg.react('🤷')
    msg.react('👎')
  })
  .catch(() => console.error('Emoji failed to react.'));

}
