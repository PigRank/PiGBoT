/*const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("rekt");
	if(!args[0] || args[0 == "help"]) return message.reply("Use like dis: !prefix <new prefix>");

	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

	prefixes[message.guild.id] = {
		prefixes: args[0]
	};

	
	fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
    	});


	let pEmbed = new Discord.RichEmbed()
	.setColor("ff91f7")
	.setTitle("New Prefix")
	.setDescription(`Prefix set to ${args[0]}`);

	message.channel.send(pEmbed);

}
*/