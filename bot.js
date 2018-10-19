const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "b!"



//bc

client.on("message", message => {
    if (message.content.startsWith("b!bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "b!";

  client.on("message", message => {

              if (message.content.startsWith(prefix + "obc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `);
   message.delete();
  };
  });

//help

  client.on('message', msg => {
    if(msg.content === 'b!help')
    msg.reply('Check Your DM :white_check_mark:')
  });










  client.on("message", message => {
    if (message.content === "b!help") {
     const embed = new Discord.RichEmbed()
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       b!obc | لأرسال برود كاست للكل

       b!bc  |  لأرسال برود كاست للأونلاين`)
   message.author.sendEmbed(embed)

   }
   });

//private

     client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('b!adminbc')){
if(!message.author.id === '393478482379800578') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

//Host settings

client.on('ready',  () => {
    console.log('تم تشغيل البوت  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });









client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("#Future ..",{type: 'WATCHING'});

  });

client.login(process.env.BOT_TOKEN);
