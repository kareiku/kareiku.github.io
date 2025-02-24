window.addEventListener("load", () => {
    buildNavbar(["library", "modlists", "piano"]);
});

function buildNavbar(pagenames) {
    const navbar = document.getElementById("navigation-bar");
    pagenames.forEach(element => {
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = firstCapitalized(element);
        btn.className = "button";
        btn.addEventListener("click", () => window.open(`pages/${element}.html`, "_self"));
        navbar.appendChild(btn);
    });

    const githubBtn = document.createElement("a");
    githubBtn.href = "https://github.com/kareiku";

    const githubImg = document.createElement("img");
    githubImg.className = "icon";
    githubImg.src = "assets/icons/github-mark.svg";
    githubBtn.appendChild(githubImg);

    navbar.appendChild(githubBtn);

    const gistsBtn = document.createElement("a");
    gistsBtn.href = "https://gists.github.com/kareiku";

    const gistsImg = document.createElement("img");
    gistsImg.className = "icon";
    gistsImg.src = "assets/icons/github-mark-white.svg";
    gistsBtn.appendChild(gistsImg);

    navbar.appendChild(gistsBtn);
}

const firstCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
