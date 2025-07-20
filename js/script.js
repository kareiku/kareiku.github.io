import addOptions from '/js/functions/add-select-options.js';
import renderTable from '/js/functions/render-filterable-table.js';

window.addEventListener('load', start);

async function start() {
    const tables = await extractSqlTables('/assets/data/library.sqlite');
    const tableSelect = document.createElement('select');
    tableSelect.className = 'selector';
    addOptions(
        tableSelect,
        tables['names'].map((name, index) => ({
            text: name.charAt(0).toUpperCase() + name.slice(1),
            value: index
        }))
    );
    const container = document.createElement('div');
    container.className = 'flex';
    tableSelect.addEventListener('change', () =>
        loadTable(container, tables['contents'][Number(tableSelect.value)])
    );
    document.body.appendChild(tableSelect);
    document.body.appendChild(container);
    loadTable(container, tables['contents'][Number(tableSelect.value)]);
}

function loadTable(parentNode, sqlArray) {
    const data = sqlArray[0].values;
    data.unshift(sqlArray[0].columns);
    const { select, filter, table } = renderTable(data);
    select.className = 'selector';
    filter.className = 'filter';
    table.className = 'table';
    parentNode.replaceChildren(select, filter, table);
}

// @returns {{ names: string[], contents: string[][][] }}
async function extractSqlTables(dbpath) {
    try {
        const SQL = await initSqlJs({ locateFile: (file) => `/libs/${file}` });

        const response = await fetch(dbpath);
        if (!response.ok) return { names: [], contents: [[[]]] };
        const data = await response.bytes();

        const db = new SQL.Database(data);

        const names = db
            .exec(
                `select name from sqlite_master where type='table' and
                 name not like 'sqlite_%'`
            )
            .map((a) => a.values)[0]
            .map((a) => a[0]);

        const contents = [];
        names.forEach((name) => {
            const content = db.exec(`select * from ${name}`);
            contents.push(content);
        });

        return { names, contents };
    } catch (error) {
        return { names: [], contents: [[[]]] };
    }
}
