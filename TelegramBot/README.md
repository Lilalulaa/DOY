# Telegram bot

## Оглавление

1. [Создание бота](#botCreatetion)
2. [Создание шаблона бота](#botNote)

____

<a name="botCreatetion"></a>

## Создание бота
1. Захотим в телеграм и ищем @BotFather
2. Вводим комманду /newbot
3. Вводим имя бота
4. Копируем в токен
5. Изменение фото бота
/setuerpic
@bot_name
____


<a name="botNote"></a>

## Создание шаблона бота

1. Создать проект Node.js:
```
npm init -y
```

2. Добавим пакеты для работы
```
npm i nodemon
npm i telegraf
```
- nodemon - пакет для атвоматического перезапуска при изменении
- telegraf - фреймворк для работы с ботом

3. Создадим **ГЛАВНЫЙ** файл index.js и пропишем в него код:
```javascript
//добавление модуля express и кладем в переменню js для работы с ним
import express from 'express'

//подключаем telegraf
import {Telegraf} from 'telegraf'

//инициализация приложения через express
const app = express()

//создаем экземпляр класса и кладем его в переменную bot
const bot = new Telegraf(TOKEN);

//процесс настройки бота

bot.start((ctx) => {
    ctx.replay('Hello world!')
})


//запуск бота
bot.launch()
```
4. Создадим файл config.js и пропишем в него код:
```js
export const TOKEN = 'bot_token'
```

5. Внесем изменения в package.json:
```json
{
  "name": "telegrambot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^2.0.20",
    "telegraf": "^4.11.2"
  },
  "type": "module"
}
```
- добавили поле "type": "module"
- настроили skripts

6. Запускае бота:
```
npm run start
```