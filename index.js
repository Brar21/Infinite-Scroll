const container=document.querySelector('.container')
const url='http://api.adorable.io/avatars/'

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
getImages()
function getRandom()
{
    Math.floor(Math.random()*100)
}