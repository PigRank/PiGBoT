const Discord = require("discord.js");
const botconfig = require("./../config.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, msg, args) => {
        let servericon = msg.guild.iconURL;
        let helpembed = new Discord.RichEmbed()
        .setTitle("Moderator Command List!")
        .setThumbnail("https://cdn.discordapp.com/attachments/480580417318027318/487408830947393536/a409a4043caf78bcba131fcf325de80a.png")
        .setColor("#f11515")
        .addField(`${prefix}help`, "Brings Up The 1st Help Page")
        .addField(`${prefix}help2`, "Brings Up This Page")
        .addField(`${prefix}clear`, "Clears a certain number of messages.")
        .addField(`${prefix}warn`, "Warns a member.")
        .addField(`${prefix}kick`, "Kicks a member.")
        .addField(`${prefix}ban`, "Bans a member.")
        .addField(`${prefix}mute`, "Mutes a member for a certain amount of time.")

        let noteembed = new Discord.RichEmbed()
        .setTitle("Important!")
        .setThumbnail("https://cdn.discordapp.com/attachments/480580417318027318/487410464767213568/2000px-Twemoji_1f437.png")
        .setColor("#00ff99")
        .addField("\n\nPlease Note", "The bot is still under development so it may go down often. \n Recommend new commands to staff \n Ping either PigRank#4009 or Shrey87#1347 to report a problem.");

        msg.channel.send(helpembed);
        msg.channel.send(noteembed);
}    

module.exports.help = {
    name: "help2"
}