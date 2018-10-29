const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!xp';
let embed_color = 0xadc7ff;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("canarado sleep O_o", {type: "WATCHING"});
});

function test() {
  setTimeout(function(){
    client.user.setActivity("canarado sleep O_o", {type: "WATCHING"});
    setTimeout(function(){
      client.user.setActivity("your mom", {type: "WATCHING"});
      test();
    }, 3000);
  }, 3000);
}

client.on('message', async msg => {
  if (!msg.content.includes(prefix)) return;
  if (msg.content.includes('ping')) {
    msg.reply('Pong!');
  }
  if (msg.content.includes('help') || msg.content.includes('-h') || msg.content.includes('?')) {
     let embed = new Discord.RichEmbed()
     .setTitle('XP-Bot - Commands:')
     .setColor(embed_color)
     .setDescription('`' + prefix + ' help`  displays this message\n'
                   + '`' + prefix + ' status`  shows your verification status');
      
     msg.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
