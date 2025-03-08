export class Button {
    #url = "";
    #text = "";
    #classes = [];

    constructor(url, text, ...classes) {
        this.#url = url;
        this.#text = text;
        this.#classes = classes;
    }

    create() {
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = this.#text;
        this.#classes.forEach(c => btn.classList.add(c));
        btn.addEventListener("click", () => window.open(this.#url, "_self"));
        return btn;
    }
}

export class ImgButton {
    #url = "";
    #img = "";
    #classes = [];

    constructor(url, img, ...classes) {
        this.#url = url;
        this.#img = img;
        this.#classes = classes;
    }

    create() {
        const a = document.createElement("a");
        const img = document.createElement("img");
        a.href = this.#url;
        img.src = this.#img;
        this.#classes.forEach(c => img.classList.add(c));
        a.appendChild(img);
        return a;
    }
}
