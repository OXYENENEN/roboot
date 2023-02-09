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
    try {
      await ctx.replyWithPhoto('https://cdnn21.img.ria.ru/images/07e6/06/07/1793672027_0:0:0:0_0x0_100_0_0_0ecdcf92dce797e3e57e9fa4f3eb5aec.png',
      {
        caption: 'Какой вид деятельности у клиента?'
    }, Markup.inlineKeyboard(
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
  })
    function addActionBot12(id_btn, text) {
    bot.action('btn_A', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Уточни форму регистрации заявителя</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('ООО', 'btn_A1')],
            [Markup.button.callback('ИП/КФХ', 'btn_A2')],
            [Markup.button.callback('Кооператив', 'btn_A3')],
            [Markup.button.callback('Физическое лицо', 'btn_A41')]
          ]
        ))
        await ctx.replyWithPhoto()
      } catch (e) {
        console.error(e)
      }
    })

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

function addActionBotA9(id_btn, exports, preview) {
  bot.action('btn_A11', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML(text.textA11)
    } catch (e) {
      console.error(e)
    }
})
bot.action('btn_A12', async (ctx) => {
try {
  await ctx.answerCbQuery()
  await ctx.replyWithHTML(text.textA12)
} catch (e) {
  console.error(e)
}
})}

function addActionBot1(id_btn, text) {
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
function addActionBotA2(id_btn, exports, preview) {
      bot.action('btn_A21', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithHTML(text.textA21)
        } catch (e) {
          console.error(e)
        }
})
bot.action('btn_A22', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML(text.textA12)
    } catch (e) {
      console.error(e)
    }
})}

function addActionBotA(id_btn, exports, preview) {
  bot.action('btn_A3', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML(text.textA3)
    } catch (e) {
      console.error(e)
    }
  })
    bot.action('btn_A41', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(text.textA41)
      } catch (e) {
        console.error(e)
      }})}
// Обработчик функций
addActionBot1('btn_A', text)
addActionBot12('btn_A1', text)
addActionBot12('btn_A2', text)
addActionBotA9('btn_A11', text.textA11, true)
addActionBotA9('btn_A12', text.textA12, true)
addActionBot12('btn_A3', text)
addActionBot12('btn_A3', text)
addActionBot12('btn_A4', text)
addActionBotA2('btn_A21', text.textA21, true)
addActionBotA('btn_A22', text.textA12, true)
addActionBotA('btn_A31', text.textA3, true)
addActionBotA('btn_A41', text.textA41, true)


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
