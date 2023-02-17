const val = 0;

async function getUser(val) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data[val].body
  } catch (error) {
    console.error(error);
  }
}

let btn1 = document.querySelector('button1.button');
let btn2 = document.querySelector('button2.button');
let email = document.querySelector('p.email');
let comments = document.querySelector('p.comments');



btn1.addEventListener('click', async ()=> {
    val += 1;
    let znach =await getUser(pole.valueAsNumber)
    email.innerText = await getUser(pole.valueAsNumber)
})

btn2.addEventListener('click', async ()=> {
    let znach =await getUser(pole.valueAsNumber)
    text.innerText = await getUser(pole.valueAsNumber)
})