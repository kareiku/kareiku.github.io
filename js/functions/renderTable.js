import isUrl from '/js/functions/isUrl.js';

export default function renderTable(dataMatrix, hasHeader = true) {
    const table = document.createElement('table');
    if (hasHeader) {
        const thead = table.createTHead();
        const header = dataMatrix.shift();
        const row = thead.insertRow();
        header?.forEach?.((element) => insertCell(row, element));
    }
    const tbody = table.createTBody();
    dataMatrix.forEach((array) => {
        const row = tbody.insertRow();
        array.forEach((element) => insertCell(row, element));
    });
    return table;
}

function insertCell(row, str) {
    const cell = row.insertCell();
    if (isUrl(str)) {
        const a = document.createElement('a');
        a.href = str;
        a.target = '_blank';
        a.innerHTML = str;
        cell.appendChild(a);
    } else cell.innerText = str;
}
