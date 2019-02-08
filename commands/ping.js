exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! Ping is ${msg.createdTimestamp - message.createdTimestamp}ms. API Ping is ${Math.round(client.ping)}ms`);
};