import el from '/js/functions/el.js';

window.addEventListener('load', () => {
    document.body.prepend(el('div', { className: 'navbar' }, 
        el('a', { href: '/index.html' }, el('b', { textContent: 'Home' })),
        el('a', { href: '/pages/sqlite.html', textContent: 'SQLite Viewer' }),
        el('a', { href: '/pages/piano.html', textContent: 'Piano', target: '_blank' }),
        el('div', { className: 'separator' }),
        el('a', { href: 'https://github.com/kareiku', target: '_blank' }, el('img', { src: '/assets/icons/github.svg', alt: 'GitHub' }))
    ));
});
