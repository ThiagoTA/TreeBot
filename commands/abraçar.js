const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client ,message, args) => {

    let channelcomando = '748177958111412224'
    let abraçorerro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} não foi possível mandar esse tipo de comando aqui !`)
        .setColor('#ff0000')  
    let membroerro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} mencione alguém para abraçar !`)
        .setColor('#ff0000')
    let soliário = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`😭  ${message.author}, quer um abraço por ser solitário?`)
        .setImage(`https://thumbs.gfycat.com/ScaryLargeHuia-size_restricted.gif`)    
  
    if (message.channel.id !== channelcomando) {
        message.delete().catch()
        message.channel.send(abraçorerro)
    } else {
        let member = message.mentions.users.first()
        
        if(message.author.id === member.id) {
            message.delete().catch()
            message.channel.send(soliário)
        } else { 
    
        if(!member) return message.channel.send(membroerro).then(msg => {msg.delete({ timeout: 12000 })}).catch(console.error);

        const data = await fetch('https://nekos.life/api/v2/img/hug')
                .then(res => res.json())
                .then(json => json);
        const url = data.url;
        
        let abraço = new Discord.MessageEmbed()
            .setColor("F7DC6F")
            .setDescription(`💚 **${member.username}** você levou um abraço do(a) **${message.author.username}**`)
            .setImage(url)
        message.channel.send(abraço);
        }  
    }

}