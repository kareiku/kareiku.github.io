export default async function parseCsv(url, delim = ',') {
    const response = await fetch(url);
    if (!response.ok) return [[]];
    const data = await response.text();
    const rows = data.split('\n');
    for (let i = 0; i < rows.length; i++) {
        rows[i] = rows[i].split(delim);
    }
    return rows;
}
