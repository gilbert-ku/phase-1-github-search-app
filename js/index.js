const form = document.getElementById("github-form");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const search = document.getElementById("search").value;
    let originalName = search.split(" ").join(" ");

    document.getElementById("repos-list").innerHTML = "";

    fetch('https://api.github.com/search/users?q=' + originalName)
        .then(response => response.json())
        .then((jsData) => {
            console.log(jsData);

            if (jsData.items && jsData.items.length > 0) {
                const avatarUrl = jsData.items[0].avatar_url;
                document.getElementById("repos-list").innerHTML = `
                    
                <a target="_blank" href="https://www.github.com/${originalName}">
                <img src="${avatarUrl}"/>
                </a>
                `;
            }
        });
});