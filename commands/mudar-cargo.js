const Discord = require('discord.js');

module.exports = {run: (client, message, args) => {

  let channelcomando = '748177958111412224'

  let mudarrerro = new Discord.MessageEmbed()
  .setDescription(`:warning: ${message.author} não foi possível mandar esse tipo de comando aqui !`)
  .setColor('#ff0000')
  let erro = new Discord.MessageEmbed()
  .setDescription(`:warning: ${message.author} Erro, digite novamente o comando !`)
  .setColor('#ff0000')
  let messagembot = new Discord.MessageEmbed()
  .setDescription(`⚠️ ${message.author} digite a sua idade. Para cancelar digite **exit** !`)
  .setColor('#ffff00')
  let trocadecargormbot = new Discord.MessageEmbed()
  .setDescription(`✅ ${message.author} seu cargo foi alterado com sucesso !`)
  .setColor('#00ff00') 
  let cancelarmbot = new Discord.MessageEmbed()
  .setDescription(`✅ ${message.author} mudança de cargo cancelado com sucesso !`)
  .setColor('#00ff00')   

  let usuário = message.author.id
  let maior = '748157785967034419'
  let menor = '748157731323641868'


  if (message.channel.id !== channelcomando) {

    message.channel.send(mudarrerro).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);
    message.delete().catch()

  } else {  
    message.channel.send(messagembot).then(msg => {
      message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
          .on('collect', t => {
          var resposta = t.content
          
          if (resposta >= 18){
              message.channel.send(trocadecargormbot)
              usuário.addRole(maior)
              message.delete().catch()
          
          } else if (resposta <= 18) {
              message.channel.send(trocadecargormbot)
              usuário.addRole(menor)
              message.delete().catch()
          
          } else if (resposta === 'exit') {
              message.channel.send(cancelarmbot)
              message.delete().catch()
          
          }
          else {
            message.channel.send(erro).then(msg => {msg.delete ({ timeout: 12000 })}).catch(console.error);
            message.delete().catch()
          }
              })        
       })
    }   
  }
}

exports.help = {
    name: 'teste'
}