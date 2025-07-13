import parseCsv from '/js/functions/parseCsv.js';
import renderTable from '/js/functions/renderTable.js';

const URLS_PATH = '/assets/requests/library.json';

export default async function library() {
    const response = await fetch(URLS_PATH);
    if (!response.ok) return;
    const urls = await response.json();

    const select = document.getElementById('library-select');
    const table = document.getElementById('library-table');

    const cache = {};

    addOptions(select, Object.keys(urls));

    select.addEventListener('change', () => {
        renderTableLocal(urls, cache, select, table);
    });

    renderTableLocal(urls, cache, select, table);
}

function addOptions(select, options = []) {
    const first = options.shift();
    select.appendChild(new Option(first, first, true, true));
    options.forEach((option) =>
        select.appendChild(new Option(option, option)));
}

async function renderTableLocal(urls, cache, select, table) {
    cache[select.value] ??= renderTable(
        await parseCsv(urls[select.value], '\t'));
    table.replaceChildren(cache[select.value]);
}
