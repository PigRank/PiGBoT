/*
var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
switch(randomNumber){
    case 0: return 'Hello!';
    case 1: return 'Bye!';
    case 2: return 'Random';
}

exports.run = (client, message, args) => {
	message.channel.send(randomNumber).catch(console.error);
}
/*