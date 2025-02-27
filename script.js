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
        container.appendChild(card);

        const title = document.createElement("h3");
        fetch("https://raw.githubusercontent.com/" + repository.owner.login + "/" + repository.name + "/main/README.md")
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error("Couldn't pull the README file for repository " + repository.full_name + ".");
                }
            })
            .then(contents => title.textContent = contents.substring(2, contents.indexOf("\n")))
            .catch(error => {
                console.error(error);
                title.textContent = makeLegible(repository.name);
            });
        card.appendChild(title);

        const description = document.createElement("p");
        description.textContent = repository.description || "";
        card.appendChild(description);

        const repoUrl = document.createElement("a");
        repoUrl.textContent = "View repository";
        repoUrl.href = repository.html_url;
        card.appendChild(repoUrl);

        if (repository.homepage) {
            const webUrl = document.createElement("a");
            webUrl.textContent = "View website";
            webUrl.href = repository.homepage;
            card.appendChild(webUrl);
        }
    });
}

function makeLegible(str) {
    return str.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}
