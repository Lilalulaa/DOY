//импорт токена из файла config.js
import {TOKEN} from './config.js' 

//добавление модуля express и кладем в переменню js для работы с ним
import express from 'express'

//подключаем telegraf
import {Telegraf} from 'telegraf'

//инициализация приложения через express
const app = express()

//создаем экземпляр класса и кладем его в переменную bot
const bot = new Telegraf(TOKEN);

//процесс настройки бота сработает когда пользователь введет /start

bot.start((ctx) => {
    console.log(ctx.message.from.first_name)
    ctx.reply(`Hello ${ctx.message.from.first_name}!`)
})

let bes = false
let i = 0


bot.command('help', (ctx) => {
    ctx.reply(`Hello!`)
})

bot.command('bes', (ctx) => {
    bes = true
    setInterval(()=>{
        ctx.reply(`${i++}`)
    }, 1000)
})

// bot.on('text', (ctx) => {
//     //console.log(ctx.massage.text)
//     ctx.reply(`${ctx.message.text}`)
// })

//запуск бота
bot.launch()