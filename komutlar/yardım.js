const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete();
  const emoji = client.emojis.get('EMOJİ ID');
  
  const yardım = new Discord.RichEmbed()
.setDescription(`AÇIKLAMA`,true);
  
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permlevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Yardım.',
  usage: 'yardım'
};