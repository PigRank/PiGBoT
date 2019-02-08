const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

	let pMute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
	if(!pMute) return message.reply("Who dat");
	if(pMute.hasPermission("ADMINISTRATOR")) return message.reply("They too powerful bro!");
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Rekt");
	let muterole = message.guild.roles.find(`name`, "Muted");
	//create role start
	if(!muterole){
		try{
			muterole = await message.guild.createRole({
				name: "Muted",
				color: "#000000"
			})
			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(muterole, {
					SEND_MESSAGES: false
				});
			});
		}catch(e){
			console.log(e.stack);
		}
	}
	//create role end
	let mutetime = args[1];
	if(!mutetime) return message.reply("How long tho");

	await(pMute.addRole(muterole.id));
	message.reply(`<@${pMute.id}> has been muted for ${ms(ms(mutetime))}`);

	setTimeout(function(){
		pMute.removeRole(muterole.id);
		message.channel.send(`<@${pMute.id}> has been unmuted.`);
	}, ms(mutetime));
}