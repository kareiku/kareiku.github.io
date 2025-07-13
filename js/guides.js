export default async function guides() {
    const request = await fetch('/assets/requests/guides.json');
    if (!request.ok) return;
    const guides = await request.json();
    const response = await fetch(guides['url']);
    if (!response.ok) return;
    const dir = await response.json();
    const tree = dir['tree'];
    const files = tree.map((file) => file.path);
    const rootUrl = 'https://github.com/kareiku/misc/tree/main/guides';
    const ul = document.getElementById('guides-ul');
    for (let i = 0; i < files.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `${rootUrl}/${files[i]}`;
        a.innerText = files[i].substring(0, files[i].search('.md'));
        a.target = '_blank';
        li.appendChild(a);
        ul.appendChild(li);
    }
}
