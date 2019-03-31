const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = "https://techinfinite.herokuapp.com",
    token = process.env.TOKEN || '840101094:AAGBLogpFKyJQrRiEwplGr8H7BD7P11ieLw',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on('message',(msg) =>{
    const chatId = msg.chat.id
    const message=msg.text
    if(message == 'hi')
    {bot.sendMessage(chatId,'hello')}
    else{
        bot.sendMessage(chatId,'received your message')}
})
