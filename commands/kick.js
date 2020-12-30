const Discord = require('discord.js')

module.exports = {run: (client, message, args) => {

    let erro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} você não tem **permissão** para usar esse comando !`)
        .setColor('#ff0000')
    let membererro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} mencione alguém para **kickar** !`)
        .setColor('#ff0000')
    let memberkicknable = new Discord.MessageEmbed ()
        .setDescription(`:warning: ${message.author} não posso kickar esse **usuário** !`)
        .setColor('#ff0000')

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(erro).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);
    message.delete().catch()

    let memberKick = message.mentions.users.first()
    if (!memberKick) return message.channel.send(membererro).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);
    if (!memberKick.kicknable) return message.channel.send(memberkicknable).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);

    let motivo = args.slice[1].join(' ')
        if(!motivo) motivo = "❌"
        let errokick = new Discord.MessageEmbed()
            .setDescription(`:warning: Desculpe ${message.author}, não consegui **Kickar** o membro devido o: ${error} !`)
            .setColor('#ff0000') 
            .catch(error => message.channel.send(errokick)).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console,error);
    
    let infrator = `748175432507195444`
    let kick = new Discord.MessageEmbed()
        .setTitle("🧨 **Kick**")
        .addField("Membro Kickado:", `✅**|** ${memberBan.user.tag}`)
        .addField("Kickado por:", `🔧**|** ${message.author.tag}`)
        .addField("Motivo:", `💬**|** ${motivo}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RED").setTimestamp()
    message.guild.channels.get(infrator).send(kick)

}
}