// Кредитование
function addActionBot12(id_btn, text) {
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
function addActionBotС(id_btn, exports, preview) {
  bot.action('btn_C1', async (ctx) => {
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
bot.action('btn_C1', async (ctx) => {
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
addActionBotС('btn_С2', text.textС1, true)
addActionBotС('btn_С3', text.textС2, true)