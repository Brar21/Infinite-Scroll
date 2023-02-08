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
    data.forEach((el,index) =>
    {
        let container=document.querySelector('.container')
        let div=document.createElement('div')
        let number=document.createElement('p')
        number.classList.add('number')
        number=el.id
        let title=document.createElement('h1')
        title.classList.add('title')
        title=el.title
        div.append(number,title)
        container.append(div)
    })
}
getImages()
