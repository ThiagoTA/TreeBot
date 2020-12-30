const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./json/config.json");
const fetch = require('node-fetch');


client.on("ready", () => {
    console.log('Bot está online :D');
    client.user.setActivity("Criador: !Thiago#9137 (BETA)");
});

client.on('message', async message => {

    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Meu Prefix é `.`")}

    if(!message.content.startsWith(config.prefix)) return;

    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
   try {
       let commandFile = require(`./commands/${command}.js`,``);
       delete require.cache[require.resolve(`./commands/${command}.js`)];
       return commandFile.run(client, message, args);
   } catch (err) {
         console.error("Erro:" + err)    
}

});

  client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (message.author.id == client.user.id) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if (comando == 'beijar') {
        let channelcomando = '748177958111412224'
        let beijarerro = new Discord.MessageEmbed()
            .setDescription(`:warning: ${message.author} não foi possível mandar esse tipo de comando aqui !`)
            .setColor('#ff0000')
        let membroerro = new Discord.MessageEmbed()                  
            .setDescription(`:warning: ${message.author} mencione alguém para beijar !`)
            .setColor('#ff0000')
        let soliário = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`😭 ${message.author}, fica assim não, um dia você acha !`)
            .setImage(`https://miro.medium.com/max/1000/1*ptosHRnMX4ZbpwylA_GDYQ.gif`)
    
        if(message.channel.id !== channelcomando) {
            message.delete().catch()
            
          message.channel.send(beijarerro).then(msg => { msg.delete ({ timeout: 12000 })}).catch(console.error);
        }   else {
    
                let member = message.mentions.users.first()
                if(!member) return message.channel.send(membroerro).then(msg => { msg.delete ({ timeout: 12000 })}).catch(console.error);
                
                if (message.author.id === member.id) {
                    message.delete().catch()
                    message.channel.send(soliário)
                } else {
    
                const data = await fetch('https://nekos.life/api/v2/img/kiss')
                    .then(res => res.json())
                    .then(json => json);
                
                const url = data.url;
                let avatar = message.author.displayAvatarURL()
    
                let aceitarembed = new Discord.MessageEmbed()
                    .setColor('BLACK')
                    .setTitle('Aceita Beijar?')
                    .setDescription(`O usuário ${message.author} deseja te beijar, ${member} você aceita ? \nReaja com 😍 para aceitar ou 😡 para recusar. \n\nVocê tem **2min** para aceitar !`)
                    .setThumbnail(avatar)
                    .setAuthor(message.author.tag, avatar)
                    .setTimestamp();
                let messagereturn = await message.channel.send(aceitarembed);
                
                await messagereturn.react('😍');
                await messagereturn.react('😡');
                const reactions = ['😍', '😡'];
            
                const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === member.id;
                const collector = messagereturn.createReactionCollector(filter, { time: 600 } );
                
                collector.on('collect', async emoji => {
    
                    switch(emoji._emoji.name){
                        case('😍'):
                            let beiembed = new Discord.MessageEmbed()
                                .setColor('RED')
                                .setDescription(`💞 **${member.username}** você levou um beijo do(a) **${message.author.username}**`)
                                .setImage(url)
                            await message.channel.send(beiembed);
                            messagereturn.delete();
                            break;
                        case('😡'):  
                            let recmbed = new Discord.MessageEmbed()
                                .setColor('BLACK')
                                .setDescription(`😭 **${member.username}** recusou o beijo do(a) **${message.author.username}**`)
                                .setImage('https://media1.giphy.com/media/kXdo4BgGoFC80/200.gif')
                            await message.channel.send(recmbed);
                            messagereturn.delete();
                            break; 
                        default:
                            const tempmbed = new Discord.MessageEmbed()
                                .setTitle('Nào respondido')
                                .setColor('#000000')
                                .setDescription(`${userm} nào respondeu o beijo a tempo!.`)
                                .setTimestamp()
                                .setThumbnail(avatar)
                                .setFooter('nào respondeu!')
                            await message.channel.send(tempmbed);
                            messagereturn.delete();
                            break;
                        }
                        console.log(filter);
                    })
                }
            }        
    } 
});

client.login(config.token);