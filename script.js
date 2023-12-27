function filterFunction() {
    var filterValue = document.getElementById('filterbox').value.toLowerCase();
    var items = document.querySelectorAll('.link-container, .library-container');
    items.forEach(function (item) {
        var name = item.querySelector('.library-name, .link-button');
        if (name) {
            name = name.innerText.toLowerCase();
            if (name.includes(filterValue)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

function addItem(category, name, type, status, image) {
    if (category == "links") {
        document.write(`
            <div class="link-container" onclick="window.location='${type}'">
              <div class="link-button">
                ${name}
              </div>
            </div>
        `);
    } else if (category == "library") {
        document.write(`
            <div class="library-container">
              <img class="library-image" src="${image}">
              <div class="library-info">
                <a class="library-name">- ${name}</a><br>
                - ${type}<br>- ${status}
              </div>
            </div>
        `);
    }
}

document.write('<input type="text" id="filterbox" onkeyup="filterFunction()" placeholder="Search in the libary...">');

document.write('<div>');
addItem("links", "Piano", "./piano/index.html");
addItem("links", "AniWave", "https://aniwave.to/");
addItem("links", "MangaFire", "https://mangafire.to/");
addItem("links", "Steven Universe Archive", "http://nekit.sytes.net/files/gems/");
addItem("links", "Astronomy Picture of the Day", "https://apod.nasa.gov/apod/astropix.html");
addItem("links", "Wii Softmodding Guide", "https://wii.guide/");
addItem("links", "Vimm's Vault", "https://vimm.net/vault/");
addItem("links", "Nintendo Roms", "https://r-roms.gitlab.io/megathread/sections/nintendo/");
document.write('</div>');

document.write('<div>');
addItem("library", "Assassination Classroom", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/5/75639l.jpg");
addItem("library", "Sword Art Online", "Anime Series", "Dropped after S2", "https://cdn.myanimelist.net/images/anime/8/36343l.jpg");
addItem("library", "No Game No Life", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1074/111944l.jpg");
addItem("library", "Death Note", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1001/121564l.jpg");
addItem("library", "Shingeki no Kyojin", "Anime Series", "Last Season Remaining", "https://cdn.myanimelist.net/images/anime/1907/134102l.jpg");
addItem("library", "Re:Zero", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1534/134863l.jpg");
addItem("library", "Blue Exorcist", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/10/75195l.jpg");
addItem("library", "Fairy Tail", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/7/59441l.jpg");
addItem("library", "Little Witch Academia", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/13/83934l.jpg");
addItem("library", "Little Witch Academia", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/2/172298l.jpg");
addItem("library", "Your Lie in April", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/3/72831l.jpg");
addItem("library", "Black Clover", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1232/93334l.jpg");
addItem("library", "K-On!", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/10/76120l.jpg");
addItem("library", "K-On!", "Manga", "Unread", "https://static.bunnycdn.ru/i/cache/images/7/77/77201fbbedf0f8624a956fe824d5fe39.jpg");
addItem("library", "Haikyuu!!", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/7/76014l.jpg");
addItem("library", "Hibike Euphonium", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/6/72445l.jpg");
addItem("library", "Kakegurui", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/3/86578l.jpg");
addItem("library", "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1895/119503l.jpg");
addItem("library", "Jujutsu Kaisen", "Anime Series", "Watching", "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg");
addItem("library", "Sora yori mo Tooi Basho", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/12/89878l.jpg");
addItem("library", "Kobayashi-san Chi no Maid Dragon", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/5/85434l.jpg");
addItem("library", "Jojo's Bizarre Adventure", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/3/40409l.jpg");
addItem("library", "Wonder Egg Priority", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1079/110751l.jpg");
addItem("library", "Anohana", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1875/105235l.jpg");
addItem("library", "Yuru Camp", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/4/89877l.jpg");
addItem("library", "Majo no Tabitabi", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1802/108501l.jpg");
addItem("library", "Naruto", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/13/17405l.jpg");
addItem("library", "Adachi to Shimamura", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1586/124943l.jpg");
addItem("library", "Adachi to Shimamura", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/2/232193l.jpg");
addItem("library", "Komi-san wa, Komyushou Desu", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1899/117237l.jpg");
addItem("library", "Menhera Shoujo Kurumi-chan", "Manga", "Unread", "https://static.bunnycdn.ru/i/cache/images/9/9d/9d3a6c50621ea7c8736ed04ee26df849.jpg");
addItem("library", "Bloom Into You", "Manga", "Reading", "https://cdn.myanimelist.net/images/manga/1/232311l.jpg");
addItem("library", "Bloom Into You Antology", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/2/222782l.jpg");
addItem("library", "Bloom Into You", "Anime", "Unseen", "https://cdn.myanimelist.net/images/anime/1783/96153l.jpg");
addItem("library", "Science Fell in Love, So I Tried to Prove It", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1432/103533l.jpg");
addItem("library", "Spy x Family", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1823/119156l.jpg");
addItem("library", "Jibaku Shōnen Hanako-kun", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1700/104788l.jpg");
addItem("library", "Link Click", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1135/114867l.jpg");
addItem("library", "Classroom of the Elite", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/7/86829l.jpg");
addItem("library", "Non Non Biyori", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/2/51581l.jpg");
addItem("library", "Hōseki no Kuni", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/3/88293l.jpg");
addItem("library", "RWBY", "Animated Series", "Seen", "https://pics.filmaffinity.com/rwby-751014904-large.jpg");
addItem("library", "RWBY: Ice Queendom", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1356/121832l.jpg");
addItem("library", "RWBY Anthology", "Manga", "V2-4 remaining", "https://cdn.myanimelist.net/images/manga/2/197717l.jpg");
addItem("library", "Lycoris Recoil", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1392/124401l.jpg");
addItem("library", "Oregairu", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1786/120117l.jpg");
addItem("library", "Bocchi the Rock!", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1448/127956l.jpg");
addItem("library", "Beyond the Boundary", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/3/85468l.jpg");
addItem("library", "Mobile Suit Gundam: The Witch from Mercury", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1440/127624l.jpg");
addItem("library", "Domestic na Kanojo", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1117/111599l.jpg");
addItem("library", "Kimi no Na wa.", "Anime Movie", "Seen", "https://cdn.myanimelist.net/images/anime/9/77484l.jpg");
addItem("library", "Kimi no Na wa.", "Manga", "Read", "https://cdn.myanimelist.net/images/manga/1/182270l.jpg");
addItem("library", "Tenki no Ko", "Anime Movie", "Seen", "https://cdn.myanimelist.net/images/anime/1880/101146l.jpg");
addItem("library", "Kimi no Suizō wo Tabetai", "Anime Movie", "Seen", "https://cdn.myanimelist.net/images/anime/11/90070l.jpg");
addItem("library", "Bubble", "Anime Movie", "Seen", "https://cdn.myanimelist.net/images/anime/1011/121152l.jpg");
addItem("library", "Kase-san Shirīzu", "Anime Movie", "Seen", "https://cdn.myanimelist.net/images/anime/1578/94205l.jpg");
addItem("library", "Asagao to Kase-san / Yamada to Kase-san", "Manga", "Read", "https://cdn.myanimelist.net/images/manga/3/192176l.jpg");
addItem("library", "Suzume no Tojimari", "Anime Movie", "Unseen", "https://cdn.myanimelist.net/images/anime/1598/128450l.jpg");
addItem("library", "A Silent Voice", "Anime Movie", "Unseen", "https://cdn.myanimelist.net/images/anime/1347/134168l.jpg");
addItem("library", "Arcane", "Animated Series", "Seen", "https://pics.filmaffinity.com/arcane_league_of_legends-624235408-large.jpg");
addItem("library", "Steven Universe", "Animated Series", "Seen", "https://pics.filmaffinity.com/steven_universe-632270359-large.jpg");
addItem("library", "Persona 5: The Animation", "Anime Series", "Seen", "https://cdn.myanimelist.net/images/anime/1230/95768l.jpg");
addItem("library", "Persona 5", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/1/272390l.jpg");
addItem("library", "Adam by Eve: A Live in Animation", "Live Action Movie", "Seen", "https://pics.filmaffinity.com/adam_by_eve_a_live_in_animation-892242764-large.jpg");
addItem("library", "The Super Mario Bros. Movie", "Animated Movie", "Seen", "https://pics.filmaffinity.com/the_super_mario_bros_movie-521125124-large.jpg");
addItem("library", "Alter Ego", "Manga", "Read", "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/ac114741-9438-4561-a749-746ebf448762/d_1200_1200/portada_planeta-manga-alter-ego__202011171333.webp");
addItem("library", "Noel y June", "Manga", "Unreleased", "https://pbs.twimg.com/media/Fj9mC9BXgAA2_3U?format=jpg&name=4096x4096");
addItem("library", "Sirius", "Manga", "C2-... remaning", "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/32aa5e1c-6d4c-498a-b0f9-cf0340fc8d85/d_360_620/portada_planeta-manga-sirius_ana-c-sanchez_202201121309.webp");
addItem("library", "Limbo", "Manga", "Unread", "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/4403a9cf-a87f-4605-a57f-3aca85955713/d_1200_1200/portada_planeta-manga-limbo-n-01__202212220954.webp")
addItem("library", "Déjame que te cuente...", "Book", "Read", "https://m.media-amazon.com/images/I/81mvurKh0YL._AC_UF1000,1000_QL80_.jpg");
addItem("library", "Mirai Nikki", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1059/128279l.jpg");
addItem("library", "Another", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/4/75509l.jpg");
addItem("library", "Ranking of Kings", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1347/117616l.jpg");
addItem("library", "Breaking Bad", "Series", "Unseen", "https://pics.filmaffinity.com/breaking_bad-504442815-large.jpg");
addItem("library", "Chilling Adventures of Sabrina", "Series", "Unseen", "https://pics.filmaffinity.com/chilling_adventures_of_sabrina-595796535-large.jpg");
addItem("library", "The Owl House", "Animated Series", "Unseen", "https://pics.filmaffinity.com/the_owl_house-115402703-large.jpg");
addItem("library", "You", "Series", "Unseen", "https://pics.filmaffinity.com/you-795614651-large.jpg");
addItem("library", "Cunk on Earth", "Comedy Documentary", "Unseen", "https://pics.filmaffinity.com/cunk_on_earth-680072871-large.jpg");
addItem("library", "Cyberpunk: Edgerunners", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1818/126435l.jpg");
addItem("library", "Given", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/1/172497l.jpg");
addItem("library", "Given", "Anime", "Unseen", "https://cdn.myanimelist.net/images/anime/1666/102238l.jpg");
addItem("library", "Sasaki to Miyano", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/3/187122l.jpg");
addItem("library", "I'm in Love with the Villainess", "Manga", "Waiting for new releases", "https://cdn.myanimelist.net/images/manga/2/238641l.jpg");
addItem("library", "I'm in Love with the Villainess", "Anime Series", "Waiting for new releases", "https://cdn.myanimelist.net/images/anime/1531/137711l.jpg");
addItem("library", "Whisper Me a Love Song", "Manga", "Waiting for new releases", "https://cdn.myanimelist.net/images/manga/1/219489l.jpg");
addItem("library", "Whisper Me a Love Song", "Anime", "Unreleased", "https://cdn.myanimelist.net/images/anime/1518/137892l.jpg");
addItem("library", "I Married My Best Friend To Shut My Parents Up", "Manga", "Read", "https://cdn.myanimelist.net/images/manga/1/212825l.jpg");
addItem("library", "Lonely Girl ni Sakaraenai", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/2/246835l.jpg");
addItem("library", "Alcohol Yuri Anthology: Strong!", "Manga", "Read", "https://cdn.myanimelist.net/images/manga/1/241920l.jpg");
addItem("library", "Throw Away the Suit Together", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/3/257275l.jpg");
addItem("library", "Hyouka", "Anime Series", "Unseen", "https://cdn.myanimelist.net/images/anime/1477/103375l.jpg");
addItem("library", "Why is my crush so hard on me?", "Doujin Manga", "Read", "https://static.bunnycdn.ru/i/cache/images/d/d9/d99276259d041b66b6a2bd8c1c7b3556.jpg");
addItem("library", "A Hundred Scenes of Girls' Love", "Doujin Manga", "Read", "https://static.bunnycdn.ru/i/cache/images/3/3b/3b9e6bbaf34fc6a0a09bf15a984149db.jpg");
addItem("library", "Syrup: A Yuri Anthology", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/3/247345l.jpg");
addItem("library", "The Girl Doesn't Know Her heat.", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/3/246368l.jpg");
addItem("library", "Whispered Woods", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/2/217658l.jpg");
addItem("library", "My Wish Is to Fall in Love Until You Die.", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/1/215753l.jpg");
addItem("library", "I Can't Believe I Slept With You!", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/2/226062l.jpg");
addItem("library", "The Summer You Were There", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/1/239675l.jpg");
addItem("library", "Kimi wa Natsu no Naka", "Manga", "Unread", "https://cdn.myanimelist.net/images/manga/3/206562l.jpg");
addItem("library", "Scott Pilgrim", "Graphic Novel", "Unread", "https://upload.wikimedia.org/wikipedia/en/3/39/ScottPilgrim.jpg");
document.write('</div>');

document.write('<footer>None of the images above are mine. Credit to their respective authors.</footer>');