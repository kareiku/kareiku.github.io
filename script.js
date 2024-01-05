function filterFunction() {
    var filterValue = document.getElementById('filterbox').value.toLowerCase();
    var items = document.querySelectorAll('.link-container, .library-container');
    items.forEach(function (item) {
        if (item.classList.contains('link-container')) {
            var linkButton = item.querySelector('.link-button');
            if (linkButton) {
                var linkButtonText = linkButton.innerText.toLowerCase();
                if (linkButtonText.includes(filterValue))
                    item.style.display = '';
                else
                    item.style.display = 'none';
            }
        }
        else if (item.classList.contains('library-container')) {
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

const links = [
    { value: "Piano", url: "./piano/index.html" },
    { value: "AniWave", url: "https://aniwave.to/" },
    { value: "MangaFire", url: "https://mangafire.to/" },
    { value: "Steven Universe Archive", url: "http://nekit.sytes.net/files/gems/" },
    { value: "Astronomy Picture of the Day", url: "https://apod.nasa.gov/apod/astropix.html" },
    { value: "Wii Softmodding Guide", url: "https://wii.guide/" },
    { value: "Vimm's Vault", url: "https://vimm.net/vault/" },
    { value: "Nintendo Roms", url: "https://r-roms.gitlab.io/megathread/sections/nintendo/" }
];

const library = [
    { title: "Assassination Classroom", src: "https://cdn.myanimelist.net/images/anime/5/75639l.jpg" },
    { title: "Sword Art Online", src: "https://cdn.myanimelist.net/images/anime/8/36343l.jpg" },
    { title: "No Game No Life", src: "https://cdn.myanimelist.net/images/anime/1074/111944l.jpg" },
    { title: "Death Note", src: "https://cdn.myanimelist.net/images/anime/1001/121564l.jpg" },
    { title: "Shingeki no Kyojin", src: "https://cdn.myanimelist.net/images/anime/1907/134102l.jpg" },
    { title: "Re:Zero", src: "https://cdn.myanimelist.net/images/anime/1534/134863l.jpg" },
    { title: "Blue Exorcist", src: "https://cdn.myanimelist.net/images/anime/10/75195l.jpg" },
    { title: "Fairy Tail", src: "https://cdn.myanimelist.net/images/anime/7/59441l.jpg" },
    { title: "Little Witch Academia", src: "https://cdn.myanimelist.net/images/anime/13/83934l.jpg" },
    { title: "Your Lie in April", src: "https://cdn.myanimelist.net/images/anime/3/72831l.jpg" },
    { title: "Black Clover", src: "https://cdn.myanimelist.net/images/anime/1232/93334l.jpg" },
    { title: "K-On!", src: "https://cdn.myanimelist.net/images/anime/10/76120l.jpg" },
    { title: "Haikyuu!!", src: "https://cdn.myanimelist.net/images/anime/7/76014l.jpg" },
    { title: "Hibike Euphonium", src: "https://cdn.myanimelist.net/images/anime/6/72445l.jpg" },
    { title: "Kakegurui", src: "https://cdn.myanimelist.net/images/anime/3/86578l.jpg" },
    { title: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", src: "https://cdn.myanimelist.net/images/anime/1895/119503l.jpg" },
    { title: "Jujutsu Kaisen", src: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg" },
    { title: "Sora yori mo Tooi Basho", src: "https://cdn.myanimelist.net/images/anime/12/89878l.jpg" },
    { title: "Kobayashi-san Chi no Maid Dragon", src: "https://cdn.myanimelist.net/images/anime/5/85434l.jpg" },
    { title: "Jojo's Bizarre Adventure", src: "https://cdn.myanimelist.net/images/anime/3/40409l.jpg" },
    { title: "Wonder Egg Priority", src: "https://cdn.myanimelist.net/images/anime/1079/110751l.jpg" },
    { title: "Anohana", src: "https://cdn.myanimelist.net/images/anime/1875/105235l.jpg" },
    { title: "Yuru Camp", src: "https://cdn.myanimelist.net/images/anime/4/89877l.jpg" },
    { title: "Majo no Tabitabi", src: "https://cdn.myanimelist.net/images/anime/1802/108501l.jpg" },
    { title: "Naruto", src: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg" },
    { title: "Adachi to Shimamura", src: "https://cdn.myanimelist.net/images/anime/1586/124943l.jpg" },
    { title: "Adachi to Shimamura", src: "https://cdn.myanimelist.net/images/manga/2/232193l.jpg" },
    { title: "Komi-san wa, Komyushou Desu", src: "https://cdn.myanimelist.net/images/anime/1899/117237l.jpg" },
    { title: "Menhera Shoujo Kurumi-chan", src: "https://static.bunnycdn.ru/i/cache/images/9/9d/9d3a6c50621ea7c8736ed04ee26df849.jpg" },
    { title: "Bloom Into You", src: "https://cdn.myanimelist.net/images/manga/1/232311l.jpg" },
    { title: "Bloom Into You Antology", src: "https://cdn.myanimelist.net/images/manga/2/222782l.jpg" },
    { title: "Bloom Into You", src: "https://cdn.myanimelist.net/images/anime/1783/96153l.jpg" },
    { title: "Science Fell in Love, So I Tried to Prove It", src: "https://cdn.myanimelist.net/images/anime/1432/103533l.jpg" },
    { title: "Spy x Family", src: "https://cdn.myanimelist.net/images/anime/1823/119156l.jpg" },
    { title: "Jibaku Shōnen Hanako-kun", src: "https://cdn.myanimelist.net/images/anime/1700/104788l.jpg" },
    { title: "Link Click", src: "https://cdn.myanimelist.net/images/anime/1135/114867l.jpg" },
    { title: "Classroom of the Elite", src: "https://cdn.myanimelist.net/images/anime/7/86829l.jpg" },
    { title: "Non Non Biyori", src: "https://cdn.myanimelist.net/images/anime/2/51581l.jpg" },
    { title: "Hōseki no Kuni", src: "https://cdn.myanimelist.net/images/anime/3/88293l.jpg" },
    { title: "RWBY", src: "https://pics.filmaffinity.com/rwby-751014904-large.jpg" },
    { title: "RWBY: Ice Queendom", src: "https://cdn.myanimelist.net/images/anime/1356/121832l.jpg" },
    { title: "RWBY Anthology", src: "https://cdn.myanimelist.net/images/manga/2/197717l.jpg" },
    { title: "Lycoris Recoil", src: "https://cdn.myanimelist.net/images/anime/1392/124401l.jpg" },
    { title: "Oregairu", src: "https://cdn.myanimelist.net/images/anime/1786/120117l.jpg" },
    { title: "Bocchi the Rock!", src: "https://cdn.myanimelist.net/images/anime/1448/127956l.jpg" },
    { title: "Beyond the Boundary", src: "https://cdn.myanimelist.net/images/anime/3/85468l.jpg" },
    { title: "Mobile Suit Gundam: The Witch from Mercury", src: "https://cdn.myanimelist.net/images/anime/1440/127624l.jpg" },
    { title: "Domestic na Kanojo", src: "https://cdn.myanimelist.net/images/anime/1117/111599l.jpg" },
    { title: "Kimi no Na wa.", src: "https://cdn.myanimelist.net/images/anime/9/77484l.jpg" },
    { title: "Kimi no Na wa.", src: "https://cdn.myanimelist.net/images/manga/1/182270l.jpg" },
    { title: "Tenki no Ko", src: "https://cdn.myanimelist.net/images/anime/1880/101146l.jpg" },
    { title: "Kimi no Suizō wo Tabetai", src: "https://cdn.myanimelist.net/images/anime/11/90070l.jpg" },
    { title: "Bubble", src: "https://cdn.myanimelist.net/images/anime/1011/121152l.jpg" },
    { title: "Kase-san Shirīzu", src: "https://cdn.myanimelist.net/images/anime/1578/94205l.jpg" },
    { title: "Asagao to Kase-san / Yamada to Kase-san", src: "https://cdn.myanimelist.net/images/manga/3/192176l.jpg" },
    { title: "Suzume no Tojimari", src: "https://cdn.myanimelist.net/images/anime/1598/128450l.jpg" },
    { title: "A Silent Voice", src: "https://cdn.myanimelist.net/images/anime/1347/134168l.jpg" },
    { title: "Arcane", src: "https://pics.filmaffinity.com/arcane_league_of_legends-624235408-large.jpg" },
    { title: "Steven Universe", src: "https://pics.filmaffinity.com/steven_universe-632270359-large.jpg" },
    { title: "Persona 5: The Animation", src: "https://cdn.myanimelist.net/images/anime/1230/95768l.jpg" },
    { title: "Persona 5", src: "https://cdn.myanimelist.net/images/manga/1/272390l.jpg" },
    { title: "Adam by Eve: A Live in Animation", src: "https://pics.filmaffinity.com/adam_by_eve_a_live_in_animation-892242764-large.jpg" },
    { title: "The Super Mario Bros. Movie", src: "https://pics.filmaffinity.com/the_super_mario_bros_movie-521125124-large.jpg" },
    { title: "Alter Ego", src: "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/ac114741-9438-4561-a749-746ebf448762/d_1200_1200/portada_planeta-manga-alter-ego__202011171333.webp" },
    { title: "Noel y June", src: "https://pbs.twimg.com/media/Fj9mC9BXgAA2_3U?format=jpg&name=4096x4096" },
    { title: "Sirius", src: "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/32aa5e1c-6d4c-498a-b0f9-cf0340fc8d85/d_360_620/portada_planeta-manga-sirius_ana-c-sanchez_202201121309.webp" },
    { title: "Limbo", src: "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/4403a9cf-a87f-4605-a57f-3aca85955713/d_1200_1200/portada_planeta-manga-limbo-n-01__202212220954.webp" },
    { title: "Déjame que te cuente...", src: "https://m.media-amazon.com/images/I/81mvurKh0YL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Mirai Nikki", src: "https://cdn.myanimelist.net/images/anime/1059/128279l.jpg" },
    { title: "Another", src: "https://cdn.myanimelist.net/images/anime/4/75509l.jpg" },
    { title: "Ranking of Kings", src: "https://cdn.myanimelist.net/images/anime/1347/117616l.jpg" },
    { title: "Breaking Bad", src: "https://pics.filmaffinity.com/breaking_bad-504442815-large.jpg" },
    { title: "Chilling Adventures of Sabrina", src: "https://pics.filmaffinity.com/chilling_adventures_of_sabrina-595796535-large.jpg" },
    { title: "The Owl House", src: "https://pics.filmaffinity.com/the_owl_house-115402703-large.jpg" },
    { title: "You", src: "https://pics.filmaffinity.com/you-795614651-large.jpg" },
    { title: "Cunk on Earth", src: "https://pics.filmaffinity.com/cunk_on_earth-680072871-large.jpg" },
    { title: "Cyberpunk: Edgerunners", src: "https://cdn.myanimelist.net/images/anime/1818/126435l.jpg" },
    { title: "Given", src: "https://cdn.myanimelist.net/images/manga/1/172497l.jpg" },
    { title: "Sasaki to Miyano", src: "https://cdn.myanimelist.net/images/manga/3/187122l.jpg" },
    { title: "I'm in Love with the Villainess", src: "https://cdn.myanimelist.net/images/manga/2/238641l.jpg" },
    { title: "I'm in Love with the Villainess", src: "https://cdn.myanimelist.net/images/anime/1531/137711l.jpg" },
    { title: "Whisper Me a Love Song", src: "https://cdn.myanimelist.net/images/manga/1/219489l.jpg" },
    { title: "Whisper Me a Love Song", src: "https://cdn.myanimelist.net/images/anime/1518/137892l.jpg" },
    { title: "I Married My Best Friend To Shut My Parents Up", src: "https://cdn.myanimelist.net/images/manga/1/212825l.jpg" },
    { title: "Lonely Girl ni Sakaraenai", src: "https://cdn.myanimelist.net/images/manga/2/246835l.jpg" },
    { title: "Alcohol Yuri Anthology: Strong!", src: "https://cdn.myanimelist.net/images/manga/1/241920l.jpg" },
    { title: "Throw Away the Suit Together", src: "https://cdn.myanimelist.net/images/manga/3/257275l.jpg" },
    { title: "Hyouka", src: "https://cdn.myanimelist.net/images/anime/1477/103375l.jpg" },
    { title: "Why is my crush so hard on me?", src: "https://static.bunnycdn.ru/i/cache/images/d/d9/d99276259d041b66b6a2bd8c1c7b3556.jpg" },
    { title: "A Hundred Scenes of Girls' Love", src: "https://static.bunnycdn.ru/i/cache/images/3/3b/3b9e6bbaf34fc6a0a09bf15a984149db.jpg" },
    { title: "Syrup: A Yuri Anthology", src: "https://cdn.myanimelist.net/images/manga/3/247345l.jpg" },
    { title: "The Girl Doesn't Know Her Heart.", src: "https://cdn.myanimelist.net/images/manga/3/246368l.jpg" },
    { title: "Whispered Woods", src: "https://cdn.myanimelist.net/images/manga/2/217658l.jpg" },
    { title: "My Wish Is to Fall in Love Until You Die.", src: "https://cdn.myanimelist.net/images/manga/1/215753l.jpg" },
    { title: "I Can't Believe I Slept With You!", src: "https://cdn.myanimelist.net/images/manga/2/226062l.jpg" },
    { title: "The Summer You Were There", src: "https://cdn.myanimelist.net/images/manga/1/239675l.jpg" },
    { title: "Kimi wa Natsu no Naka", src: "https://cdn.myanimelist.net/images/manga/3/206562l.jpg" },
];

document.write('<input type="text" id="filterbox" onkeyup="filterFunction()" placeholder="Search in the libary...">');
document.write('<div>');
links.forEach(element => {
    document.write(`
        <div class="link-container" onclick="window.location='${element.url}'">
            <div class="link-button">${element.value}</div>
        </div>
    `);
});
document.write('</div>');
document.write('<div>');
library.forEach(element => {
    document.write(`
        <div class="library-container">
            <img class="library-image" src="${element.src}" title="${element.title}">
        </div>
    `);
});
document.write('</div>');
document.write(`<footer id="copyright">None of the images used are mine. All copyrights belong to their respective owners.</footer>`);