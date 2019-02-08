const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("no. rekt");
	let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
	if(!wUser) return message.reply("who dat tho noob");
	let warnlevel = warns[wUser.id].warns;

	message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}