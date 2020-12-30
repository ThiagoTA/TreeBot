const Discord = require('discord.js');

module.exports = {run: (client, message, args) => {

    let erro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} você não tem **permissão** para usar esse comando !`)
        .setColor('#ff0000')
    let membererro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} mencione alguém para **banir** !`)
        .setColor('#ff0000')
    let memberbannable = new Discord.MessageEmbed ()
        .setDescription(`:warning: ${message.author} não posso banir esse **usuário** !`)
        .setColor('#ff0000')

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(erro).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);
    message.delete().catch()

    let memberBan = message.mentions.users.first()
    if (!memberBan) return message.channel.send(membererro).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);
    if (!memberBan.bannable) return message.channel.send(memberbannable).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);

    let motivo = args.slice[1].join(' ')
        if(!motivo) motivo = "❌"
        let erroban = new Discord.MessageEmbed()
            .setDescription(`:warning: Desculpe ${message.author}, não consegui **Banir** o membro devido o: ${error} !`)
            .setColor('#ff0000') 
            .catch(error => message.channel.send(erroban)).then(msg => {msg.delete ({ timeout: 12000})}).catch(console,error);
    
    let infrator = `748175432507195444`
    let ban = new Discord.MessageEmbed()
        .setTitle("💣 **Ban**")
        .addField("Membro Banido:", `✅**|** ${memberBan.user.tag}`)
        .addField("Banido por:", `🔧**|** ${message.author.tag}`)
        .addField("Motivo:", `💬**|** ${motivo}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RED").setTimestamp()
    message.guild.channels.get(infrator).send(ban)

}
}