const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) => {
    let {body} = await superagent.get(`https://api-to.get-a.life/meme`)

      let memeEmbed = new Discord.RichEmbed()
      .setAuthor("Here's your random meme!")
      .setColor("#ffffff")
      .setImage(body.url);

      msg.channel.send(memeEmbed);
};