// Промышленность
// Уточни форму регистрации заявителя
function addActionBot1b(id_btn, text) {
  bot.action('btn_D', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/c3.jpg' });
      await ctx.replyWithHTML('<b>Уточни форму регистрации заявителя</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('ООО', 'btn_D1')],
          [Markup.button.callback('Физическое лицо/ИП', 'btn_D2')],
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// ООО
// Какой объем выручки у компании?
  bot.action('btn_D1', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithHTML('<b>Какой объем выручки у компании?</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Менее 30 млн', 'btn_D11')],
          [Markup.button.callback('Более 30 млн', 'btn_D12')],
          [Markup.button.callback('Более 800 млн', 'btn_D13')]
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// ФЛ/ИП
  bot.action('btn_D2', async (ctx) => {
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
// Менее 30 млн
bot.action('btn_D11', async (ctx) => {
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

// Более 30 млн
bot.action('btn_D12', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Выберите особенности проекта</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Разработка инновационной продукции', 'btn_d121')],
        [Markup.button.callback('Расширение производства инновационной продукции', 'btn_d122')],
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
          [Markup.button.callback('Развитие', 'btn_grow')],
          [Markup.button.callback('Другое', 'btn_other2')],
        ]
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
          [Markup.button.callback('Другое', 'btn_other1')],]
      ))
    } catch (e) {
      console.error(e)
    }
  })
// Более 800 млн
bot.action('btn_D13', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Рекомендуются следующие программы</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Коммерциализация', 'btn_fsik')],
        [Markup.button.callback('ФРП', 'btn_frp')],
        [Markup.button.callback('Минпромторг', 'btn_mpt')],
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})
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
// ФРП
function addActionBot1d(id_btn, exports, preview) {
  bot.action('btn_frp', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/frp.jpg' });
      await ctx.replyWithHTML(text.textFrp, Markup.inlineKeyboard([
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
// МинПромТорг
function addActionBot2d(id_btn, exports, preview) {
  bot.action('btn_mpt', async (ctx) => {
    try {
      await ctx.answerCbQuery()
      await ctx.replyWithPhoto({ source: 'functions/bot/img/mpt.jpg' });
      await ctx.replyWithHTML(text.textMrp, Markup.inlineKeyboard([
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
addActionBot1d('btn_frp', text.textFrp, true)
addActionBot2d('btn_mpt', text.textMrp, true)
