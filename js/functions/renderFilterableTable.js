/**
 * @param {string[][]} data
 * @returns {{
 *   select: HTMLSelectElement,
 *   filter: HTMLInputElement,
 *   table: HTMLTableElement
 * }}
 */
import addOptions from '/js/functions/addSelectOptions.js';
import isUrl from '/js/functions/isUrl.js';

export default function(data) {
    const selector = document.createElement('select');
    const filter = document.createElement('input');
    const table = document.createElement('table');

    const thead = table.createTHead();
    const header = data.shift();
    const headerRow = thead.insertRow();
    header.forEach((cell) => {
        const th = document.createElement('th');
        th.innerText = cell;
        headerRow.appendChild(th);
    });

    addOptions(selector, header.map((option, index) => ({
        'text': option,
        'value': index
    })));

    function insertCell(row, element) {
        const cell = row.insertCell();
        if (isUrl(element)) {
            const a = document.createElement('a');
            a.href = a.textContent = element;
            a.target = '_blank';
            cell.appendChild(a);
        } else cell.innerText = element;
    }

    const tbody = table.createTBody();
    data.forEach((array) => {
        const row = tbody.insertRow();
        array.forEach((element) => insertCell(row, element));
    });

    filter.placeholder = 'Filter by...';
    filter.addEventListener('keyup', filterTable);

    function filterTable() {
        tbody.innerHTML = '';
        let filteredData = data.filter((array) =>
            array[selector.value].toLowerCase()
            .includes(filter.value.toLowerCase()));
        if (filter.value.length === 0) filteredData = data;
        filteredData.forEach((array) => {
            const row = tbody.insertRow();
            array.forEach((element) => insertCell(row, element));
        });
    }

    return { 'select': selector, 'filter': filter, 'table': table };
}
