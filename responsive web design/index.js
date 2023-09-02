
var postApi = fetch('https://jsonplaceholder.typicode.com/posts');

postApi
    .then((repon) => {
        console.log(repon)
        return repon.json();
    })

    .then((datas) => {
        var html = datas.map((data) => {
            return `
               <li>
               <h2>${data.title}</h2>
               <p>${data.body}</p>
               </li>
             `
        })
        document.querySelector('.box').innerHTML = html;
    })