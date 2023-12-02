function searchFunction() {
    var input, filter, libraryContainer, linksContainer, i, txtValue;
    input = document.getElementById('searchbox');
    filter = input.value.toUpperCase();

    libraryContainer = document.getElementById("library");
    var libraryItems = libraryContainer.getElementsByClassName('library-container');
    for (i = 0; i < libraryItems.length; i++) {
        var nameLib = libraryItems[i].getElementsByClassName('library-name')[0];
        nameValue = nameLib.innerText || nameLib.textContent;
        if (nameValue.toUpperCase().indexOf(filter) > -1) {
            libraryItems[i].style.display = "";
        } else {
            libraryItems[i].style.display = "none";
        }
    }

    linksContainer = document.getElementById("links");
    var linkItems = linksContainer.getElementsByClassName('link-button');
    for (i = 0; i < linkItems.length; i++) {
        txtValue = linkItems[i].innerText || linkItems[i].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            linkItems[i].style.display = "";
        } else {
            linkItems[i].style.display = "none";
        }
    }
}

function addItem(whatIs, name, type, status, image) {
    if (whatIs == "link") {
        document.write(`
            <div class="link-container" onclick="window.location='${type}'">
              <div class="link-button">
                ${name}
              </div>
            </div>
        `);
    } else if (whatIs == "library") {
        document.write(`
            <div class="library-container">
              <img class="library-image" src="./assets/images/${image}">
              <div class="library-info">
                <a class="library-name">- ${name}</a><br>
                - ${type}<br>- ${status}
              </div>
            </div>
        `);
    }
}

/* Search/filter bar */
document.write('<input type="text" id="searchbox" onkeyup="searchFunction()" placeholder="Search in the libary...">');

/* Links */
document.write('<div>');
addItem("link", "Piano", "./piano/index.html");
addItem("link", "AniWave", "https://aniwave.to/");
addItem("link", "MangaFire", "https://mangafire.to/");
addItem("link", "Steven Universe Archive", "http://nekit.sytes.net/files/gems/");
addItem("link", "Astronomy Picture of the Day", "https://apod.nasa.gov/apod/astropix.html");
addItem("link", "Wii Softmodding Guide", "https://wii.guide/");
addItem("link", "Vimm's Vault", "https://vimm.net/vault/");
addItem("link", "Nintendo Roms", "https://r-roms.gitlab.io/megathread/sections/nintendo/");
document.write('</div>');

