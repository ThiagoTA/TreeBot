const Discord = require('discord.js');

module.exports = {run: (client, message, args) => {

    message.channel.send("Qual é a sua idade?").then(msg => {
        message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
            .on('collect', t => {
            var idade = t.content
            
            if (idade >= 18){
                message.channel.send('Você ganhou o cargo +18')
            } else if (idade <= 18) {
                message.channel.send('Você ganhou o cargo -18')
            } else if (idade === 'cancelar') {
                message.channel.send('Registro foi cancelado')
            }
            else {
                message.channel.send('Erro, digite novamente o comando .teste')
            }
                })        
    })

}
}

exports.help = {
    name: 'teste'
}