const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) => {
    let {body} = await superagent.get(`http://aws.random.cat//meow`)

      let catEmbed = new Discord.RichEmbed()
      .setAuthor("Here's your random cat!")
      .setColor("#ffffff")
      .setImage(body.file);

      msg.channel.send(catEmbed);
};