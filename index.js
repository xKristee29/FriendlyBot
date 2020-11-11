const fs = require('fs');
const Database = require("@replit/database");
const Discord = require('discord.js');
const client = new Discord.Client();
const db = new Database();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const prefix = '$';

const token = process.env.TOKENDS;

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const [cmd, ...args] = message.content
                            .trim()
                            .substring(prefix.lenght)
                            .split(/\s+/);

    if(cmd === prefix + 'haidee'){
        message.channel.send('https://www.youtube.com/watch?v=hGcwsfVU0jI');
    }
    else if(cmd === prefix + 'sv-info'){
      client.commands.get('sv-info').execute(args, db, message);
    }
    else if(cmd === prefix + 'db' &&
     (message.author.id === process.env.ADMIN1 ||
      message.author.id === process.env.ADMIN2 ||
      message.author.id === process.env.ADMIN3)){
      client.commands.get('editdb').execute(args, db, message);
    }
    else if(cmd === prefix + 'amongus'){
      client.commands.get('amongus').execute(args, db, message);
    }
    console.log(message.author.tag,":",cmd,' ',args);
 });

 client.login(token);