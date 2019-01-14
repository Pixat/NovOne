const fs = require('fs');
const Discord = require('discord.js');
var bot = new Discord.Client();
//const config = require('./config.json');

module.exports = {
    name:"help",
    description:"Show help",
    execute(message, args, bot, config, Discord)  {
        var embed = new Discord.RichEmbed()
        .setColor("ORANGE")
        //.setThumbnail(bot.user.avatarURL)
        .setFooter("NovOne v1.2")
        .addField("**Commands:**", "`>help` " + "`>ping` " + "`>8ball` " + "`>avatar` " + "`>profile` " + "`>members` ")
        .addField("Moderators:", "null")
        .addField("Author:", "<@423141526001025024>")
        .addField("Current Server:", message.guild.name, true);
        message.channel.send({ embed });
    }
};