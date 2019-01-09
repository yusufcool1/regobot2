const ms = require('ms');
const ayarlar = require('../ayarlar.json');



var prefix = ayarlar.prefix

exports.run = (client, message, args) => {
    let mlg = message.guild.channels.find("name", "mod-log")

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send(`:white_check_mark: **Başarılı işlem** \n Kanalın kilidi ${message.author.username} Tarafından Başarıyla açıldı!`);
      mlg.send(`${message.channel} Adlı Kanal Kilidi Başarıyla ${message.author.username} Tarafından açıldı`)

    }).catch(error => {
      console.log(error);
    });
  };
   exports.conf = {
     enabled: true,
     guildOnly: false,
     aliases: ['unlock', 'kilitaç'],
     permLevel: 3
   };
   
   exports.help = {
     name: 'kilitaç',
     description: 'Odanın Kilidini Kaldırır.',
     usage: 'kilitaç'
   };