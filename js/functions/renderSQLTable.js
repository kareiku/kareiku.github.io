import el from '/js/functions/el.js';

export default function renderSQLTable(queryResult) {
    const table = document.createElement('table');

    if (!queryResult || queryResult.length === 0 || queryResult.at().columns.length === 0) {
        table.appendChild(el('tr', {}, el('td', { textContent: 'No data found.' })));
        return table;
    }

    const { columns, values } = result.at();

    const headerRow = el('tr');
    columns.forEach(col => headerRow.appendChild(el('th', { textContent: col })));
    table.appendChild(el('thead', {}, headerRow));

    const tbody = el('tbody');
    values.forEach(row => {
        const tr = el('tr');
        row.forEach(value => {
            const td = el('td', { textContent: value });
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    return table;
}
