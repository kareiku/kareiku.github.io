import requestUrl from '/js/mods.js';
import parseCsv from '/js/functions/parseCsv.js';
import renderTable from '/js/functions/renderFilterableTable.js';

window.addEventListener('load', loadModsTable);

async function loadModsTable() {
    const tsv = await fetch(requestUrl)
        .then((response) => response.text())
        .catch(console.error) || 'Error\nwhen\nloading\nresource';
    const obj = renderTable(parseCsv(tsv, '\t'));
    obj.select.className = 'selector';
    obj.filter.className = 'filter';
    obj.table.className = 'table';
    for (const k in obj) document.body.appendChild(obj[k]);
}
