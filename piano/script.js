class Note {
    constructor(name, keys) {
        this.name = name;
        this.keys = keys;
        this.noteAudio = new Audio(`notes/${this.name}.mp3`);
        this.noteDomElement = document.querySelector(`.${this.name}`)
    }

    play() {
        const clone = this.noteAudio.cloneNode();
        clone.play();
        setTimeout(() => (clone.volume = 0.8), 400);
        setTimeout(() => (clone.volume = 0.6), 800);
        setTimeout(() => (clone.volume = 0.4), 1200);
        setTimeout(() => (clone.volume = 0.2), 1600);
        setTimeout(() => (clone.pause()), 2000);
        this.noteDomElement.classList.add("active");
        setTimeout(() => this.noteDomElement.classList.remove("active"), 200)
    }

    blindListeners() {
        this.noteDomElement.addEventListener("click", () => this.play());
        this.keys.forEach(key => {
            window.addEventListener("keydown", (keyDownEvent) => {
                if (key === keyDownEvent.keyCode) this.play();
            });
        });
    }
}

const noteList = [
    new Note("C4", [65]),
    new Note("Db4", [87]),
    new Note("D4", [83]),
    new Note("Eb4", [69]),
    new Note("E4", [68]),
    new Note("F4", [70]),
    new Note("Gb4", [84]),
    new Note("G4", [71]),
    new Note("Ab4", [89]),
    new Note("A4", [72]),
    new Note("Bb4", [85]),
    new Note("B4", [74]),
    new Note("C5", [75]),
    new Note("Db5", [79]),
    new Note("D5", [76]),
    new Note("Eb5", [80]),
    new Note("E5", [192])
]

noteList.forEach(note => note.blindListeners());