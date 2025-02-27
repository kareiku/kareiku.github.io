window.addEventListener("load", () => {
    fetch("https://api.github.com/users/kareiku/repos")
        .then(response => response.json())
        .then(repositories => writeRepos(repositories))
        .catch(error => console.error(error));
});

function writeRepos(repositories) {
    const container = document.getElementById("card-container");
    repositories.forEach(repository => {
        const card = document.createElement("div");
        card.className = "card";
        card.addEventListener("click", () => window.open((repository.homepage || repository.html_url), "_self"));
        container.appendChild(card);

        const title = document.createElement("h3");
        title.textContent = repository.name;
        card.appendChild(title);

        const description = document.createElement("p");
        description.textContent = repository.description || "";
        card.appendChild(description);
    });
}
