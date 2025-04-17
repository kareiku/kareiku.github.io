export async function csvToJson(csv, delimiter) {
    return new Promise((resolve, reject) => {
        const [header, ...rows] = csv.trim().split(/\r?\n/).map(row => row.split(delimiter));
        const result = [];
        function processRow(i) {
            if (i >= rows.length) {
                resolve(result);
                return;
            }
            result.push(Object.fromEntries(header.map((key, j) => [key, rows[i][j]])));
            setTimeout(() => processRow(i + 1), 0);
        }
        processRow(0);
    });
}

export function csvToJsonSync(csv, delimiter) {
    const [header, ...rows] = csv.trim().split(/\r?\n/).map(row => row.split(delimiter));
    return rows.map(row => Object.fromEntries(header.map((key, i) => [key, row[i]])));
}

export async function fetchJson(url) {
    const response = await fetch(url);
    return response.ok ? await response.json() : [];
}

export async function fetchText(url) {
    const response = await fetch(url);
    return response.ok ? await response.text() : "";
}

export function loadTable(entries, keys, table) {
    table.innerHTML = "";

    const header = document.createElement("tr");
    keys.forEach(key => {
        const th = document.createElement("th");
        th.textContent = key.at().toUpperCase() + key.slice(1);
        header.appendChild(th);
    });
    table.append(header);

    entries.forEach(entry => {
        const row = table.insertRow();
        keys.forEach(key => {
            if (isUrl(entry[key])) {
                const a = document.createElement("a");
                a.href = entry[key];
                a.textContent = entry[key];
                a.className = "better-url";

                row.insertCell().append(a);
            } else {
                row.insertCell().innerHTML = entry[key];
            }
        });
    });
}

export function isUrl(str) {
    return str?.match(/^http.*/);
}
