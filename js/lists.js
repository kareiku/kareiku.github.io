import parseCsv from '/js/functions/parseCsv.js';
import renderTable from '/js/functions/renderTable.js';

const URLS_PATH = '/assets/lists.json';

export async function onload() {
    const response = await fetch(URLS_PATH);
    if (!response.ok) return;
    const urls = await response.json();

    const selector = document.getElementById('lists-selector');
    const table = document.getElementById('lists-table');

    const cache = {};

    addOptions(selector, Object.keys(urls));

    selector.addEventListener('change', () => {
        renderTableLocal(urls, cache, selector, table);
    });

    renderTableLocal(urls, cache, selector, table);
}

function addOptions(selector, options = []) {
    const first = options.shift();
    selector.appendChild(new Option(first, first, true, true));
    options.forEach((option) =>
        selector.appendChild(new Option(option, option)));
}

async function renderTableLocal(urls, cache, selector, table) {
    cache[selector.value] ??= renderTable(
        await parseCsv(urls[selector.value], '\t'));
    table.replaceChildren(cache[selector.value]);
}
