class Piano {
    constructor(pianoId, ...keys) {
        const piano = document.getElementById(pianoId);
        keys.forEach(key => piano.appendChild(key.create()));
    }
}

class Key {
    #note = "";
    #frequency = Number.NaN;
    #code = Number.NaN;
    #letter = "";
    #classes = null;

    constructor(note, frequency, code, letter, ...classes) {
        this.#note = note;
        this.#frequency = frequency;
        this.#code = code;
        this.#letter = letter;
        this.#classes = Array.of(...classes);
    }

    create() {
        const element = document.createElement("div");
        this.#classes.forEach(c => element.classList.add(c));

        const label = document.createElement("text");
        label.textContent = this.#letter;
        label.className = "key-letter";
        element.appendChild(label);

        element.addEventListener("click", () => {
            this.#play(element);
        });

        document.addEventListener("keydown", keyDownEvent => {
            if (this.#code === keyDownEvent.keyCode) {
                this.#play(element);
            }
        });

        return element;
    }

    async #play(element) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        const response = await fetch(`/assets/piano-notes/${this.#note}.mp3`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);

        source.start(0, 0, 1.2);
        element.classList.add("active");
        setTimeout(() => element.classList.remove("active"), 200);
    }
}

window.addEventListener("load", () =>
    new Piano("piano",
        new Key("C4", 261.63, 65, "A", "C4", "white-key", "left-key"),
        new Key("Db4", 277.18, 87, "W", "Db4", "black-key"),
        new Key("D4", 293.66, 83, "S", "D4", "white-key"),
        new Key("Eb4", 311.13, 69, "E", "Eb4", "black-key"),
        new Key("E4", 329.63, 68, "D", "E4", "white-key"),
        new Key("F4", 349.23, 70, "F", "F4", "white-key"),
        new Key("Gb4", 369.99, 84, "T", "Gb4", "black-key"),
        new Key("G4", 392.00, 71, "G", "G4", "white-key"),
        new Key("Ab4", 415.30, 89, "Y", "Ab4", "black-key"),
        new Key("A4", 440.00, 72, "H", "A4", "white-key"),
        new Key("Bb4", 466.16, 85, "U", "Bb4", "black-key"),
        new Key("B4", 493.88, 74, "J", "B4", "white-key"),
        new Key("C5", 523.25, 75, "K", "C5", "white-key"),
        new Key("Db5", 554.37, 79, "O", "Db5", "black-key"),
        new Key("D5", 587.33, 76, "L", "D5", "white-key"),
        new Key("Eb5", 622.25, 80, "P", "Eb5", "black-key"),
        new Key("E5", 659.25, 59, "Ñ", "E5", "white-key", "right-key")
    )
);
