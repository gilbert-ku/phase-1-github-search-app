

// const form = document.getElementById("github-form");
// // const search =document.getElementById("search")
// const submit = document.getElementById("submit");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // alert("hello")
//     // console.log("search value: ", search) 
//     const search = document.getElementById("search").value;
   
    
//     let originalName = search.split(" ").join(" ")

//     document.getElementById("repos-list").innerHTML = ""

//     fetch('https://api.github.com/search/users?q='+originalName)
//     .then( 
//     (response) => {
//     return response.json();
// })

// .then((jsData) => {
//     console.log(jsData);

//     // const report = document.getElementById("repos-list")
//     document.getElementById("repos-list").innerHTML = `
//         <img src="${jsData.avatarUrl}"/>
//     `;
// })
// });
// .then((jsData) => {
//     console.log(jsData);

//     if (jsData && jsData.avatar_url) {
//         document.getElementById("repos-list").innerHTML = `
//             img.src="jsData.avatar_url" alt="User Avatar"/>
//         `;
//     }
// })
// })


