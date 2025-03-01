window.addEventListener("load", () => {
    buildNavbar(["library", "modlists", "piano"]);
});

function buildNavbar(related) {
    const navbar = document.getElementById("navigation-bar");
    related.forEach(element => {
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = firstCapitalized(element);
        btn.addEventListener("click", () => window.open("../" + element + "/index.html", "_self"));
    });
}

const firstCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
