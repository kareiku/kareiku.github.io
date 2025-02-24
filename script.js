window.addEventListener("load", () => {
    fetch("https://api.github.com/users/kareiku/repos")
        .then(response => response.json())
        .then(repositories => writeRepos(repositories))
        .catch(error => console.error(error));
    playBackgroundMusic("bg-music.wav");
});

function playBackgroundMusic(path) {
    if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
        const audio = document.createElement("audio");
        audio.src = path;
        document.body.appendChild(audio);
        audio.volume = .025;
        audio.loop = true;
        audio.play();
    }
}

function writeRepos(repositories) {
    const container = document.getElementById("repo-cards-container");
    repositories.forEach(repository => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = repository.name;
        card.appendChild(title);

        const description = document.createElement("p");
        description.textContent = repository.description || "";
        card.appendChild(description);

        const link = document.createElement("a");
        link.href = repository.homepage || repository.html_url;
        link.textContent = "View repository";
        card.appendChild(link);

        container.appendChild(card);
    });
}
