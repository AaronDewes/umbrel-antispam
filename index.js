require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Listen for any kind of message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.forward_from_chat && msg.entities[0].url) {
    bot.sendMessage(chatId, `👮️ Forwarded messages that contain links aren't allowed for security reasons.`)
    bot.deleteMessage(chatId, msg.message_id);
  }
});
