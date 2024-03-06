function filterFunction() {
    var filterValue = document.getElementById('filterbox').value.toLowerCase();
    var items = document.querySelectorAll('.link-container, .library-container');
    items.forEach(function (item) {
        if (item.classList.contains('library-container')) {
            var img = item.querySelector('img');
            if (img) {
                var title = img.getAttribute('title');
                if (title) {
                    title = title.toLowerCase();
                    if (title.includes(filterValue))
                        item.style.display = '';
                    else
                        item.style.display = 'none';
                }
            }
        }
    });
}

const containerDiv = document.createElement('div');
fetch('data.json')
    .then(response => { if (response.ok) return response.json(); })
    .then(data => {
        const library = data.library;
        library.forEach(element => {
            const libraryContainer = document.createElement('div');
            libraryContainer.classList.add('library-container');

            const image = document.createElement('img');
            image.classList.add('library-image');
            image.src = element.src;
            image.title = element.title;

            libraryContainer.appendChild(image);
            containerDiv.appendChild(libraryContainer);
        });
        document.body.appendChild(containerDiv);
    });