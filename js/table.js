import * as Modules from "./modules.js";

const table = document.getElementById("results");
const field = document.getElementById("selector");
const input = document.getElementById("search-bar");
let entries = [];

window.addEventListener("load", async () => {
    const url = await fetch("../js/urls.json").then(response => response.json()).then(urls => urls[window.location.href.substring(window.location.href.lastIndexOf("/") + 1).split(".").at()]);
    input.value = "";
    input.focus();
    entries = await Modules.fetchText(url);
    entries = Modules.csvToJsonSync(entries, "\t");
    loadTable(entries, table);
});

field.addEventListener("mousedown", () => {
    input.value = "";
    input.focus();
    input.placeholder = `Filter by ${field.value}...`;
});

input.addEventListener("keyup", () => void loadTable(entries, table));

function loadTable(entries, table) {
    const header = Object.keys(entries?.at());
    entries = input !== "" ? entries.filter(entry => (entry[field.value] || "").toLowerCase().includes(input.value.toLowerCase())) : entries;
    Modules.loadTable(entries, header, table);
}
