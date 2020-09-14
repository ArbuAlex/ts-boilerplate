import { Telegraf } from 'telegraf'
import { exit } from 'process'

const botToken = process.env.BOT_TOKEN
if (!botToken) exit()
const bot = new Telegraf(botToken)

bot.hears(/.*/, (ctx) => {
    const text = ctx.message?.text ||"NO text argument" 
    ctx.reply(text);
})

bot.launch()