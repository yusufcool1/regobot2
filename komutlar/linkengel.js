	const Discord = require('discord.js');
	const fs = require('fs');
	let linkEngel = JSON.parse(fs.readFileSync("Jsonlar/linkEngelle.json", "utf8"));

	var ayarlar = require('../ayarlar.json');

	exports.run = (client, message) => {
	  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);


		let args = message.content.split(' ').slice(1);
		const secenekler = args.slice(0).join(' ');

		var errembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setDescription(`Yanlış Kullanım!`)
		.addField(`Doğru Kullanım:`, `${ayarlar.prefix}linkEngel aç veya kapat`)
		if(secenekler.length < 1) return message.channel.send(errembed);
		//if(secenekler === "aç" || "kapat") return message.channel.send(errembed);
		if(secenekler.length < 1) return message.reply("Link Engelleme Açmak İçin `+linkengel aç` kapatmak için `+linkengel kapat`").then(m => m.delete(10000));

		message.delete();

				if (secenekler === "aç") {
			message.channel.send(`Link Engelleme Sistemi: **açık**!`).then(m => m.delete(5000));
			linkEngel[message.guild.id] = {
				linkEngel: "acik"
			  };

			  fs.writeFile("Jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (err) => {
				if (err) console.log(err)
			  });
		};

		if (secenekler === "kapat") {
			message.channel.send(`Link Engelleme Sistemi: **kapalı**!`).then(m => m.delete(5000));
			linkEngel[message.guild.id] = {
				linkEngel: "kapali"
			  };

			fs.writeFile("Jsonlar/kufurEngelle.json", JSON.stringify(linkEngel), (err) => {
				if (err) console.log(err)
			  });
		};
	}

		exports.conf = {
			enabled: true,
			guildOnly: false,
			aliases: ['linkengel'],
			permLevel: 3
		  };
		  
		  exports.help = {
			name: 'linkengelle',
			description: 'Link engelleme sistemini açıp kapatmanızı sağlar.',
			usage: '+!linkEngel <aç> veya <kapat>'
		  };