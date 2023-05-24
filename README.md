React — это JavaScript-библиотека для разработки пользовательского интерфейса. 
https://react.dev/

## Компоненты
- Компоненты можно использовать **многократно**
- Компоненты формируют четкую **иерархическую структуру**
- Видом компонента можно управлять извне с помощью **свойств**
- Компоненты могут иметь свое собственное **состояние**
- Каждый компонент отвечает за отдельную логическую часть интерфейса


```js
function Lupa(){
    return <h1>Hello</h1>
            not html=>jsx
}
```

```css
style.css

h1{
    color: red;
}
```

## Создание компонентов с загалавновной:

1 способ - функциональные

```js
function HelloWorld (){
    return <h1>Hello world!</h1>
}
```
2 способ

```js
const HelloWorld = () =>{
    return <h1>Hello world!</h1>
}
```

3 способ - классовые компоненты (вымерли)

```js
class HelloWorld extends Comment {
    render(){
        return <h1>Hello world!</h1>
    }
}
```

## JSX
JSX (javascript syntax extentions) - синтаксис, позволяющий объеденить html (язык разметки) css js для формирования компонентов в react.

- **пользовательские** компоненты - буква **Заглавная** (MyComp, HelloWorld)
- **встроенные** компоненты - буква **прописная** (h1, p, div)

## **JSX должен иметь один корневой компонент**

```js
function Lupa(){
    return  <div>
            <h1>Hello</h1>
            <p>lorem...</p>
            </>
}
```

Валидный код JSX:

```JSX
return{
    <div>
        <h1>JSX в React</h1>
        <p>JSX в похож на html</p>
    </div>
}
```

Невалидный код JSX:

```JSX
return{
        <h1>JSX в React</h1>
        <p>JSX в похож на html</p>
}
```

___

## Колбэки (CallBack)

**callback** - это функция, которая будет передана и вызвана внутри другой функции.

```js
function test(callback){
    callback()
}

test(()=>{
    console.log('Hello')
})
```

## Node and npm

!! Установка node: nodejs.org

!! Установка npm: устанавливается автоматически вместе с node 

```
node -v
npm -v
```
!! Обновление:
- node:
    ```
    npm update node -g
    ```

- npm:
    ```
    npm update npm -g
    ```

!! Запуск пакета локально:

```
 npx package_name
```

```
 npx create-react-app .
```

# Create React App

## Доступные команды
- `npm start` - запуск сервера обработки
- `npm test` - объединяем приложения в статические файлы для продакшн
- `npm run build` - запускает тестовый бегун (мы их прописываем сами)
- `npm run eject` - отвязывает react от create-react-app (ПУТИ ОБРАТНО НЕТ!)

## файлы после установки Create React App
public:
- public\index.html  - файл куда монтируется приложение
- public\mainfest.json - прописаны пути для иконок на различные устройства
- public\robots.txt - иструкции для роботов-ботов, которые сканируют веб-сайт

src:
- src\index.js - импортирует ReactDom в public\index.html 
- src\app.js - модуль, который возвращает jsx код (не html), используя команду export default App
- src\App.css - стили модуля
- src\index.css - стили сайта
- src\setupTests.js - модуль тестирования сайта

.gitignore - файлы, которые будут игнорироваться и не загружаться в github

npm i