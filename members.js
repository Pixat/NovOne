const Discord = require('discord.js');
//const embedColor = require('./config.json')

module.exports = {
    name:"members",
    description:"Show number of members",
    execute(message)
    {
        var membersEmbed = new Discord.RichEmbed()
        .setColor('ORANGE')
        .setDescription(":tada: **__Members: " + message.guild.memberCount + "__** :tada:");
        message.channel.sendEmbed(membersEmbed);
    }
};