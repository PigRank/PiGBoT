module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("OoF");
	let botmessage = args.join(" ");
	message.delete().catch();
	message.channel.send(botmessage);
}