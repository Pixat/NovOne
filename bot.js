const fs = require('fs');
const Discord = require('discord.js');
const {token, prefix} = require('./config.json');
 
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./').filter(file => file.endsWith('.js'));
 
for (const file of commandFiles) {
    const command = require(`./${file}`);
    bot.commands.set(command.name, command);
    console.log(`- ${file} Loaded!`);
}
 
bot.on("ready", async () => {
        //console.log(bot.commands);
        console.log('====================================================');
        console.log('Ready to take in to battle!');
        console.log(`Logged in as ${bot.user.tag}!`);
        console.log('====================================================');
 
    try{
        //console.log("Invite link:");
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log("Invite link: " + link);
        console.log('====================================================');
    } catch(e){
        console.log(e.stack);
    }
 
});
 
bot.on("message", async message =>
{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
   
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (!bot.commands.has(command)) return;
 
    try {
        bot.commands.get(command).execute(message, args, bot, config, Discord);
    }
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
 
bot.login(token);