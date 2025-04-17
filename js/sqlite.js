import el from '/js/functions/el.js';

const uploadbtn = el('input', { type: 'button', value: 'Upload database file' });
const downloadbtn = el('input', { type: 'button', value: 'Download database file' });
const querybar = el('input', { type: 'search', placeholder: 'Input a query...' });
const querybtn = el('input', { type: 'button', value: 'Process query' });
const table = el('table', { className: 'table' });

window.addEventListener('load', () => {
    const content = document.getElementById('content');
    const navbar = el('div', { className: 'sqlite-navbar' },
        uploadbtn,
        downloadbtn,
        querybar,
        querybtn
    );
    content.appendChild(navbar);
    content.appendChild(table);
});

const SQL = await window.initSqlJs({ locateFile: file => `/lib/${file}` });
