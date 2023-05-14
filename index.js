const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf("5767772684:AAFIrs0zyy4klNzIEsu2kC40BA7nOkxIV_4");
bot.start((ctx) => ctx.reply('Welcome'));
bot.command("all", (ctx) => {
  console.log(new Date().toString());
  ctx.reply('Welcome, today is ' + new Date().toString());
  console.log(bot.telegram);
  /* sendLocation(ctx.chat.id, latitude, longitude); */
});
/* bot.hears('Location', (ctx) => ctx.reply(ctx.location)); */
bot.launch();