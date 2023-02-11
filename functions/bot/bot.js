const { 
    Telegraf,
Markup
} = require('telegraf');
    require('dotenv').config()
    const text = require('./const')



const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.replyWithHTML(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}! Для подбора программы <a href="/go">нажмите /go</a>`));
bot.help((ctx) => ctx.reply(text.commands));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.command('joke', async (ctx) => ctx.replyWithHTML('Гранд'));
bot.command('faq', async (ctx) => ctx.replyWithHTML(text.text));




// Подбор программы
bot.command('go', async (ctx) => {
  sendStartMessage(ctx);
})

bot.action('go', ctx => {
  ctx.deleteMessage(); 
  sendStartMessage(ctx);
})

function sendStartMessage(ctx){
  try {
    ctx.replyWithHTML('<b>Какой вид деятельности у клиента?</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Сельское хозяйство', 'btn_A')],
        [Markup.button.callback('IT', 'btn_B')],
        [Markup.button.callback('Клиенту интересно кредитование', 'btn_C')],
        [Markup.button.callback('Промышленность', 'btn_D')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
}

// Сельхоз
function addActionBot2(id_btn, text) {
    bot.action('btn_A', async (ctx) => {
      try {
 //       await ctx.answerCbQuery()
 //       await ctx.replyWithPhoto({ source: 'functions/bot/img/agro1.jpg' });
ctx.replyWithHTML('<b>Уточни форму регистрации заявителя</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('ООО', 'btn_A1')],
            [Markup.button.callback('ИП/КФХ', 'btn_A2')],
            [Markup.button.callback('Кооператив', 'btn_A3')],
            [Markup.button.callback('Физическое лицо', 'btn_A41')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })}
    function addActionBot2(id_btn, text) { 
bot.action('btn_A1', async (ctx) => {
          try {
            await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
              [
                [Markup.button.callback('Агропрогресс', 'btn_A11'), Markup.button.callback('Агротуризм', 'btn_A12')]
              ]
            ))
          } catch (e) {
            console.error(e)
          }
})}

function addActionBot1(id_btn, exports, preview) {
  bot.action('btn_A11', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/grant-agroprogress.jpg' });
      await ctx.replyWithHTML(text.textA11)
    } catch (e) {
      console.error(e)
    }
})
bot.action('btn_A12', async (ctx) => {
try {
  await ctx.answerCbQuery()
  await ctx.replyWithPhoto({ source: 'functions/bot/img/agroturizm.jpg' });
  await ctx.replyWithHTML(text.textA12)
} catch (e) {
  console.error(e)
}
})}

function addActionBot2(id_btn, text) {
  bot.action('btn_A2', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Семейная животноводческая ферма', 'btn_A21')], 
          [Markup.button.callback('Агротуризм', 'btn_A22')]
        ]
      ))
    } catch (e) {
      console.error(e)
    }
})}
function addActionBot1(id_btn, exports, preview) {
      bot.action('btn_A21', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithPhoto({ source: 'functions/bot/img/semfarm.jpg' });
          await ctx.replyWithHTML(text.textA21)
        } catch (e) {
          console.error(e)
        }
})
bot.action('btn_A22', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/agroturizm.jpg' });
      await ctx.replyWithHTML(text.textA12)
    } catch (e) {
      console.error(e)
    }
})}

function addActionBot1(id_btn, exports, preview) {
  bot.action('btn_A3', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/agro_razv.jpg' });
      await ctx.replyWithHTML(`Рекомендуется программа Развитие материально-технической базы`, Markup.inlineKeyboard([
        [Markup.button.url('Развитие материально-технической базы', 'https://www.fasie.ru/upload/docs/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%A1%D1%82%D0%B0%D1%80%D1%82-1%202022.3_%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82.pdf')]]))
      await ctx.replyWithDocument( { source: 'functions/bot/docs/pole_start1.pdf'})
      } catch (e) {
      console.error(e)
    }
  })
    bot.action('btn_A41', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithPhoto({ source: 'functions/bot/img/agrostartap.jpg' });
        await ctx.replyWithHTML(text.textA41)
      } catch (e) {
        console.error(e)
      }})}
// Кредитование
function addActionBotC(id_btn, text) {
  bot.action('btn_C', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/loan.jpg' });
      await ctx.replyWithHTML('<b>Кредитование под какие цели?</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Только под инвестиционные цели', 'btn_C1')],
          [Markup.button.callback('На любые цели', 'btn_C2')],
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })}
// Кредитование под какие цели?
// Только под инвестиционные цели. МСП Банк
function addActionBotС1(id_btn, exports, preview) {
  bot.action('btn_C1', async (ctx) => {
   // ctx.deleteMessage();
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/loan1.jpg' });
      await ctx.replyWithHTML(text.textC1, Markup.inlineKeyboard(
        [
          [Markup.button.callback('Назад в меню выбора', 'go')],
        ]
      ))
      await ctx.replyWithDocument( { source: 'functions/bot/docs/loan1.pdf'})
    } catch (e) {
      console.error(e)
    }
})
// На любые цели. Банк Казани
bot.action('btn_C2', async (ctx) => {
  // ctx.deleteMessage();
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({ source: 'functions/bot/img/loan2.jpg' });
    await ctx.replyWithHTML(text.textC2, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Назад в меню выбора', 'go')],
      ]
    ))
    await ctx.replyWithDocument( { source: ''})
  } catch (e) {
    console.error(e)
  }
})
}

// Обработчик функций
addActionBot2('btn_A', text)
addActionBot2('btn_A1', text)
addActionBot2('btn_A2', text)
addActionBot1('btn_A11', text.textA11, true)
addActionBot1('btn_A12', text.textA12, true)
addActionBot1('btn_A21', text.textA21, true)
addActionBot1('btn_A22', text.textA12, true)
addActionBot1('btn_A3', text.textA3, true)
addActionBot1('btn_A41', text.textA41, true)
// Обработчик функций править
addActionBotC('btn_С', text)
addActionBotС1('btn_С1', text.textС1, true)
addActionBotС1('btn_С2', text.textС2, true)


// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
