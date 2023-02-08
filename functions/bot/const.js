const commands = `
/start - Перезапустить бота
/help - Помощь
/go - Подбор программы
/info - Грантовые программы
/faq - Частые вопросы
`
const start_anketa = `<u>Анкета по конкурсу</u> <a href="https://drive.google.com/file/d/1oGhvfgAUArIJq54_Ne_HWJObYCmQRsv-/view">ссылка</a>`

const start_polozhenie = `<u>Положение по конкурсу</u> <a href="https://fasie.ru/upload/docs/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%A1%D1%82%D0%B0%D1%80%D1%82-1%202022.3_%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82.pdf">ссылка</a>`

const start_uslovia = `<u>Старт-1</u>
Размер гранта	
До 4 млн руб
Срок гранта	1 год
Внебюджетное софинансирование	Не требуется	
Направление расходов	Проведение НИОКР. Подробный перечень расходов	
Участники	Физ.лица или юр.лица.
`

const text1 = `
1. <u>Положение Старт-1</u> <a href="https://fasie.ru/upload/docs/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%A1%D1%82%D0%B0%D1%80%D1%82-1%202022.3_%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82.pdf">тык</a>

2. Четверостишия

Бычок

Идет бычок, качается,
Вздыхает на ходу:
- Ох, доска кончается,
Сейчас я упаду!

Зайка

Зайку бросила хозяйка -
Под дождем остался зайка.
Со скамейки слезть не мог,
Весь до ниточки промок.

Мишка

Уронили мишку на пол,
Оторвали мишке лапу.
Все равно его не брошу -
Потому что он хороший.
`
const text2 = `
<i>Старт-1</i> 
Размер гранта	
До 4 млн руб
Срок гранта	1 год
Внебюджетное софинансирование	Не требуется	
Направление расходов	Проведение НИОКР. Подробный перечень расходов	
Участники	Физ.лица или юр.лица.
`
const text3 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка без превью</a> <s>Зачёркнутый текст</s> и <code>Моноширинный текст</code>
`

const text4 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://www.fasie.ru/programs/programma-razvitie/#uslovia">ссылка с превью</a>
`
const text5 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка с превью</a> <s>Зачёркнутый текст</s> и <code>Моноширинный текст</code>
`

const text6 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка с превью</a>
`
const text7 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка с превью</a> <s>Зачёркнутый текст</s> и <code>Моноширинный текст</code>
`

const text8 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка с превью</a>
`

const textA2 = `
3 <u>Клиенту рекомендована </u> <a href="https://fasie.ru/upload/docs/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%A1%D1%82%D0%B0%D1%80%D1%82-1%202022.3_%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82.pdf">программа Старт-1</a>
`

module.exports.commands = commands
module.exports.text = text1
module.exports.text2 = text2
module.exports.text3 = text3
module.exports.text4 = text4
module.exports.text5 = text5
module.exports.text6 = text6
module.exports.text7 = text7
module.exports.text8 = text8
module.exports.textA2 = textA2
module.exports.start_anketa = start_anketa
module.exports.start_polozhenie = start_polozhenie
module.exports.start_uslovia = start_uslovia