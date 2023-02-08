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


// Частые вопросы
bot.command('faq', async (ctx) => ctx.replyWithHTML(text.text));

// Подбор программы
bot.command('go', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Уточни форму регистрации заявителя</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Клиент Физ.лицо (ИП)', 'btn_FL_1')],
          [Markup.button.callback('ООО', 'btn_UL_1')],
          [Markup.button.callback('НКО', 'btn_N_1')]
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })

function addActionBot1(id_btn, text) {
// Диаграмма ФИЗ ЛИЦ
    bot.action('btn_FL_1', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Клиент занимается сельским хозяйством?</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Да', 'btn_FL_2'), Markup.button.callback('Нет', 'btn_FL_3')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })
  }
    bot.action('btn_FL_2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML('<b>Клиенту рекомендована программа Агростартап</b>')
      } catch (e) {
        console.error(e)
      }
    })

    bot.action('btn_FL_3', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>У клиента есть инновационный проект требущий НИОКР?</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Да', 'btn_FL_4'), Markup.button.callback('Нет', 'btn_FL_5')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })

    bot.action('btn_FL_4', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Рекомендована программа Старт-1</b>')
      } catch (e) {
        console.error(e)
      }
    })
    
    bot.action('btn_FL_5', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Ничего не подходит</b>')
      } catch (e) {
        console.error(e)
      }
    })

// Диаграмма ЮР ЛИЦ

    bot.action('btn_UL_1', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Уточни какая выручка у компании</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Выручка менее 10 млн', 'btn_UL_A1')],
            [Markup.button.callback('Выручка свыше 10 млн', 'btn_UL_B1')],
            [Markup.button.callback('Выручка больше 30 млн', 'btn_UL_C1')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })

    bot.action('btn_UL_A1', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Какой срок регистрации компании?</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Менее 2 лет', 'btn_UL_A2'), Markup.button.callback('Свыше 2 лет', 'btn_UL_A3')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })
// Для редактирования

function addActionBot2(id_btn, src_img, text) {
      bot.action('btn_UL_A2', async (ctx) => {
        try {
          await ctx.replyWithHTML('<b>Клиенту рекомендована программа Старт-1</b>', Markup.inlineKeyboard(
            [
              [Markup.button.callback('Дорожная карта', 'btn_FL_2'), Markup.button.callback('Положение', 'btn_FL_3')],
              [Markup.button.callback('Условия', 'btn_FL_3')]
            ]
          ))
        } catch (e) {
          console.error(e)
        }
      })
  
    bot.action('btn_UL_A2', 'img/A2/Fasie.jpg', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML(text.textA2, {
        disable_web_page_preview: true
      })
    } catch (e) {
      console.error(e)
    }
  })
     
    // Не трогал
    bot.action('btn_UL_4', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Рекомендован кредит МСП банка</b>')
      } catch (e) {
        console.error(e)
      }
    })
  
    bot.action('btn_UL_2', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Выручка больше 30 млн руб?</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Да', 'btn_UL_6'), Markup.button.callback('Нет', 'btn_UL_4')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })
  
    bot.action('btn_UL_6', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Проект клиента связан с производством инновационной продукции?</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Да', 'btn_UL_7'), Markup.button.callback('Нет', 'btn_UL_4')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })

    bot.action('btn_UL_7', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Требуется ли продукту НИОКР?</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Да', 'btn_UL_8'), Markup.button.callback('Нет', 'btn_UL_9')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })

    bot.action('btn_UL_8', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Рекомендована программа Развитие</b>')
      } catch (e) {
        console.error(e)
      }
    })
    
    bot.action('btn_UL_9', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Необходимая сумма финансирования больше 30 млн руб??</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Да', 'btn_UL_10'), Markup.button.callback('Нет', 'btn_UL_11')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }
    })

    bot.action('btn_UL_10', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Рекомендованы программы ФРП/Минпромторг (если соответствуют требованиям)</b>')
      } catch (e) {
        console.error(e)
      }
    })
    
    bot.action('btn_UL_11', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Рекомендована программа Коммерциализация</b>')
      } catch (e) {
        console.error(e)
      }
    })
  }


 // Грантовые программы
 bot.command('info', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Условия по программе ФСИ</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Старт-1', 'btn_i1'), Markup.button.callback('Коммерциализация', 'btn_i2'), Markup.button.callback('Развитие', 'btn_i3')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

function addActionBot(id_btn, exports, preview) {
// ФСИ
  bot.action('btn_i1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML(text.text2)
    } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_i2', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML(text.text3, {
        disable_web_page_preview: true
      })
    } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_i3', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML(text.text4)
    } catch (e) {
      console.error(e)
    }
  })

  // РФРИТ
  bot.action('btn_i4', async (ctx) => {
    try {
      await ctx.replyWithHTML(text.text5)
    } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_i5', async (ctx) => {
    try {
      await ctx.replyWithHTML(text.text6)
    } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_i6', async (ctx) => {
    try {
      await ctx.replyWithHTML(text.text7)
    } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_i7', async (ctx) => {
    try {
      await ctx.replyWithHTML(text.text8)
    } catch (e) {
      console.error(e)
    }
  })
}


  // Обработчик кнопок с помощью функции
  addActionBot1('tn_FL_1', text)
  addActionBot('btn_UL_A2', './img/1.jpg', false)
  addActionBot('btn_2', text.text2, false)
  addActionBot('btn_3', text.text3, false)
  addActionBot('btn_4', text.text4, false)
  addActionBot('btn_3', text.text5, false)
  addActionBot('btn_4', text.text6, false)
  addActionBot('btn_3', text.text7, false)
  addActionBot('btn_4', text.text8, false)

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
