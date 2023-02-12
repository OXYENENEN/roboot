// IT
// Уточни форму регистрации заявителя
function addActionBot1b(id_btn, text) {
  bot.action('btn_B', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/dt.jpg' });
      await ctx.replyWithHTML('<b>Уточни форму регистрации заявителя</b>', Markup.inlineKeyboard(
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
      await ctx.replyWithHTML('<b>Как долго зарегистрировано ЮЛ?я</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Больше года', 'btn_B11')],
          [Markup.button.callback('Меньше года', 'btn_B12')],
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
          [Markup.button.callback('Старт-1', 'btn_Start')],
          [Markup.button.callback('Старт-ЦТ', 'btn_Startdt')],
          [Markup.button.callback('Старт-ИИ', 'btn_StartI')]
        ]
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
      await ctx.replyWithHTML('<b>Выберите особенности проектая</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Разработка инновационной продукции', 'btn_B111')],
          [Markup.button.callback('Расширение реализации инновационной продукции', 'btn_B112')],
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
          [Markup.button.callback('Старт', 'btn_start')],
          [Markup.button.callback('Акселерация', 'btn_axel')],
        ]
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
          [Markup.button.callback('Развитие', 'btn_grow')],
          [Markup.button.callback('Другое', 'btn_other2')],
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
        [
          [Markup.button.callback('Коммерциализация', 'btn_fsik')],
          [Markup.button.callback('Коммерциализация-ЦТ', 'btn_fsikdt')],
          ], [Markup.button.callback('Коммерциализация-ИИ', 'btn_fsikii'), 
          [Markup.button.callback('РФРИТ', 'btn_rfr')], 
          [Markup.button.callback('Другое', 'btn_other1')],],
      ))
    } catch (e) {
      console.error(e)
    }
  })
}
// Старт
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_start', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML(text.textStart, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_start1')], [Markup.button.callback('Анкета клиенту','btn_start2')]],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_start3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
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
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_Startdt', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML(text.textStart, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_start1')], [Markup.button.callback('Анкета клиенту','btn_start2')]],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_start3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
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
// Старт-ИИ
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_StartI', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/start.jpg' });
      await ctx.replyWithHTML(text.textStart, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_start1')], [Markup.button.callback('Анкета клиенту','btn_start2')]],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_start3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
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
// Акселерация
bot.command('btn_axel', async (ctx) => ctx.replyWithHTML('Раздел в разработке'));

// Коммерциализация
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_fsik', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/kom.jpg' });
      await ctx.replyWithHTML(text.textKom, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_kom1')], [Markup.button.callback('Анкета клиенту','btn_kom2')]],
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
// Коммерциализация ЦТ
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_fsikdt', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/kom.jpg' });
      await ctx.replyWithHTML(text.textKom, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_kom1')], [Markup.button.callback('Анкета клиенту','btn_kom2')]],
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
// Коммерциализация ИИ
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_fsikii', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/kom.jpg' });
      await ctx.replyWithHTML(text.textKom, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_kom1')], [Markup.button.callback('Анкета клиенту','btn_kom2')]],
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
// Развитие
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_grow', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/grow.jpg' });
      await ctx.replyWithHTML(text.textGrow, Markup.inlineKeyboard([
        [Markup.button.callback('Положение по конкурсу','btn_gr1')], [Markup.button.callback('Анкета клиенту','btn_gr2')]],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_gr3')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
      ))
      } catch (e) {
      console.error(e)
    }
  })
  bot.action('btn_gr1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithDocument( { source: 'functions/bot/docs/Положение_Коммерциализация_18_на_сайт.pdf'})
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
function addActionBot2b(id_btn, exports, preview) {
  bot.action('btn_rfr', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/rfr.jpg' });
      await ctx.replyWithHTML('Меры поддержки', Markup.inlineKeyboard([
        [Markup.button.callback('Внедрение российских ИТ-решений','btn_rfr1')], [Markup.button.callback('Разработка отечественных ИТ-решений','btn_rfr2')]],
        [Markup.button.callback('Поддержка цифровизации МСП', 'btn_rfr3')]
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
        [Markup.button.callback('Положение по конкурсу','btn_rfrA')], [Markup.button.callback('Анкета клиенту','btn_rfrB')]],
        [Markup.button.callback('Перечень файлов на запрос', 'btn_rfrC')],
        [Markup.button.callback('Назад в меню выбора', 'go')]
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
      [Markup.button.callback('Положение по конкурсу','btn_rfrD')], [Markup.button.callback('Анкета клиенту','btn_rfrE')]],
      [Markup.button.callback('Перечень файлов на запрос', 'btn_rfrF')],
      [Markup.button.callback('Назад в меню выбора', 'go')]
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
    await ctx.replyWithPhoto({ source: 'functions/bot/img/kom.jpg' });
    await ctx.replyWithHTML(text.textKom3, Markup.inlineKeyboard([
     [Markup.button.callback('Назад в меню выбора', 'go')]]
    ))
    } catch (e) {
    console.error(e)
  }
})
}
// Другое1
bot.command('btn_other1', async (ctx) => ctx.replyWithHTML('Раздел в разработке'));
// Другое2
bot.command('btn_other2', async (ctx) => ctx.replyWithHTML('Раздел в разработке'));
// Обработчик функций
addActionBot1b('btn_B1', text)
addActionBot1b('btn_B2', text)
addActionBot1b('btn_B11', text)
addActionBot1b('btn_B12', text)
addActionBot1b('btn_B111', text)
addActionBot1b('btn_B112', text)
addActionBot2b('btn_start', text.textStart, true)
addActionBot2b('btn_fsik', text.textKom, true)
addActionBot2b('btn_rfr1', text.textRfr1, true)
addActionBot2b('btn_rfr2', text.textRfr2, true)
addActionBot2b('btn_rfr3', text.textRfr2, true)
addActionBot2b('btn_grow', text.textGrow, true)

btn_grow
btn_other2
btn_fsik
btn_fsikdt
btn_fsikii
btn_rfr
btn_other1
btn_kom1
btn_kom2
btn_kom3


btn_ba1
btn_ba2
