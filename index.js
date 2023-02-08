const container = document.querySelector(".container");
const url =
  "https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${count}";

let limit = 5;
let count = 1;
let posts = 1;
async function getImages() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${count}`
  );
  const data = await res.json();
  console.log(data);
  data.map((el, index) => {
    let container = document.querySelector(".container");
    const data = `
        <div>
        <p class='number'>${el.id}</p>
        <h1 class='title'>${el.title}</h1>
        <p class='body'>${el.body}</p>
         </div>
        `;

    container.insertAdjacentHTML("beforeend", data);
  });
}
getImages();
