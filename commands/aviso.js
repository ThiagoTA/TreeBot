const Discord = require('discord.js');

module.exports = {run: (client, message, args) => {

    const erro = new Discord.MessageEmbed()
        .setDescription(`:warning: ${message.author} você não tem **permissão** para usar esse comando !`)
        .setColor('#ff0000')

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(erro).then(msg => { msg.delete ({ timeout: 12000 })}).catch(console.error);

    message.delete().catch()

    let splitarg = args.join(" ").split(" / ")
    let título = splitarg[0]
    let aviso = splitarg[1]

    if(!título) {
        const errotitulo = new Discord.MessageEmbed()
            .setDescription(`:warning: ${message.author} você não colocou um **Título**. Use o formato **.aviso <titulo> / <aviso>** !`)
            .setColor('#ff0000')
        return message.reply(errotitulo).then(msg => { msg.delete ({ timeout: 12000 })}).catch(console.error);

    }
    if(!aviso) {
        const erroaviso = new Discord.MessageEmbed()
            .setDescription(`:warning: ${message.author} você não colocou o **Aviso**. Use o formato **.aviso <titulo> / <aviso>** !`)
            .setColor('#ff0000')
        return message.reply(erroaviso).then(msg => { msg.delete ({ timeout: 12000 })}).catch(console.error);
    }

    let avisos = new Discord.MessageEmbed()
    .setColor('#FFFFF')
    .addField(`${título}`, `@everyone **${aviso}**`)
    .setFooter(`Anuncio feito por ${message.author.username}`)
    .setTimestamp();

    message.channel.send(avisos)

}
}

exports.help = {
    name: 'aviso'
}