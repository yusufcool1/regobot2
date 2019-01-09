const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("GREEN")
  .setDescription("")
  .setFooter('PLAY.REGOCRAFT - WWW.REGOCRAFT.COM | ', client.user.avatarURL)
  .setTimestamp()
  .addField("Sunucuna beni davet etmek için aşağıdaki linke tıkla!", `[Buraya tıkla ve sunucuna davet et!](https://discordapp.com/oauth2/authorize?client_id=528905482794958848&scope=bot&permissions=2146958591)` + "**\n**"+`[]()`+ "**\n**"+`[]()`, false)
  .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};


exports.help = {
  name: 'davet',
  description: 'Botun Davet linkini gönderir',
  usage: 'davet'
};

