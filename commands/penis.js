exports.run = (client, message, args) => {
	
    let replies = ["Your penis is 1 millimeter.", "Your penis is 1 centimeter.", "Your penis is 100000 inches.", "Your penis is 1 inch.", "Your penis is 2 inches.", "Your penis is 3 inches.", "Your penis is 4 inches.", "Your penis is 5 inches.", "Your penis is 6 inches.", "Your penis is 7 inches.", "Your penis is 8 inches.", "Your penis is 9 inches.", "Your penis is 10 inches.", "Your penis is 11 inches.", "Your penis is 1 foot. wow."];

    let answer = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    message.channel.send(`${replies[answer]}`);

};