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
        let number=document.createElement('p')
        number=el.id
        let title=document.createElement('h1')
        title=el.title
        container.append(number,title)
    })
}
getImages()
