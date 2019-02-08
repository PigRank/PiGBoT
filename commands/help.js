const Discord = require("discord.js");
const botconfig = require("./../config.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, msg, args) => {
        let servericon = msg.guild.iconURL;
        let helpembed = new Discord.RichEmbed()
        .setTitle("Command List!")
        .setThumbnail("https://cdn.discordapp.com/attachments/480580417318027318/487408830947393536/a409a4043caf78bcba131fcf325de80a.png")
        .setColor("#f11515")
        .addField(`${prefix}help`, "Brings Up This Page")
        .addField(`${prefix}oof`, "hmm")
        .addField(`${prefix}foo`, "hmm")
        .addField(`${prefix}pig`, "Explains Piggianity.")
        .addField(`${prefix}gay`, "Tells how gay you are.")
        .addField(`${prefix}penis`, "Tells how big you penis is.")
        .addField(`${prefix}ping`, "Tells you your latency.")
        .addField(`${prefix}say`, "Makes the bot say something.")
        .addField(`${prefix}report`, "Report someone.")
        .addField(`${prefix}8ball`, "Asks the 8ball something.")
        .addField(`${prefix}dog`, "Shows a random doge.")
        .addField(`${prefix}cat`, "Shows a random kitty.")
        .addField(`${prefix}meme`, "Shows a random meme.")
        .addField(`${prefix}howgay`, "Tells you how gay a person is.")
        .addField(`${prefix}help2`, "Shows moderator commands.")

        let noteembed = new Discord.RichEmbed()
        .setTitle("Important!")
        .setThumbnail("https://cdn.discordapp.com/attachments/480580417318027318/487410464767213568/2000px-Twemoji_1f437.png")
        .setColor("#00ff99")
        .addField("\n\nPlease Note", "The bot is still under development so it may go down often. \n Recommend new commands to staff \n Ping either PigRank#4009 or Shrey87#1347 to report a problem.");

        msg.channel.send(helpembed);
        msg.channel.send(noteembed);
}    

module.exports.help = {
    name: "help"
}