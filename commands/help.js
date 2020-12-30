const Discord = require('discord.js')

exports.run = (client,message,args) => {

    message.delete().catch()

    embed = {
        "title": "** 📖 COMANDOS 📖**",
        "description": "```\nOlá, aqui estão todos os comandos possíveis dentro desse servidor, por enquanto estamos em fase de programação.```",
        "color": 12745742,
        "footer": {
          "icon_url": `${message.author.displayAvatarURL()}`,
          "text": `${message.author.username}`
        },
        "fields": [
          {
            "name": "│Moderação (BETA)",
            "value": "***```.ban;\n.kick;\n.aviso;\n.limpar;❌\n.mutar.❌```***",
            "inline": true
          },
          {
            "name": "│Servidor (BETA)",
            "value": "***```.ping;❌\n.sugestão;❌\n.gamesugestão;❌\n.reportar;❌\n.bug.❌```***",
            "inline": true
          },
          {
            "name": "│Diversão (BETA)",
            "value": "***```.abraçar;\n.beijar;\n.tapa;❌\n.cafuné.❌\n.shippar;❌```***",
            "inline": true
          },
          {
            "name": "│Horários Lives (BETA)",
            "value": "***```.lives - Ver os Hórarios das lives no Brasil;❌\n.livespt - Ver os Hórarios das lives em Portugal;❌\n.link - Pegar o link da Twitch.❌```***",
            "inline": true
          },
          {
            "name": "Sobre:",
            "value": "```Este bot está sendo desenvolvido pelo !Thiago#9137```"
          }
        ]
      };
    
    message.channel.send({embed}).then(msg => {
      msg.delete({ timeout: 10000 })
    })
    .catch(console.error);
 
}

exports.help = {
    name: 'help'
}