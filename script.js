const buttons = ["My Library", "Piano", "Wii Softmoding", "Astronomy Picture of the Day Archive", "Vimm's Vault", "Nintendo Roms", "Steven Universe Archive"];
const links = ["library/index.html", "piano/index.html", "https://wii.guide", "https://apod.nasa.gov/apod/astropix.html", "https://vimm.net/vault", "https://r-roms.gitlab.io/megathread/sections/nintendo", "http://nekit.sytes.net/files/gems"];

buttons.forEach((button, index) => {
    const link = links[index];
    document.write(`<input type="button" value="${button}" onclick='location.href="${link}"'><br>`);
});