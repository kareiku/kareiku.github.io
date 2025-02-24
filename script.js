window.addEventListener("load", () => {
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
