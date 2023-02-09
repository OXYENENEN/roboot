// Сельское хозяйство
function addActionBot1(id_btn, text) {
    bot.action('btn_A', async (ctx) => {
      try {
        await ctx.replyWithHTML('<b>Уточни форму регистрации заявителя</b>', Markup.inlineKeyboard(
          [
            [Markup.button.callback('ООО', 'btn_A1')],
            [Markup.button.callback('ИП/КФХ', 'btn_A2')],
            [Markup.button.callback('Кооператив', 'btn_A3')],
            [Markup.button.callback('Физическое лицо', 'btn_A4')]
          ]
        ))
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

function addActionBot(id_btn, exports, preview) {
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





// Обработчик функций
addActionBotA('btn_A', text)
addActionBotA11('btn_A11', text.textA11, false)
addActionBotA12('btn_A12', text.textA12, false)