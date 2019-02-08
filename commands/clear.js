//const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("OoF");
	if(!args[0]) return message.channel.send("FoO");
	message.channel.bulkDelete(args[0]).then(() => {
		message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(1000));
	})
}