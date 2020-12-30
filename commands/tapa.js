const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {

    let channelcomando = '748177958111412224'
    let taparerro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} não foi possível mandar esse tipo de comando aqui !`)
        .setColor('#ff0000')  
    let membroerro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} mencione alguém para dar um tapa !`)
        .setColor('#ff0000')
    let soliário = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`😡  ${message.author}, você não pode se bater !`)
        .setImage(`https://24.media.tumblr.com/ff85f929275e02b94932c77c88c81d40/tumblr_mrpviyNQYf1s3q3hao1_400.gif`)    
  
    if (message.channel.id !== channelcomando) {
        message.delete().catch()
        message.channel.send(taparerro)
    } else {
        let member = message.mentions.users.first()
        
        if(message.author.id === member.id) {
            message.delete().catch()
            message.channel.send(soliário)
        } else { 
    
        if(!member) return message.channel.send(membroerro).then(msg => {msg.delete({ timeout: 12000 })}).catch(console.error);

        const data = await fetch('https://nekos.life/api/v2/img/slap')
                .then(res => res.json())
                .then(json => json);
        const url = data.url;
        
        let tapa = new Discord.MessageEmbed()
            .setColor("1a8cff")
            .setDescription(`💪 **${member.username}** você levou um tapa do(a) **${message.author.username}**`)
            .setImage(url)
        message.channel.send(tapa);
        }  
    }

}

