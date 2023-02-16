//------------------------! импорты !-------------------------------//
//импорт токена из файла config.js
import {TOKEN} from './config.js' 

//добавление модуля express и кладем в переменню js для работы с ним
import express from 'express'

//подключаем telegraf
import {Telegraf} from 'telegraf'

//======! установка команды dotenv !======//
import dotenv from 'dotenv'

//======! установка команды fetch !======//
import fetch  from "node-fetch"

//инициализация приложения через express
const app = express()


//-----------------------------! бот !-----------------------------//
//создаем экземпляр класса и кладем его в переменную bot
const bot = new Telegraf(TOKEN);


//процесс настройки бота сработает когда пользователь введет /start

bot.start((ctx) => {
    console.log(ctx.message.from.first_name) //вывод имени юзера в консоль
    ctx.reply(`Здравствуй ${ctx.message.from.first_name}!`)
})

//-----------------------------------------------------------------//

bot.command('help', (ctx) => {
    ctx.reply(`${ctx.message.from.first_name}, ничем тебе помочь не могу(`)
})

//========================! рандом котэ !=========================//

bot.hears('дай кота', async (ctx) => {
    const response = await fetch("https://aws.random.cat/meow");
    const data = await response.json();
    return ctx.replyWithPhoto(data.file);
  });

//-----------------------------------------------------------------//

bot.hears('как дела?', (ctx) => ctx.reply('Отлично, как никогда!'));

//-----------------------------------------------------------------//

bot.hears('пока', (ctx) => ctx.reply(`Чао, ${ctx.message.from.first_name}`));

//-----------------------------------------------------------------//

bot.hears('хочу чебупиццы', ctx => {
    ctx.replyWithPhoto(
        'https://avatars.dzeninfra.ru/get-zen_doc/1874839/pub_5e38fc695b4a3e23cf825c7a_5e38fd8b066d193cec294095/scale_1200',
        {
            caption: 'На, поешь!'
        }
    )
})

//-----------------------------------------------------------------//

bot.hears('сделай комплимент', ctx => {
    ctx.replyWithPhoto(
        'https://i.pinimg.com/564x/ce/d4/bb/ced4bb53889f234181f0f415786c4801.jpg',
        {
            caption: ''
        }
    )
})

//-----------------------------------------------------------------//

bot.hears('который час?', ctx => {
    ctx.reply(String(new Date()))
})

//-----------------------------------------------------------------//

bot.hears('покажи мужа Олеси', ctx => {
    ctx.replyWithPhoto(
        'https://i.pinimg.com/564x/7a/10/09/7a10090f836c5c925c4624a6fda7bed3.jpg',
        {
            caption: 'Самый сасный дед Мондштадта'
        }
    )
})


//-----------------------------------------------------------------//
//запуск бота
bot.launch()


//--------------------------! дразнилка !--------------------------//
//   bot.on('text', (ctx) => {
//     //console.log(ctx.massage.text)
//     ctx.reply(`${ctx.message.text}`)
// })

//-----------------------------------------------------------------//

// let bes = false
// let i = 0

// bot.command('bes', (ctx) => {
//     bes = true
//     setInterval(()=>{
//         ctx.reply(`${i++}`)
//     }, 1000)
// })

    