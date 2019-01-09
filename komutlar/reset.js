const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden başlatılıyor...").then(msg => {
        console.log("REGOCRAFT Adlı bot başarıyla güncellendi");
        process.exit(0);     
    });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reset', 
  description: 'Botu yeniden başlatır',
  usage: 'reset' 
};