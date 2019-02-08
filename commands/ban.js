const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!bUser) return message.channel.send("Who dat");
	let bReason = args.join(" ").slice(22);
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No, just no.");
	if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("He too powerful!!");

	let banEmbed = new Discord.RichEmbed()
	.setDescription("Bans")
	.setColor("FDD7E4")
	.addField("Banned user", `${bUser} with ID: ${bUser.id}`)
	.addField("Banned by", `${message.author} with ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Reason", bReason);

	let banchannel = message.guild.channels.find(`name`, "punishments");
	if(!banchannel) return message.channel.send("Make a channel called punishments.");

	message.guild.member(bUser).ban(bReason);
	banchannel.send(banEmbed);
}
