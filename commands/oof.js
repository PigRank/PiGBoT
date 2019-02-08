exports.run = (client, message, args) => {
    message.channel.send("foo!").catch(console.error);
}