import { Button, ImgButton } from "./Button.js";

window.addEventListener("load", () => {
    const navbar = document.getElementById("navigation-bar");

    navbar.appendChild(new Button("pages/library.html", "Library", "button").create());
    navbar.appendChild(new Button("pages/modlists.html", "Modlists", "button").create());
    navbar.appendChild(new Button("pages/piano.html", "Piano", "button").create());
    navbar.appendChild(new ImgButton("https://github.com/kareiku", "assets/icons/github-mark.svg", "icon").create());
});
