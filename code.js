//1 способ
function HelloWorld (){
    return <h1>Hello world!</h1>
}

//2 способ
const HelloWorld = () =>{
    return <h1>Hello world!</h1>
}

//3 способ - классовый (вымер)

class HelloWorld extends Comment {
    render(){
        return <h1>Hello world!</h1>
    }
}

