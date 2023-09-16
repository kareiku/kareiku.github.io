const finishedList = ["Assassination Classroom", "No Game No Life", "Death Note", "Re:Zero", "Blue Exorcist", "Fairy Tail", "Little Witch Academia", "K-ON!", "Hibike Euphonium", "Kakegurui", "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "Sora yori mo Tooi Basho", "Kobayashi-san Chi no Maid Dragon", "Wonder Egg Priority", "Anohana", "Komi-san wa, Komyushou Desu", "Science Fell in Love, So I Tried to Prove It", "Spy × Family", "Jibaku Shōnen Hanako-kun", "Persona 5: The Animation", "Kimi no Na wa.", "Tenki no Ko", "Kimi no Suizō o Tabetai", "Bubble", "Kase-san Shirīzu", "Arcane", "Steven Universe", "RWBY", "Stranger Things", "Adam by Eve: A Live in Animation", "The Super Mario Bros. Movie", "Yamada to Kase-san", "Alter Ego", "Déjame que te cuente..."];
const inProgressList = ["Shingeki no Kyojin", "RWBY Anthology"];
const notSeenList = ["Your Lie in April", "Black Clover", "Haikyuu!!", "Jujutsu Kaisen", "Jojo's Bizarre Adventure", "Fate/Apocrypha", "Yuru Camp", "Majo no Tabitabi", "Naruto", "Adachi to Shimamura", "Menhera Shoujo Kurumi-chan", "Bloom Into You", "Link Click", "Classroom of the Elite", "Non Non Biyori", "Hōseki no Kuni", "RWBY: Ice Queendom", "Lycoris Recoil", "Oregairu", "Bocchi the Rock!", "Beyond the Boundary", "Mobile Suit Gundam: The Witch from Mercury", "Domestic na Kanojo", "Mirai Nikki", "Another", "Ranking of Kings", "Suzume no Tojimari", "A Silent Voice", "Breaking Bad", "Chilling Adventures of Sabrina", "The Owl House", "You", "Cunk on Earth", "Cyberpunk: Edgerunners", "Given", "Sasaki to Miyano", "I'm in Love with the Villainess", "Whisper Me a Love Song", "I Married My Best Friend To Shut My Parents Up", "Lonely Girl ni Sakaraenai", "Alcohol Yuri Anthology: Strong!", "Persona 5 Manga", "Throw Away the Suit Together", "Hyouka"];

finishedList.forEach(item => {
    document.write(`<input class="finishedList" type="checkbox" disabled>${item}<br>`)
});

inProgressList.forEach(item => {
    document.write(`<input class="inProgressList" type="checkbox" disabled>${item}<br>`)
});

notSeenList.forEach(item => {
    document.write(`<input class="notSeenList" type="checkbox" disabled>${item}<br>`)
});