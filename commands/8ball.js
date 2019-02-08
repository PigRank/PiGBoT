exports.run = (client, message, args) => {
	
	if(!args[1]) return message.channel.send("Please Ask A Question");
    let replies = [":8ball: Yes", ":8ball: No", ":8ball: Not Sure", ":8ball: Ask Again", ":8ball: I'm sure", ":8ball: Stop"];

    let answer = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    message.channel.send(`${replies[answer]}`);

};