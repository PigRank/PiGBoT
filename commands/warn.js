const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("no. rekt");
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
	if(!wUser) return message.reply("who dat tho noob");
	if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("he cool tho");
	let reason = args.join(" ").slice(22);

	if(!warns[wUser.id]) warns[wUser.id] = {
		warns: 0 
	};

	warns[wUser.id].warns++;

	fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
      });

	let warnEmbed = new Discord.RichEmbed()
	.setDescription("Warns")
	.setColor("#930058")
	.addField("Warned user", `${wUser} with ID: ${wUser.id}`)
	.addField("Warned by", `${message.author} with ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Total lifetime warnings", warns[wUser.id].warns)
	.addField("Reason", reason);

	let warnchannel = message.guild.channels.find(`name`, "punishments");
	if(!warnchannel) return message.reply("Make a channel called punishments.");

	warnchannel.send(warnEmbed);

}