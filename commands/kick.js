const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!kUser) return message.channel.send("Who dat");
	let kReason = args.join(" ").slice(22);
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No, just no.");
	if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("He too powerful!!");

	let kickEmbed = new Discord.RichEmbed()
	.setDescription("Kicks")
	.setColor("FDD7E4")
	.addField("Kicked user", `${kUser} with ID: ${kUser.id}`)
	.addField("Kicked by", `${message.author} with ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Reason", kReason);

	let kickchannel = message.guild.channels.find(`name`, "punishments");
	if(!kickchannel) return message.channel.send("Make a channel called punishments.");

	message.guild.member(kUser).kick(kReason);
	kickchannel.send(kickEmbed);
}
