import * as Modules from "./modules.js";

const table = document.getElementById("results");
const field = document.getElementById("selector");
const input = document.getElementById("search-bar");
let entries = [];

window.addEventListener("load", async () => {
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
    entries = input !== "" ? entries.filter(entry => (entry[field.value] || "").toLowerCase().includes(input.value.toLowerCase())) : entries;
    entries.sort((entry1, entry2) => (entry1.progress || "").localeCompare(entry2.progress || ""));
    Modules.loadTable(entries, table);
}
