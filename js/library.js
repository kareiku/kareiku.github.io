let entries = null;

const table = document.getElementById("results");
const field = document.getElementById("selector");
const input = document.getElementById("search-bar");

window.addEventListener("load", () => {
    fetch("../assets/json/library.json")
        .then(response => response.json())
        .then(data => entries = data)
        .then(() => loadTable())
        .catch(error => console.error(error));
    input.value = "";
    input.focus();
});

field.addEventListener("mousedown", () => {
    input.value = "";
    input.focus();
    input.placeholder = `Filter by ${selector.value}...`;
});

input.addEventListener("keyup", () => loadTable());

function loadTable() {
    const filteredData = input !== "" ? entries.filter(entry => (entry[field.value] || "").toLowerCase().includes(input.value.toLowerCase())) : entries;
    const keys = entries && entries.length > 0 ? Object.keys(entries[0]) : [];
    table.innerHTML = "";

    const header = document.createElement("tr");
    keys.forEach(key => {
        const th = document.createElement("th");
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        header.appendChild(th);
    });
    table.append(header);

    filteredData.sort((entry1, entry2) => (entry1.progress || "").localeCompare(entry2.progress || ""));

    filteredData.forEach(datum => {
        const row = table.insertRow();
        keys.forEach(key => row.insertCell().innerHTML = datum[key]);
    });
}
