import library from '/js/library.js';
import guides from '/js/guides.js';

window.addEventListener('load', async () => {
    await library();
    await guides();
});
