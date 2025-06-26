import el from '/js/functions/el.js';
import renderSQLTable from '/js/functions/renderSQLTable.js';

const uploadbtn = document.getElementById('upload-btn');
const downloadbtn = document.getElementById('download-btn');
const querybar = document.getElementById('query-input');
const querybtn = document.getElementById('query-btn');
const createbtn = document.getElementById('create-btn');
const tableDiv = document.getElementById('sqlite-table');

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
