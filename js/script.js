import requestUrl from '/js/request.js';
import parseCsv from '/js/functions/parseCsv.js';
import addOptions from '/js/functions/addSelectOptions.js';
import renderTable from '/js/functions/renderFilterableTable.js';
import { marked } from
    'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import DOMPurify from
    'https://cdn.jsdelivr.net/npm/dompurify@3.2.6/dist/purify.es.mjs';

const selector = document.getElementById('sheet-selector');

let items;

window.addEventListener('load', async () => {
    fetch(requestUrl)
    .then((response) => response.text())
    .then((text) => {
        const data = parseCsv(text, '\t');
        items = data.map((datum) => ({
            'name': datum[0],
            'url': datum[1],
            'type': datum[2]
        }));
        addOptions(selector, items.map((item, index) => ({
            'text': item.name,
            'value': index
        })));
        render(items[0]);
    }).catch(console.error);
});

selector.addEventListener('change', () => {
    const item = items[selector.value];
    render(item);
});

async function render(obj) {
    const response = await fetch(obj.url);
    if (!response.ok) return;
    const data = await response.text();
    const container = document.getElementById('item-container');

    if (obj.type === 'table') {
        const result = renderTable(parseCsv(data, '\t'));
        container.replaceChildren(result.select);
        container.appendChild(result.filter);
        container.appendChild(result.table);
    } else if (obj.type === 'md') {
        const result = DOMPurify.sanitize(marked.parse(data));
        container.innerHTML = result;
    } else {
        container.innerHTML = '';
        container.innerText = data;
    }
}
