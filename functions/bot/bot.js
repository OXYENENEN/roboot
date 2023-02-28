const { 
    Telegraf,
Markup
} = require('telegraf');
    require('dotenv').config()
    const text = require('./const')



const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>  { ctx.replyWithHTML(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}! Начинаем подбор грантовой программы. 
Для навигации воспользуйтесь Меню.`);
sendStartMessage(ctx);});
bot.help((ctx) => ctx.reply(text.commands));
bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.on('message', (msg) => {
 // const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
//  bot.sendMessage(chatId, 'Вижу сообщение');
// });
bot.command('joke', async (ctx) => ctx.replyWithHTML('Гранд'));
bot.command('faq', async (ctx) => ctx.replyWithHTML(text.text));
bot.command('fsie', async (ctx) => {
      try {
        await ctx.replyWithPhoto({ source: 'functions/bot/img/1.png' });
        await ctx.replyWithHTML('<b>Гранты ФСИ</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('Старт-1', 'btn_start')],
            [Markup.button.callback('Старт-ЦТ', 'btn_startdt')],
            [Markup.button.callback('Старт-ИИ', 'btn_starti')],
            [Markup.button.callback('Акселерация', 'btn_axel')],
            [Markup.button.callback('Развитие-НТИ', 'btn_grow')],
            [Markup.button.callback('Коммерциализация', 'btn_fsik')],
            [Markup.button.callback('Коммерциализация-ЦТ', 'btn_fsikdt')],
            [Markup.button.callback('Коммерциализация-ИИ', 'btn_fsikii')], 
            [Markup.button.callback('Другое', 'btn_other2')]
          ]
        ))
      } catch (e) {
        console.error(e) }
})

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

// Раздел 1 
// Сельхоз
function addActionBot27(id_btn, text) {
    bot.action('btn_A', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithPhoto({ source: 'functions/bot/img/agro1.jpg' });
 await ctx.replyWithHTML('<b>Уточните форму регистрации заявителя</b>', Markup.inlineKeyboard(
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
    function addActionBot23(id_btn, text) { 
bot.action('btn_A1', async (ctx) => {
          try {
            await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
              [
                [Markup.button.callback('Агропрогресс', 'btn_A11'), Markup.button.callback('Агротуризм', 'btn_A22')]
              ]
            ))
          } catch (e) {
            console.error(e)
          }
})}
// Агропрогресс
function addActionBot1a(id_btn, exports, preview) {
  bot.action('btn_A11', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/grant-agroprogress.jpg' });
      await ctx.replyWithHTML(text.textA11, Markup.inlineKeyboard(
        [
          [Markup.button.callback('Краткая справка','btn_AgroP1'), Markup.button.callback('Анкета клиента','btn_kom2')],
          [Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
        ))
        } catch (e) {
        console.error(e)
      }
    })
    bot.action('btn_AgroP1', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Краткая_спрвка_Агропрогресс_2021_1.pdf'})
      } catch (e) {
        console.error(e)
      }})
}
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
// Семейная ж ф
      bot.action('btn_A21', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithPhoto({ source: 'functions/bot/img/semfarm.jpg' });
          await ctx.replyWithHTML(text.textA21, Markup.inlineKeyboard(
            [
              [Markup.button.callback('Краткая справка по проекту','btn_SFarm1'), Markup.button.callback('Анкета клиента','btn_kom2')],
              [Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
              [Markup.button.callback('Назад в меню выбора', 'go')]]
            ))
            } catch (e) {
            console.error(e)
          }
        })
        bot.action('btn_SFarm1', async (ctx) => {
          try {
            await ctx.answerCbQuery()
            await ctx.replyWithDocument( { source: 'functions/bot/docs/СЖФ 2021 Краткая справка (1) (1).pdf'})
          } catch (e) {
            console.error(e)
          }})
// Агротуризм
bot.action('btn_A22', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/agroturizm.jpg' });
      await ctx.replyWithHTML(text.textA12, Markup.inlineKeyboard(
        [
          [Markup.button.callback('Презентация','btn_AgroT1'), Markup.button.callback('Анкета клиента','btn_kom2')],
          [Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
        ))
        } catch (e) {
        console.error(e)
      }
    })}
    bot.action('btn_AgroT1', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Агротуризм през.pdf'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_D2', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/agr.pdf'})
        } catch (e) {
          console.error(e)
        }})
// Развитие материально-технической базы
function addActionBot10c(id_btn, exports, preview) {
  bot.action('btn_A3', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/agro_razv.jpg' });
      await ctx.replyWithHTML(text.textA3, Markup.inlineKeyboard([
        [Markup.button.callback('Памятка для кооперативов','btn_Rmtb')], [Markup.button.callback('Анкета клиента','btn_D2')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
      ]))
      } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_Rmtb', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Развитие МТБ кооперативов.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_D2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/agr.pdf'})
      } catch (e) {
        console.error(e)
      }})
// Агростартап
    bot.action('btn_A41', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithPhoto({ source: 'functions/bot/img/agrostartap.jpg' });
        await ctx.replyWithHTML(text.textA41, Markup.inlineKeyboard(
          [
            [Markup.button.callback('Краткая справка','btn_AgroS')],
            [Markup.button.callback('Назад в меню выбора', 'go')]
          ]
        ))
      } catch (e) {
        console.error(e)
      }})}
      bot.action('btn_AgroS', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/Агростартап_2021_Краткая_справка.pdf'})
        } catch (e) {
          console.error(e)
        }})
// Раздел 2
// IT
// Уточни форму регистрации заявителя
function addActionBot1bY(id_btn, text) {
  bot.action('btn_B', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/dt.jpg' });
      await ctx.replyWithHTML('<b>Уточните форму регистрации заявителя</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('ООО', 'btn_B1')],
          [Markup.button.callback('Физическое лицо/ИП', 'btn_B2')],
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// ООО
// Как долго зарегистрировано ЮЛ?
  bot.action('btn_B1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Как долго зарегистрировано ЮЛ?</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Больше 2 лет', 'btn_B11')],
          [Markup.button.callback('Меньше 2 лет', 'btn_B12')],
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// ФЛ/ИП
  bot.action('btn_B2', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML('<b>Рекомендуется программа Старт</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Старт-1', 'btn_start')],
          [Markup.button.callback('Старт-ЦТ', 'btn_startdt')],
          [Markup.button.callback('Старт-ИИ', 'btn_starti')],
          [Markup.button.callback('Акселерация', 'btn_axel')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Выберите особенности проекта
// Больше года
  bot.action('btn_B11', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Выберите особенности проекта</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Разработка инновационного продукта', 'btn_B111')],
          [Markup.button.callback('Cоздание/расширение производства инновационного продукта', 'btn_B112')],
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Меньше года
bot.action('btn_B12', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Старт-1', 'btn_start')],
            [Markup.button.callback('Старт-ЦТ', 'btn_startdt')],
            [Markup.button.callback('Старт-ИИ', 'btn_starti')],
            [Markup.button.callback('Акселерация', 'btn_axel')],
            [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Разработка инновационной программы
  bot.action('btn_B111', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Развитие-НТИ', 'btn_grow')],
          [Markup.button.callback('Развитие-ЦТ', 'btn_grow')],
          [Markup.button.callback('Назад в меню выбора', 'go')]
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Расширение реализации инновационной продукции
  bot.action('btn_B112', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
                [[Markup.button.callback('Коммерциализация', 'btn_fsik')],
          [Markup.button.callback('Коммерциализация-ЦТ', 'btn_fsikdt')],
          [Markup.button.callback('Коммерциализация-ИИ', 'btn_fsikii')], 
          [Markup.button.callback('РФРИТ', 'btn_rfr'), 
          Markup.button.callback('Другое', 'btn_other1')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
    } catch (e) {
      console.error(e)
    }
  })
}
// Раздел 3
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
          [Markup.button.callback('Программы кредитования','btn_msp1')], [Markup.button.callback('Анкета клиента','btn_kom2'),
          Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
        ))
        } catch (e) {
        console.error(e)
      }
    })
    bot.action('btn_msp1', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Программы МСП Банка.pdf'})
      } catch (e) {
        console.error(e)
      }})
     
// На любые цели. Банк Казани
bot.action('btn_C2', async (ctx) => {
ctx.deleteMessage();
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({ source: 'functions/bot/img/loan2.jpg' });
    await ctx.replyWithHTML(text.textC2, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Документы на запрос','btn_bk1')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }})
  bot.action('btn_bk1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Документы на запрос Банк Казани.pdf'})
    } catch (e) {
      console.error(e)
    }})
  
}
// Раздел 4
// Промышленность
// Уточни форму регистрации заявителя
function addActionBot1b(id_btn, text) {
  bot.action('btn_D', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/c3.jpg' });
      await ctx.replyWithHTML('<b>Уточните форму регистрации заявителя</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('ООО', 'btn_00u')],
          [Markup.button.callback('Физическое лицо/ИП', 'btn_01u')],
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// ООО
// Какой объем выручки у компании?
  bot.action('btn_00u', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Какой объем выручки у компании?</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Менее 30 млн', 'btn_D1u')],
          [Markup.button.callback('Более 30 млн', 'btn_D2u')],
          [Markup.button.callback('Более 300 млн', 'btn_D3u')]
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// ФЛ/ИП
  bot.action('btn_01u', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML('<b>Рекомендуется программа Старт</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Старт-1', 'btn_start')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Выберите особенности проекта
// Менее 30 млн
bot.action('btn_D1u', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Старт', 'btn_start')],
        [Markup.button.callback('Акселерация', 'btn_axel')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Более 30 млн
bot.action('btn_D2u', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Выберите особенности проекта</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Разработка и освоение производства нового товара (НИОКР)', 'btn_d121')],
        [Markup.button.callback('Cоздание/расширение производства инновационного продукта', 'btn_d122')],
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
// Разработка инновационной программы
  bot.action('btn_d121', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Старт', 'btn_start')],
          [Markup.button.callback('Развитие-НТИ', 'btn_grow')],
          [Markup.button.callback('Другое', 'btn_other2')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Расширение реализации инновационной продукции
  bot.action('btn_d122', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Коммерциализация', 'btn_fsik')],
          [Markup.button.callback('Другое', 'btn_other1')],
          [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Более 300 млн
bot.action('btn_D3u', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Коммерциализация', 'btn_fsik')],
        [Markup.button.callback('ФРП', 'btn_frp')],
        [Markup.button.callback('Минпромторг', 'btn_mpt')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
}
// Старт
function addActionBot0a(id_btn, exports, preview) {
  bot.action('btn_start', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML(text.textStart, Markup.inlineKeyboard([[Markup.button.callback('Положение по конкурсу','btn_start1'), Markup.button.callback('Анкета клиента','btn_start2')],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_start3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_start1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/pole_start1.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_start2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Старт-1.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_start3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/02_Информация для ТЗ.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/03_Запрос_маркетинг.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проекта.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// Старт-ЦТ
function addActionBot0b(id_btn, exports, preview) {
  bot.action('btn_startdt', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML(text.textStartdt, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_startdt1'), Markup.button.callback('Анкета клиента','btn_startdt2')],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_start3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_start1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение Старт-ЦТ-1 (очередь V)_на сайт.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_start2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Старт-1.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_start3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/02_Информация для ТЗ.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/03_Запрос_маркетинг.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проекта.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// Старт-ИИ
function addActionBot0c(id_btn, exports, preview) {
  bot.action('btn_starti', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML(text.textStarti, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_starti1')], [Markup.button.callback('Анкета клиента','btn_start2')]],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_start3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
      ))
      } catch (e) {
      console.error(e)
    }
  })

  bot.action('btn_starti1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение Старт-ИИ (очередь VII).pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_start2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Старт-1.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_start3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/02_Информация для ТЗ.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/03_Запрос_маркетинг.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проекта.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// Акселерация
bot.action('btn_axel', async (ctx) => ctx.replyWithHTML('Раздел в разработке', Markup.inlineKeyboard(
  [Markup.button.callback('Назад в меню выбора', 'go')])));

// Коммерциализация
function addActionBot0k1(id_btn, exports, preview) {
  bot.action('btn_fsik', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/kom.jpg' });
      await ctx.replyWithHTML(text.textKom, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_kom1'), Markup.button.callback('Анкета клиента','btn_kom2')],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_kom1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение_Коммерциализация_18_на_сайт.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_kom2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Коммерциализация.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_kom3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/01_Дорожная_карта_Коммерциализация.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проектаКомм.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/2_Техническое задание_нов.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/Перечень_Коммерциализация_—_копия.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/3_Маркетинг_нов.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// Коммерциализация ЦТ
function addActionBot0k2(id_btn, exports, preview) {
  bot.action('btn_fsikdt', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/kom.jpg' });
      await ctx.replyWithHTML(text.textKomdt, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_komdt'), Markup.button.callback('Анкета клиента','btn_kom2')],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_komdt', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Pol_Komm-dt.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_kom2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Коммерциализация.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_kom3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/01_Дорожная_карта_Коммерциализация.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проектаКомм.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/2_Техническое задание_нов.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/Перечень_Коммерциализация_—_копия.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/3_Маркетинг_нов.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// Коммерциализация ИИ
function addActionBot0k3(id_btn, exports, preview) {
  bot.action('btn_fsikii', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/kom.jpg' });
      await ctx.replyWithHTML(text.textKomi, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_kom1i'), Markup.button.callback('Анкета клиента','btn_kom2')],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_kom1i', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение Коммерциализация-ИИ (очередь VI).pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_kom2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Коммерциализация.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_kom3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/01_Дорожная_карта_Коммерциализация.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проектаКомм.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/2_Техническое задание_нов.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/Перечень_Коммерциализация_—_копия.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/3_Маркетинг_нов.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// Развитие
function addActionBotGr(id_btn, exports, preview) {
  bot.action('btn_grow', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/grow.jpg' });
      await ctx.replyWithHTML(text.textGrow, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_gr1'), Markup.button.callback('Анкета клиента','btn_gr2'),
        Markup.button.callback('Перечень файлов на запрос', 'btn_gr3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_gr1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение Развитие-НТИ (проекты-маяки) (очередь III)_на сайт.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_gr2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Коммерциализация.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_gr3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/1_Дорожная_карта_Развитие.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проектаКомм.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/2_Техническое задание_нов.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/Перечень_Коммерциализация_—_копия.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/3_Маркетинг_нов.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// ФРП
function addActionBot1d(id_btn, exports, preview) {
  bot.action('btn_frp', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/frp.jpg' });
      await ctx.replyWithHTML(text.textFrp, Markup.inlineKeyboard([
        [Markup.button.callback('Памятка','btn_frp1'), Markup.button.callback('Анкета клиента','btn_frp2')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_frp1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/ФРП условия краткие.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_frp2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета по ФРП.xlsx'})
      } catch (e) {
        console.error(e)
      }})
}
// МинПромТорг
function addActionBot2d(id_btn, exports, preview) {
  bot.action('btn_mpt', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/mpt.jpg' });
      await ctx.replyWithHTML(text.textMrp, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_kom1')], [Markup.button.callback('Анкета клиента','btn_kom2')]],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_kom3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_kom1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение_Коммерциализация_18_на_сайт.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_kom2', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Коммерциализация.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_kom3', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/01_Дорожная_карта_Коммерциализация.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проектаКомм.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/2_Техническое задание_нов.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/Перечень_Коммерциализация_—_копия.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/3_Маркетинг_нов.xlsx'})
        } catch (e) {
          console.error(e)
        }})
}
// РФРИТ
function addActionBotRR(id_btn, exports, preview) {
  bot.action('btn_rfr', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/rfr.jpg' });
      await ctx.replyWithHTML('Меры поддержки', Markup.inlineKeyboard([
        [Markup.button.callback('Внедрение российских ИТ-решений','btn_rfr1')], [Markup.button.callback('Разработка отечественных ИТ-решений','btn_rfr2')],
        [Markup.button.callback('Поддержка цифровизации МСП', 'btn_rfr3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
      ]
      ))
      } catch (e) {
      console.error(e)
    }
  })
// Внедрение российских ИТ-решений
  bot.action('btn_rfr1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/rfr.jpg' });
      await ctx.replyWithHTML(text.textRfr1, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_rfrA'), Markup.button.callback('Анкета клиента','btn_rfrB')],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_rfrC')],
        [Markup.button.callback('Назад в меню выбора', 'go')]]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_rfrA', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение_Коммерциализация_18_на_сайт.pdf'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_rfrB', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Коммерциализация.docx'})
      } catch (e) {
        console.error(e)
      }})
      bot.action('btn_rfrC', async (ctx) => {
        try {
          await ctx.answerCbQuery()
          await ctx.replyWithDocument( { source: 'functions/bot/docs/01_Дорожная_карта_Коммерциализация.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проектаКомм.xlsx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/2_Техническое задание_нов.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/Перечень_Коммерциализация_—_копия.docx'}),
          await ctx.replyWithDocument( { source: 'functions/bot/docs/3_Маркетинг_нов.xlsx'})
        } catch (e) {
          console.error(e)
        }})
// Грант на разработку отечественных ИТ-решений
bot.action('btn_rfr2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({ source: 'functions/bot/img/rfr.jpg' });
    await ctx.replyWithHTML(text.textRfr2, Markup.inlineKeyboard([
      [Markup.button.callback('Положение по конкурсу','btn_rfrD'), Markup.button.callback('Анкета клиента','btn_rfrE')],
      [Markup.button.callback('Перечень файлов на запрос', 'btn_rfrF')],
      [Markup.button.callback('Назад в меню выбора', 'go')]]
    ))
    } catch (e) {
    console.error(e)
  }
})
bot.action('btn_rfrD', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение_Коммерциализация_18_на_сайт.pdf'})
  } catch (e) {
    console.error(e)
  }})
  bot.action('btn_rfrE', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Анкета Коммерциализация.docx'})
    } catch (e) {
      console.error(e)
    }})
    bot.action('btn_rfrF', async (ctx) => {
      try {
        await ctx.answerCbQuery()
        await ctx.replyWithDocument( { source: 'functions/bot/docs/01_Дорожная_карта_Коммерциализация.docx'}),
        await ctx.replyWithDocument( { source: 'functions/bot/docs/04_Анкета по участникам проектаКомм.xlsx'}),
        await ctx.replyWithDocument( { source: 'functions/bot/docs/2_Техническое задание_нов.docx'}),
        await ctx.replyWithDocument( { source: 'functions/bot/docs/Перечень_Коммерциализация_—_копия.docx'}),
        await ctx.replyWithDocument( { source: 'functions/bot/docs/3_Маркетинг_нов.xlsx'})
      } catch (e) {
        console.error(e)
      }})
// Программа поддержки цифровизации малого и среднего бизнеса
bot.action('btn_rfr3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithPhoto({ source: 'functions/bot/img/rfr.jpg' });
    await ctx.replyWithHTML('В настоящее время конкурс по данной программе не открыт. Ожидайте информации.', Markup.inlineKeyboard(
     [Markup.button.callback('Назад в меню выбора', 'go')]
    ))
    } catch (e) {
    console.error(e)
  }
})
}
// Другое1
bot.action('btn_other1', async (ctx) => ctx.replyWithHTML('Раздел в разработке', Markup.inlineKeyboard(
  [Markup.button.callback('Назад в меню выбора', 'go')])));

// Другое2
bot.action('btn_other2', async (ctx) => ctx.replyWithHTML('Раздел в разработке', Markup.inlineKeyboard(
  [Markup.button.callback('Назад в меню выбора', 'go')])));


  bot.on('text', (ctx) => ctx.reply('Нераспознанная команда. Для навигации воспользуйтесь Меню.'));
  bot.on('GIFs', (ctx) => ctx.reply('🦾'));

// Обработчик функций
addActionBot27('btn_A', text)
addActionBot23('btn_A1', text)
addActionBot2('btn_A2', text)
addActionBot1a('btn_A11', text.textA11, true)
addActionBot1('btn_A21', text.textA21, true)
addActionBot1('btn_A22', text.textA12, true)
addActionBot10c('btn_A3', text.textA3, true)
addActionBot10c('btn_A41', text.textA41, true)

// 2 раздел 
addActionBot1bY('btn_B', text)
addActionBot1bY('btn_B1', text)
addActionBot1bY('btn_B2', text)
addActionBot1b('btn_B11', text)
addActionBot1b('btn_B12', text)
addActionBot1b('btn_B111', text)
addActionBot1b('btn_B112', text)
addActionBot0a('btn_start', text, true)
addActionBot0a('btn_start1', text.textStart, true)
addActionBot0b('btn_startdt', text.textStartdt, true)
addActionBot0c('btn_starti', text.textStarti, true)
addActionBot0k1('btn_fsik', text.textKom, true)
addActionBot0k2('btn_fsikdt', text.textKom, true)
addActionBot0k3('btn_fsikii', text.textKom, true)
addActionBotRR('btn_rfr', text, true)
addActionBotRR('btn_rfr1', text.textRfr1, true)
addActionBotRR('btn_rfr2', text.textRfr2, true)
addActionBotRR('btn_rfr3', text.textRfr2, true)
addActionBotGr('btn_grow', text.textGrow, true)
// 3 раздел
addActionBotC('btn_С', text)
addActionBotС1('btn_С1', text.textС1, true)
addActionBotС1('btn_С2', text.textС2, true)
// 4 раздел
addActionBot1d('btn_frp', text.textFrp, true)
addActionBot2d('btn_mpt', text.textMrp, true)


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
