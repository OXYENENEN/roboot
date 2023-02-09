// Функция Вывода вопроса и текста
function addActionBot1(id_btn, text) {
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
        })}
// Действие бота по выводу только текста
bot.action('btn_FL_2', async (ctx) => {
          try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML('<b>Клиенту рекомендована программа Агростартап</b>')
          } catch (e) {
            console.error(e)
}})


// Функция экспорта текста, ссылки на документ
function addActionBot(id_btn, exports, preview) {
        // ФСИ
          bot.action('btn_i1', async (ctx) => {
            try {
              await ctx.answerCbQuery()
              await ctx.replyWithHTML(text.text2)
            } catch (e) {
              console.error(e)
            }
 })}