/* Library */
document.write('<div>');
addItem("library", "Assassination Classroom", "Anime Series", "Seen", "assassination_classroom.png");
addItem("library", "Sword Art Online", "Anime Series", "Seen Seasons 1-2", "sword_art_online.png");
addItem("library", "No Game No Life", "Anime Series", "Seen", "no_game_no_life.png");
addItem("library", "Death Note", "Anime Series", "Seen", "death_note.png");
addItem("library", "Shingeki no Kyojin", "Anime Series", "Last Season Remains", "shingeki_no_kyojin.png");
addItem("library", "Re:Zero", "Anime Series", "Seen", "re_zero.png");
addItem("library", "Blue Exorcist", "Anime Series", "Seen", "blue_exorcist.png");
addItem("library", "Fairy Tail", "Anime Series", "Seen", "fairy_tail.png");
addItem("library", "Little Witch Academia", "Anime Series", "Seen", "little_witch_academia.png");
addItem("library", "Your Lie in April", "Anime Series", "Unseen", "your_lie_in_april.png");
addItem("library", "Black Clover", "Anime Series", "Unseen", "black_clover.png");
addItem("library", "K-On!", "Anime Series", "Seen", "keion.png");
addItem("library", "Haikyuu!!", "Anime Series", "Unseen", "haikyuu.png");
addItem("library", "Hibike Euphonium", "Anime Series", "Seen", "hibike_euphonium.png");
addItem("library", "Kakegurui", "Anime Series", "Seen", "kakegurui.png");
addItem("library", "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "Anime Series", "Seen", "bunny_girl_senpai.png");
addItem("library", "Jujutsu Kaisen", "Anime Series", "Unseen", "jujutsu_kaisen.png");
addItem("library", "Sora yori mo Tooi Basho", "Anime Series", "Seen", "sora_yori.png");
addItem("library", "Kobayashi-san Chi no Maid Dragon", "Anime Series", "Seen", "kobayashi-san.png");
addItem("library", "Jojo's Bizarre Adventure", "Anime Series", "Unseen", "jojos.png");
addItem("library", "Wonder Egg Priority", "Anime Series", "Seen", "wonder_egg_priority.png");
addItem("library", "Anohana", "Anime Series", "Seen", "anohana.png");
addItem("library", "Yuru Camp", "Anime Series", "Unseen", "yuru_camp.png");
addItem("library", "Majo no Tabitabi", "Anime Series", "Unseen", "majo_no_tabitabi.png");
addItem("library", "Naruto", "Anime Series", "Unseen", "naruto.png");
addItem("library", "Adachi to Shimamura", "Anime Series", "Unseen", "adachi_to_shimamura.png");
addItem("library", "Adachi to Shimamura", "Manga", "Unread", "adachi_to_shimamura.png");
addItem("library", "Komi-san wa, Komyushou Desu", "Anime Series", "Seen", "komi-san.png");
addItem("library", "Menhera Shoujo Kurumi-chan", "Anime Series", "Unseen", "kurumi-chan.png");
addItem("library", "Menhera Shoujo Kurumi-chan", "Manga", "Unread", "kurumi-chan.png");
addItem("library", "Bloom Into You", "Manga", "Unread", "bloom_into_you.png");
addItem("library", "Bloom Into You Antology", "Manga", "Unread", "bloom_into_you_antology.png");
addItem("library", "Science Fell in Love, So I Tried to Prove It", "Anime Series", "Seen", "science_fell_in_love.png");
addItem("library", "Spy x Family", "Anime Series", "Seen", "spy_x_family.png");
addItem("library", "Jibaku Shōnen Hanako-kun", "Anime Series", "Seen", "hanako-kun.png");
addItem("library", "Link Click", "Anime Series", "Unseen", "link_click.png");
addItem("library", "Classroom of the Elite", "Anime Series", "Unseen", "classroom_of_the_elite.png");
addItem("library", "Non Non Biyori", "Anime Series", "Unseen", "non_non_biyori.png");
addItem("library", "Hōseki no Kuni", "Anime Series", "Unseen", "hoseki_no_kuni.png");
addItem("library", "RWBY", "Animated Series", "Seen", "rwby.png");
addItem("library", "RWBY: Ice Queendom", "Anime Series", "Unseen", "rwby_ice_queendom.png");
addItem("library", "RWBY Anthology", "Manga", "Read the first volume", "rwby_antonoly.png");
addItem("library", "Lycoris Recoil", "Anime Series", "Unseen", "lycoris_recoil.png");
addItem("library", "Oregairu", "Anime Series", "Unseen", "oregairu.png");
addItem("library", "Bocchi the Rock!", "Anime Series", "Unseen", "bocchi.png");
addItem("library", "Beyond the Boundary", "Anime Series", "Unseen", "kyokai_no_kanata.png");
addItem("library", "Mobile Suit Gundam: The Witch from Mercury", "Anime Series", "Unseen", "the_witch_from_mercury.png");
addItem("library", "Domestic na Kanojo", "Anime Series", "Unseen", "domestic_no_kanojo.png");
addItem("library", "Kimi no Na wa.", "Anime Movie", "Seen", "kimi_no_na_wa.png");
addItem("library", "Kimi no Na wa.", "Manga", "Read", "kimi_no_na_wa.png");
addItem("library", "Tenki no Ko", "Anime Movie", "Seen", "tenki_no_ko.png");
addItem("library", "Kimi no Suizō o Tabetai", "Anime Movie", "Seen", "kimi_no_suizo_o_tabetai.png");
addItem("library", "Bubble", "Anime Movie", "Seen", "bubble.png");
addItem("library", "Kase-san Shirīzu", "Anime Movie", "Seen", "asagao_to_kase-san.png");
addItem("library", "Asagao to Kase-san / Yamada to Kase-san", "Manga", "Read", "yamada_to_kase-san.png");
addItem("library", "Suzume no Tojimari", "Anime Movie", "Unseen", "suzume_no_tojimari.png");
addItem("library", "A Silent Voice", "Anime Movie", "Unseen", "a_silent_voice.png");
addItem("library", "Arcane", "Animated Series", "Seen", "arcane.png");
addItem("library", "Steven Universe", "Animated Series", "Seen", "steven_universe.png");
addItem("library", "Persona 5: The Animation", "Anime Series", "Seen", "P5A.png");
addItem("library", "Persona 5", "Manga", "Unread", "P5_(manga).png");
addItem("library", "Adam by Eve: A Live in Animation", "Live Action Movie", "Seen", "adam_by_eve.png");
addItem("library", "The Super Mario Bros. Movie", "Animated Movie", "Seen", "super_mario_movie.png");
addItem("library", "Alter Ego", "Manga", "Read", "alter_ego.png");
addItem("library", "Noel y June", "Manga", "Unreleased", "noel_y_june.png");
addItem("library", "Sirius", "Manga", "Read first chapter", "sirius.png");
addItem("library", "Déjame que te cuente...", "Book", "I think I finished it", "dejame_que_te_cuente.png");
addItem("library", "Mirai Nikki", "Anime Series", "Unseen", "mirai_nikki.png");
addItem("library", "Another", "Anime Series", "Unseen", "another.png");
addItem("library", "Ranking of Kings", "Anime Series", "Unseen", "ranking_of_kings.png");
addItem("library", "Breaking Bad", "Series", "Unseen", "breaking_bad.png");
addItem("library", "Chilling Adventures of Sabrina", "Series", "Unseen", "sabrina.png");
addItem("library", "The Owl House", "Animated Series", "Unseen", "the_owl_house.png");
addItem("library", "You", "Series", "Unseen", "you.png");
addItem("library", "Cunk on Earth", "Comedy Documentary", "Unseen", "cunk_on_earth.png");
addItem("library", "Cyberpunk: Edgerunners", "Anime Series", "Unseen", "cyberpunk_edgerunners.png");
addItem("library", "Given", "Manga", "Unread", "given_(manga).png");
addItem("library", "Given", "Anime", "Unseen", "given_(anime).png");
addItem("library", "Sasaki to Miyano", "Manga", "Unread", "sasaki_to_miyano.png");
addItem("library", "I'm in Love with the Villainess", "Manga", "Started", "im_in_love_with_the_villainess.png");
addItem("library", "Whisper Me a Love Song", "Manga", "Read and waitin' for more~", "whisper_me_a_love_song.png");
addItem("library", "Whisper Me a Love Song", "Anime", "Unreleased", "whisper_me_a_love_song.png");
addItem("library", "I Married My Best Friend To Shut My Parents Up", "Manga", "Read", "i_married_my_best_friend_to_shut_my_parents_up.png");
addItem("library", "Lonely Girl ni Sakaraenai", "Manga", "Unread", "lonely_girl_ni_sakaraenai.png");
addItem("library", "Alcohol Yuri Anthology: Strong!", "Manga", "Read", "alcohol_yuri_anthology.png");
addItem("library", "Throw Away the Suit Together", "Manga", "Unread", "throw_away_the_suit_together.png");
addItem("library", "Hyouka", "Anime Series", "Unseen", "hyouka.png");
addItem("library", "Why is my crush so hard on me?", "Doujin Manga", "Read", "why_is_my_crush_so_hard_on_me.png");
addItem("library", "A Hundred Scenes of Girls' Love", "Doujin Manga", "Read", "a_hundred_scenes_of_girls_love");
addItem("library", "Syrup: A Yuri Anthology", "Manga", "Unread", "syrup_a_yuri_anthology.png");
addItem("library", "The Girl Doesn't Know Her heat.", "Manga", "Unread", "the_girl_doesnt_know_hew_heat.png");
addItem("library", "Whispered Woods", "Manga", "Unread", "whispered_woods.png");
addItem("library", "My Wish Is to Fall in Love Until You Die.", "Manga", "Unread", "my_wish_is_to_fall_in_love_until_you_die.png");
addItem("library", "I Can't Believe I Slept With You!", "Manga", "Unread", "i_cant_believe_i_sleep_with_you.png");
addItem("library", "The Summer You Were There", "Manga", "Unread", "the_summer_you_were_there.png");
addItem("library", "I Can't Refuse Lonely Girl's Request.", "Manga", "Unread", "i_cant_refuse_lonely_girls_request.png");
document.write('</div>');