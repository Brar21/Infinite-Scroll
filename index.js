const container=document.querySelector('.container')
const url='https://api.adorable.io/avatars/'

function getImages(n=10)
{
    let i=0;
    while(i<n)
    {
        const img=document.createElement('img')
        img.src=`${url}${getRandom()}`
        container.appendChild(img)
        i++
    }
}

function getRandom()
{
    Math.floor(Math.random()*100)
}