let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
*D O N A T I O N  O W N E R*

*SAWERIA:* https://saweria.co/inirey
*TRAKKER:* https://trakteer.id/erzabot/tip

*D O N A T I O N  P E N I L I S*

*SAWERIA:* https://saweria.co/ariffb
*TRAKKER:* https://trakteer.id/ariffb/tip
`.trim(), '© Erza Bot', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
