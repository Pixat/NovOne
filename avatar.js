const Discord = require('discord.js');

module.exports = {
        name:"avatar",
        description:"Show avatar",
        execute(message, args)
        {
            var avatar = new Discord.RichEmbed();
            var member = message.mentions.users.first();
            if(!args[1])
            {
                if(!message.author.avatarURL)
                {
                    message.channel.sendMessage("This User doesn't have avatar!");
                    break;
                }
            }
            else message.channel.sendMessage("taa...");
            /*
            var embed = new Discord.RichEmbed()
            .setTitle("**" + message.author.tag + " avatar!**")
            .setImage(message.author.avatarURL);
            message.channel.sendEmbed(embed);
            */
        },
};