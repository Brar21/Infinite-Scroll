const container=document.querySelector('.container')
const url='https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${count}'

let limit=5;
let count=1;
let posts=1
async function getImages()
{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${count}`)
    const data=await res.json()
    console.log(data)
    data.map((el,index) =>
    {
        let container=document.querySelector('.container')
        const data=`
        <p class='number'>${el.id}</p>
    <h1 class='title'>${el.title}</h1>
        `
        let div=document.createElement('div')
        //let number=document.createElement('p')
        //number.classList.add('number')
        //number=el.id
        //let title=document.createElement('h1')
        //title.classList.add('title')
        //title=el.title
        container.insertAdjacentHTML('beforeend',data)
        //container.append(div)
    })
}
getImages()
