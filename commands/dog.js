const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) => {
    let {body} = await superagent.get(`https://random.dog/woof.json`)

      let dogEmbed = new Discord.RichEmbed()
      .setAuthor("Here's your random dog!")
      .setColor("#ffffff")
      .setImage(body.url);

      msg.channel.send(dogEmbed);
};