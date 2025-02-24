import el from '/js/functions/el.js';
import renderSQLTable from '/js/functions/renderSQLTable.js';

const uploadbtn = el('input', { type: 'button', value: 'Upload database file' });
const downloadbtn = el('input', { type: 'button', value: 'Download database file' });
const querybar = el('input', { type: 'search', placeholder: 'Input a query...' });
const querybtn = el('input', { type: 'button', value: 'Process query' });
const createbtn = el('input', { type: 'button', value: 'Create empty database' });
const tableDiv = el('div');

window.addEventListener('load', () => {
    const content = document.getElementById('content');
    const navbar = el('div', { className: 'sqlite-navbar' },
        uploadbtn,
        downloadbtn,
        querybar,
        querybtn,
        createbtn
    );
    content.appendChild(navbar);
    content.appendChild(tableDiv);

    setInterval(() => console.debug('[DEBUG] Currently loaded database: ', db), 10000);
});

const SQL = await window.initSqlJs({ locateFile: file => `/lib/${file}` });

let db = null;

uploadbtn.addEventListener('click', () => {
    const fileInput = el('input', { type: 'file', accept: '.db' });

    fileInput.addEventListener('cancel', () => console.log('[LOG] File selection cancelled.'));

    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);

        db = new SQL.Database(uint8Array);

        console.log('[LOG] Database loaded: ', db);
    });

    fileInput.click();
});

downloadbtn.addEventListener('click', () => {
    if (!db) {
        console.error('[ERROR] No database loaded.');
        alert('Error: Can\'t download a database when none is loaded. Please upload a file or create one from zero with the "Create empty database" button.');
        return;
    }

    const binaryArray = db.export();
    const blob = new Blob([binaryArray], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    const a = el('a', { href: url, download: `${db.filename}.db` });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    console.log('[LOG] Downloaded current database: ', db);
});

querybtn.addEventListener('click', () => {
    const query = querybar.value;

    if (!db) {
        console.error('[ERROR] No database loaded.');
        alert('Error: Can\'t run query without a loaded database. Please upload a file or create one from zero with the "Create empty database" button.');
        return;
    }

    if (query.trim().toLowerCase().startsWith('select')) {
        try {
            const queryResults = db.exec(query);
            tableDiv.innerHTML = "";
            tableDiv.appendChild(renderSQLTable(queryResults));
            console.log('[LOG] Query executed successfully.');
        } catch (error) {
            console.error('[ERROR] Exception caught when executing query.');
            console.debug('[DEBUG]', error);
        }
    } else {
        try {
            db.run(query);
            console.log('[LOG] Query ran successfully.');
        } catch (error) {
            console.error('[ERROR] Exception caught when running query.');
            console.debug('[DEBUG]', error);
        }
    }
});

createbtn.addEventListener('click', () => {
    db = new SQL.Database();
    console.log('[LOG] Created new database: ', db);
});
