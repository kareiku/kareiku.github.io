import parseCsv from '/js/functions/parseCsv.js';

window.addEventListener('load', async () => {
    try {
        const request = await fetch('/assets/request.json')
        if (!request.ok) return;
        const resources = await request.json();
        const data = await parseCsv(resources['url'], '\t');
        for (let i = 1; i < data.length; i++) {
            const response = await fetch(data[i][1]);
            if (!response.ok) continue;
            const header = document.createElement('h2');
            const item = document.createElement(data[i][2]);
            const datum = await response.text();
            // TODO build datum in the correspondent type (table, md, etc.)
            // TODO render datum
        }
    } catch(error) {
        return;
    }
});

window.addEventListener('scroll', () => {
    document.getElementById('toTop')
        .style.display = window.scrollY > 100 ? 'block' : 'none';
});
