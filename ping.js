module.exports = {
	name: 'ping',
	description: 'Pong!',
	execute(message) {
        message.channel.sendMessage("**Pong!** :ping_pong:");
	},
};