exports.run = (client, message, args) => {
    message.channel.send("oof!").catch(console.error);
}