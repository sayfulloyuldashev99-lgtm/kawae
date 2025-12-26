// --- Nav va footer linklari orqali filter va scroll ---
function scrollToAndFilter(type) {
    const filters = document.querySelector('.search-filters');
    if (filters) filters.scrollIntoView({behavior:'smooth', block:'center'});
	if (type === 'genres') {
		document.getElementById('genre-filter')?.focus();
	} else if (type === 'years') {
		document.getElementById('year-filter')?.focus();
	} else if (type === 'anime') {
		document.getElementById('search-input')?.focus();
	}
}


window.addEventListener('DOMContentLoaded', () => {
    // Header links
    document.querySelectorAll('.nav-genres-link, .footer-genres-link').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); scrollToAndFilter('genres'); });
    });
    document.querySelectorAll('.nav-years-link, .footer-years-link').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); scrollToAndFilter('years'); });
    });
    document.querySelectorAll('.nav-anime-link, .footer-anime-link').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); scrollToAndFilter('anime'); });
    });

    // Mobil menyu (burger)
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('main-nav');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
        // Menyudan biror link bosilsa menyuni yopish
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
    }
});
// --- Ko'p tillilik (uz/rus) ---
const translations = {
    uz: {
        'logo': 'Anime Uz',
        'nav-home': 'Bosh sahifa',
        'nav-anime': 'Animelar',
        'nav-genres': 'Janrlar',
        'nav-years': 'Yillar',
        'nav-saved': 'Saqlanganlar',
        'search-placeholder': 'Anime nomini qidirish…',
        'filter-genre': 'Janrni tanlang',
        'filter-year': 'Yilni tanlang',
        'empty-state': 'Hech qanday anime topilmadi',
        'saved-title': 'Saqlangan animelar',
        'footer-desc': 'Biz anime ixlosmandlari uchun sifatli va qulay tomosha platformasini taqdim etamiz.<br>Saytimizdagi animelarning bir qismi jamoamiz tomonidan dublyaj qilingan, qolgan kontent esa boshqa professional studiyalardan olingan.<br>',
        'footer-slogan': '“Anime — yurakdan yurakka!”',
        'footer-sections': 'Sayt bo‘limlari',
        'footer-contact': 'Biz bilan aloqa',
        'footer-partners': 'Hamkorlar',
        'footer-socials': 'Biz ijtimoiy tarmoqlarda',
        'footer-copyright': '&copy; 2025 Anime Uz. Barcha huquqlar himoyalangan. | Made with <span style="color:#ff4b4b">❤</span> in Uzbekistan',
        'footer-link-home': 'Bosh sahifa',
        'footer-link-anime': 'Animelar',
        'footer-link-genres': 'Janrlar',
        'footer-link-years': 'Yillar',
        'footer-link-email': '@user_shoyo',
        'footer-link-telegram': 'Telegram:',
        'footer-link-tel': 'Tel:',
        'footer-link-phone': '+998 00 00 00 00',
        'footer-link-uzanime': 'UzAnime',
        'footer-link-aniplus': 'AniPlus',
        'year': 'Yil',
        'episodes': 'Qismlar',
        'seasons': 'Fasllar',
        'status': 'Status',
        'completed': 'Tugallangan',
        'watch': 'Tomosha qilish',
        'save': 'Saqlab qo‘yish',
        'saved': 'Saqlangan',
        'back': 'Orqaga qaytish',
        'about-anime': 'Anime haqida',
        'more': 'Ko‘proq',
        'rating-count': 'baho',
        'details': 'Batafsil',
    },
    ru: {
        'logo': 'Аниме Уз',
        'nav-home': 'Главная',
        'nav-anime': 'Аниме',
        'nav-genres': 'Жанры',
        'nav-years': 'Годы',
        'nav-saved': 'Сохранённые',
        'search-placeholder': 'Поиск аниме…',
        'filter-genre': 'Выберите жанр',
        'filter-year': 'Выберите год',
        'empty-state': 'Аниме не найдено',
        'saved-title': 'Сохранённые аниме',
        'footer-desc': 'Мы предоставляем качественную и удобную платформу для просмотра аниме для фанатов.<br>Часть аниме на нашем сайте дублирована нашей командой, остальной контент взят у других профессиональных студий.<br>',
        'footer-slogan': '«Аниме — от сердца к сердцу!»',
        'footer-sections': 'Разделы сайта',
        'footer-contact': 'Контакты',
        'footer-partners': 'Партнеры',
        'footer-socials': 'Мы в соцсетях',
        'footer-copyright': '&copy; 2025 Anime Uz. Все права защищены. | Сделано с <span style="color:#ff4b4b">❤</span> в Узбекистане',
        'footer-link-home': 'Главная',
        'footer-link-anime': 'Аниме',
        'footer-link-genres': 'Жанры',
        'footer-link-years': 'Годы',
        'footer-link-email': '@user_shoyo',
        'footer-link-telegram': 'Телеграм:',
        'footer-link-tel': 'Тел:',
        'footer-link-phone': '+998 00 00 00 00',
        'footer-link-uzanime': 'UzAnime',
        'footer-link-aniplus': 'AniPlus',
        'year': 'Год',
        'episodes': 'Серии',
        'seasons': 'Сезоны',
        'status': 'Статус',
        'completed': 'Завершён',
        'watch': 'Смотреть',
        'save': 'Сохранить',
        'saved': 'Сохранён',
        'back': 'Назад',
        'about-anime': 'Об аниме',
            'watch': '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c',
        'more': 'Подробнее',
        'rating-count': 'оценок',
        'details': 'Подробнее',
    }
};

function setupLanguageSwitcher() {
    const uzBtn = document.getElementById('lang-uz');
    const ruBtn = document.getElementById('lang-ru');
    if (!uzBtn || !ruBtn) return;
    uzBtn.onclick = () => setLanguage('uz');
    ruBtn.onclick = () => setLanguage('ru');
    // Har doim default Uzbek tilida ochiladi (faqat localStorage tekshiriladi)
    // Har doim Uzbek tilida ochiladi
    localStorage.setItem('site-lang', 'uz');
    sessionStorage.removeItem('ruLangWarned');
    setLanguage('uz');
// ...existing code...
}
function setLanguage(lang) {
    if (lang === 'ru') {
        if (!sessionStorage.getItem('ruLangWarned')) {
            const modal = document.getElementById('lang-warning-modal');
            if (modal) {
                modal.style.display = 'flex';
                const closeBtn = document.getElementById('close-lang-warning');
                if (closeBtn) {
                    closeBtn.onclick = function() {
                        modal.style.display = 'none';
                    };
                }
            }
            sessionStorage.setItem('ruLangWarned', '1');
        }
    } else {
        // Boshqa tillarda modalni yashirish va ruLangWarned ni tozalash
        const modal = document.getElementById('lang-warning-modal');
        if (modal) modal.style.display = 'none';
        sessionStorage.removeItem('ruLangWarned');
    }
    localStorage.setItem('site-lang', lang);
    // Nav va boshqa matnlarni almashtirish
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    // Header logo va nav uchun ham yangilash (innerText ishlatiladi)
    const logo = document.querySelector('.logo[data-i18n="logo"]');
    if (logo && translations[lang]['logo']) logo.innerText = translations[lang]['logo'];
    const navKeys = ['nav-home','nav-anime','nav-genres','nav-years','nav-saved'];
    navKeys.forEach(key => {
        const navEl = document.querySelector(`[data-i18n="${key}"]`);
        if (navEl && translations[lang][key]) navEl.innerText = translations[lang][key];
    });
    // Placeholderlar uchun
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });
    // Janrlar selectini faqat rus tilida ruscha, boshqa tillarda o'zbekcha ko'rsatish
    const genreFilter = document.getElementById('genre-filter');
    if (genreFilter) {
        genreFilter.innerHTML = '';
        if (lang === 'ru') {
            const genresRu = [
                { value: '', text: 'Выберите жанр' },
                { value: 'Detektiv', text: 'Детектив' },
                { value: 'Drama', text: 'Драма' },
                { value: 'Ekshen', text: 'Экшен' },
                { value: 'Fantastika', text: 'Фантастика' },
                { value: 'Komediya', text: 'Комедия' },
                { value: 'Sarguzasht', text: 'Приключения' },
                { value: 'Sport', text: 'Спорт' },
                { value: 'Triller', text: 'Триллер' }
            ];
            genresRu.forEach(g => {
                const opt = document.createElement('option');
                opt.value = g.value;
                opt.textContent = g.text;
                genreFilter.appendChild(opt);
            });
        } else {
            const genresUz = [
                { value: '', text: 'Janrni tanlang' },
                { value: 'Detektiv', text: 'Detektiv' },
                { value: 'Drama', text: 'Drama' },
                { value: 'Ekshen', text: 'Ekshen' },
                { value: 'Fantastika', text: 'Fantastika' },
                { value: 'Komediya', text: 'Komediya' },
                { value: 'Sarguzasht', text: 'Sarguzasht' },
                { value: 'Sport', text: 'Sport' },
                { value: 'Triller', text: 'Triller' }
            ];
            genresUz.forEach(g => {
                const opt = document.createElement('option');
                opt.value = g.value;
                opt.textContent = g.text;
                genreFilter.appendChild(opt);
            });
        }
    }
    // Footer uchun barcha data-i18n matnlarni yangilash
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    // Til tugmasi aktivligi
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('lang-' + lang);
    if (activeBtn) activeBtn.classList.add('active');
    // So‘nggi ko‘rilganlar blokini ham yangilash
    if (typeof renderRecentlyViewed === 'function') {
        renderRecentlyViewed();
    }
}


function setupLanguageSwitcher() {
    const uzBtn = document.getElementById('lang-uz');
    const ruBtn = document.getElementById('lang-ru');
    if (!uzBtn || !ruBtn) return;
    uzBtn.onclick = () => setLanguage('uz');
    ruBtn.onclick = () => setLanguage('ru');
    // Avto tanlash (faqat localStorage)
    let lang = localStorage.getItem('site-lang');
    if (!lang) {
        lang = 'uz'; // Default to Uzbek
    }
    setLanguage(lang);
}

window.addEventListener('DOMContentLoaded', () => {
    setupLanguageSwitcher();
});
// --- END Ko'p tillilik ---
// --- AmediaTV Banner Carousel ---
const amediaBanners = [
    {
        bg: "https://i.ytimg.com/vi/tYUXfv7yaZE/maxresdefault.jpg",
        poster: "https://i.pinimg.com/736x/33/93/9c/33939c25b32e04f6cc60076e31e370c7.jpg",
        all: "Hamma animelar",
        ongoing: "Ongoing",
        title: "Ko'k Zindon",
        desc: "Hikoya Qahramonlar Assotsiatsiyasi va Monster Assotsiatsiyasi o‘rtasidagi katta urush atrofida kechadi. Yovuzlar shaharlarga hujum qiladi, tinch aholini garovga oladi va S-klass qahramonlar birin-ketin jang maydoniga tushadi. Har bir jang o‘ziga xos — kuch, strategiya va irodani sinovdan o‘tkazadi. Faslning...",
        year: "2024",
        quality: "1080 <b>FULL HD</b>",
        btn: "KO'RISH",
        link: "anime.html?id=10"
    },
    {
        bg: "https://www.gamersdecide.com/sites/default/files/2023-04/jujutsu-kaisen.jpeg",
        poster: "https://lh3.googleusercontent.com/q2FjejiZILWuYPkv4VLGWKjPAtGagdtttXT3ocjCkXhD73WJNPsRJrB4_wHuBL2qGKKJwUt8tQLg0A_TUASPIltSu0ctsPBLjbq3pI4XoiHLjs68djnkY6oDap5XFhb_v3rqSQc5FQ=w2400",
        all: "Hamma animelar",
        ongoing: "Yangi",
        title: "Jodugarlar Jangi ",
        desc: "Itadori Yuji va do‘stlari la'natlangan ruhlarga qarshi kurashadi. Sarguzasht, do‘stlik va kuch haqida hikoya.",
        year: "2023",
        quality: "1080 <b>FULL HD</b>",
        btn: "KO'RISH",
        link: "anime.html?id=6"
    },
    {
        bg: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/07/split-image-of-naruto.jpg?w=1200&h=675&fit=crop",
        poster: "https://i.ytimg.com/vi/uxloB4Ui6UM/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&amp;rs=AOn4CLC013rRWmOTd9WCfKfRt1NpWG1IGA",
        all: "Hamma animelar",
        ongoing: "Ongoing",
        title: "Naruto",
        desc: "Ichigo va uning do‘stlari Soul Society’ni qutqarish uchun kuchli dushmanlarga qarshi kurashadi.",
        year: "2022",
        quality: "1080 <b>FULL HD</b>",
        btn: "KO'RISH",
        link: "anime.html?id=1"
    },
    {
        bg: "https://i.ytimg.com/vi/S74XwL9OQPE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEIgVihyMA8=&amp;rs=AOn4CLBTAlpvlPpl9QNyt4RegpNqa6xjdQ",
        poster: "https://i.pinimg.com/originals/52/f7/96/52f796f30019e98bc10c76b9deffa25f.jpg",
        all: "Hamma animelar",
        ongoing: "Yangi",
        title: "Iblislar Qotili",
        desc: "Tanjiro va Nezuko demonlarga qarshi kurashda yangi sarguzashtlarga sho‘ng‘iydi. Grafika va janglar ajoyib!",
        year: "2023",
        quality: "1080 <b>FULL HD</b>",
        btn: "KO'RISH",
        link: "anime.html?id=4"
    },
    {
        bg: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/featured-one-piece-when-does-egghead-arc-start-in-anime-luffy-vegapunk.jpg?q=49&fit=crop&w=825&dpr=2",
        poster: "https://ru-images-s.kinorium.com/movie/1080/660402.jpg?1737633318",
        all: "Hamma animelar",
        ongoing: "Ongoing",
        title: "One Piece",
        desc: "Loid Forger va uning \"soxta\" oilasi maxfiy missiyalarda. Komediya va sarguzasht muxlislari uchun.",
        year: "2022",
        quality: "1080 <b>FULL HD</b>",
        btn: "KO'RISH",
        link: "anime.html?id=3"
    },
    {
        bg: "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/05/28/Haikyuu-the-dumpster-battle-team-names.jpg",
        poster: "https://i.pinimg.com/736x/64/10/49/641049182c16cde35725866e7ba04026.jpg",
        all: "Hamma animelar",
        ongoing: "Yangi",
        title: "Voleybol: Haikyuu!!",
        desc: "Shoyo Hinata va Karasuno voleybol jamoasi chempionlik sari intiladi. Sport va motivatsiya!",
        year: "2024",
        quality: "1080 <b>FULL HD</b>",
        btn: "KO'RISH",
        link: "anime.html?id=14"
    }
];
let amediaBannerIndex = 0;
let amediaBannerTimer = null;

function renderAmediaBanner(idx) {
    const b = amediaBanners[idx];
    document.getElementById('amedia-banner-carousel').innerHTML = `
        <div class="amedia-banner">
            <div class="amedia-banner-bg">
                <img src="${b.bg}" alt="${b.title}" class="amedia-banner-bgimg">
            </div>
            <div class="amedia-banner-content">
                <div class="amedia-banner-labels">
                    <span class="amedia-banner-all">${b.all}</span>
                    <span class="amedia-banner-ongoing">${b.ongoing}</span>
                </div>
                <h1 class="amedia-banner-title">${b.title}</h1>
                <p class="amedia-banner-desc">${b.desc}</p>
                <div class="amedia-banner-meta">
                    <span class="amedia-banner-year">${b.year}</span>
                    <span class="amedia-banner-quality">${b.quality}</span>
                    <a href="${b.link}" class="amedia-banner-btn">${b.btn}</a>
                </div>
            </div>
            <div class="amedia-banner-poster">
                <img src="${b.poster}" alt="${b.title} poster">
            </div>
        </div>
    `;
}

function amediaBannerNext() {
    amediaBannerIndex = (amediaBannerIndex + 1) % amediaBanners.length;
    renderAmediaBanner(amediaBannerIndex);
}
function amediaBannerPrev() {
    amediaBannerIndex = (amediaBannerIndex - 1 + amediaBanners.length) % amediaBanners.length;
    renderAmediaBanner(amediaBannerIndex);
}
function amediaBannerStartAuto() {
    if (amediaBannerTimer) clearInterval(amediaBannerTimer);
    amediaBannerTimer = setInterval(() => {
        amediaBannerNext();
    }, 5000);
}

window.addEventListener('DOMContentLoaded', () => {
    renderAmediaBanner(amediaBannerIndex);
    amediaBannerStartAuto();
    document.getElementById('amedia-banner-next').onclick = () => {
        amediaBannerNext();
        amediaBannerStartAuto();
    };
    document.getElementById('amedia-banner-prev').onclick = () => {
        amediaBannerPrev();
        amediaBannerStartAuto();
    };
});
// --- END AmediaTV Banner Carousel ---
// Mobil burger menyu uchun
function setupBurgerMenu() {
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('main-nav');
    if (!burger || !nav) return;
    function checkWidth() {
        if (window.innerWidth <= 600) {
            burger.style.display = 'block';
            nav.classList.remove('open');
        } else {
            burger.style.display = 'none';
            nav.classList.remove('open');
        }
    }
    burger.onclick = function() {
        nav.classList.toggle('open');
    };
    window.addEventListener('resize', checkWidth);
    checkWidth();
    // Nav link bosilganda menyuni yopish
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth <= 600) nav.classList.remove('open');
        });
    });
}

// Anime Uz - Professional Anime Streaming Platform (Uzbek)
// All logic: data, rendering, search, filter, carousel, bookmarks

// 1. Anime data (at least 20 sample anime)
const animeData = [
    {
        id: 1,
        title: "Naruto",
        description: "Naruto Uzumaki – Hokage bo'lish orzusidagi yosh ninja. Do'stlari va dushmanlari bilan kurashadi.",
        description_ru: "Наруто Узумаки — молодой ниндзя, мечтающий стать Хокаге. Он сражается вместе с друзьями и врагами.",
        genres: ["Sarguzasht", "Ekshen", "Fantastika"],
        year: 2002,
        poster: "https://m.media-amazon.com/images/S/pv-target-images/0c9ce4e037546965d6b1f3807e9f8f549a113d32066b2bdb22ada5d179c0d89a.jpg",
        channel: "https://t.me/Naruto_Uzbekcha_tilda",
        episodes: 220,
        seasons: 5
    },
    {
        id: 2,
        title: "Titanlar Hujumi",
        description: "Insoniyat devlar ortida yashaydi. Eren va do'stlari titanlarga qarshi kurashadi.",
        description_ru: "Человечество живёт за стенами. Эрен и его друзья сражаются против титанов.",
        genres: ["Ekshen", "Drama", "Fantastika"],
        year: 2013,
        poster: "https://media.myshows.me/episodes/normal/b/40/b408f4219ad134259904b5f649f58b7b.jpg",
        channel: "https://t.me/TitanlarHujumiUzbekcha",
        episodes: 87,
        seasons: 4
    },
    {
        id: 3,
        title: "One Piece",
        description: "Luffy va ekipaji Buyuk Okeanda xazina izlaydi. Sarguzasht va do'stlik hikoyasi.",
        description_ru: "Луффи и его команда ищут сокровища в Гранд Лайн. История приключений и дружбы.",
        genres: ["Sarguzasht", "Komediya", "Ekshen"],
        year: 1999,
        poster: "https://images.iptv.rt.ru/images/cuutrhbir4sqiatdn2t0.jpg",
        channel: "https://t.me/OnePieceUzbekca",
        episodes: 1080,
        seasons: 20
    },
    {
        id: 4,
        title: "Iblislar Qotili",
        description: "Tanjiro oilasini yo'qotadi va demonlarga qarshi kurashadi. Ajoyib animatsiya va janglar.",
        description_ru: "Танджиро теряет свою семью и сражается с демонами. Великолепная анимация и бои.",
        genres: ["Ekshen", "Fantastika", "Drama"],
        year: 2019,
        poster: "https://silverbirdcinemas.com/wp-content/uploads/2025/09/d1.jpg",
        channel: "https://t.me/IblislarQotiliUzbekchasi",
        episodes: 55,
        seasons: 3
    },
    {
        id: 5,
        title: "O'lim Kundaligi",
        description: "Light Yagami o'lim daftarini topadi. Adolat va jinoyat o'rtasidagi kurash.",
        description_ru: "Лайт Ягами находит Тетрадь смерти. Борьба между справедливостью и преступлением.",
        genres: ["Detektiv", "Triller", "Fantastika"],
        year: 2006,
        poster: "https://avatars.mds.yandex.net/i?id=57b89963a3e3507386e41584ad67fb35_l-5293797-images-thumbs&ref=rim&n=13&w=2000&h=1125",
        channel: "https://t.me/OlimKundaligi_Uzb",
        episodes: 37,
        seasons: 1
    },
    {
        id: 6,
        title: "Jodugarlar Jangi",
        description: "Itadori Yuji yovuz kuchlarga qarshi kurashadi. Zamonaviy ekshen va mistika.",
        genres: ["Ekshen", "Fantastika", "Sarguzasht"],
        year: 2020,
        poster: "https://comicbook.com/wp-content/uploads/sites/4/2024/11/Jujutsu-Kaisen.png?resize=2000,1125",
        channel: "https://t.me/Jodugarlar_Jangi_Uzbek",
        episodes: 48,
        seasons: 2
    },
    {
        id: 7,
        title: "Yolg'izlikda daraja ko'tarish",
        description: "Elric birodarlar alkimyo yordamida onasini qaytarishga harakat qiladi.",
        genres: ["Fantastika", "Sarguzasht", "Drama"],
        year: 2009,
        poster: "https://static.kinoafisha.info/upload/articles/303408252972.jpg",
        channel: "https://t.me/YolgizlikdaDarajaKotarishUzb",
        episodes: 25,
        seasons: 2
    },
    {
        id: 8,
        title: "Mening Qahramonlik Akademiyam",
        description: "Deku va do'stlari qahramon bo'lish uchun kurashadi. Super kuchlar va maktab hayoti.",
        genres: ["Ekshen", "Komediya", "Fantastika"],
        year: 2016,
        poster: "https://wallpapers.com/images/hd/yellow-my-hero-academia-logo-5gatt4vmajs3q8xx.jpg",
        channel: "https://t.me/MeningQahramonlikAkademiyamUz",
        episodes: 138,
        seasons: 6
    },
    {
        id: 9,
        title: "Tokyo Ghoul",
        description: "Kaneki g'ayritabiiy kuchga ega bo'ladi. Ghul va insonlar o'rtasidagi kurash.",
        genres: ["Triller", "Fantastika", "Drama"],
        year: 2014,
        poster: "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/07/tokyo-ghoul-poster-anime.jpg?w=1600&h=900&fit=crop",
        channel: "https://t.me/TokyoGuli_Uzb",
        episodes: 48,
        seasons: 4
    },
    {
        id: 10,
        title: "Ko'k Zindon",
        description: "Ichigo Kurosaki ruhlarni himoya qiladi. Sarguzasht va janglar.",
        genres: ["Ekshen", "Fantastika", "Sarguzasht"],
        year: 2004,
        poster: "https://image.tmdb.org/t/p/original/x6OSrIgRRueeTQ63PoZfUgwpceK.jpg",
          channel: "https://t.me/Kok_zindoni",
        episodes: 38,
        seasons: 2
    },
    {
        id: 11,
        title: "Tokyo Qasoskorlari",
        description: "Gon Freecss otasini topish uchun sarguzashtga chiqadi. Aql va kuch sinovlari.",
        genres: ["Ramantika", "Ekshen", "Drama"],
        year: 2011,
        poster: "https://i.ytimg.com/vi/2aGR92wgqaU/maxresdefault.jpg",
          channel: "https://t.me/TokyoQasoskorlari_uz",
        episodes: 50,
        seasons: 3
    },
    {
        id: 12,
        title: "Gachiakuta",
        description: "Kirito virtual dunyoda omon qolishga harakat qiladi. Texnologiya va sarguzasht.",
        genres: ["Ramantika", "Ekshen", "Drama"],
        year: 2012,
        poster: "https://i.pinimg.com/originals/16/ca/d2/16cad24d23e325e02593a94cb65744d7.jpg?nii=t",
         channel: "https://t.me/Gachaikuta_uzbekcha",
        episodes: 24,
        seasons: 1
    },
    {
        id: 13,
        title: "Qora Klever",
        description: "Asta sehrsiz dunyoda qahramon bo'lishga intiladi. Sehr va do'stlik.",
        genres: ["Fantastika", "Ekshen", "Sarguzasht"],
        year: 2017,
        poster: "https://www.neonsakura.ca/wp-content/uploads/2023/02/black_clover_header3.jpg",
          channel: "https://t.me/QoraKleverUzbekch",
        episodes: 160,
        seasons: 1
    },
    {
        id: 14,
        title: "Voleybol:Haikyuu!!",
        description: "Shoyo Hinata voleybol jamoasida o'zini namoyon qiladi. Sport va do'stlik.",
        genres: ["Sport", "Komediya", "Drama"],
        year: 2014,
        poster: "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/08/15/Haikyu.jpg",
        channel: "https://t.me/voleybol_uzbekcha",
        episodes: 78,
        seasons: 4
    },
    {
        id: 15,
        title: "Takopining Ilk Gunohi",
        description: "Shigeo Kageyama ruhiy kuchlarini boshqarishga harakat qiladi. Komediya va mistika.",
        genres: ["Fantastika", "Komediya", "Drama"],
        year: 2016,
        poster: "https://i.ytimg.com/vi/z35LT_CUMOg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACzgWKAgwIABABGCEgZShPMA8=&rs=AOn4CLCIgu_VixbOLuolSk-3w1j_khLgQg",
        channel: "https://t.me/TakopiningIlkGunohi_uz",
        episodes: 6,
        seasons: 1
    },

];

// 2. Utility: get unique genres and years
function getUniqueGenres(data) {
    const genres = new Set();
    data.forEach(a => a.genres.forEach(g => genres.add(g)));
    return Array.from(genres).sort();
}
function getUniqueYears(data) {
    const years = new Set(data.map(a => a.year));
    return Array.from(years).sort((a,b) => b-a);
}

// 3. Render genre/year filters
function renderFilters() {
    const genreSelect = document.getElementById('genre-filter');
    const yearSelect = document.getElementById('year-filter');
    // selectni tozalash (dublikatlarni oldini olish)
    if (genreSelect) genreSelect.innerHTML = '';
    if (yearSelect) yearSelect.innerHTML = '';
    // selectlarni to'ldirish
    if (genreSelect) {
        // setLanguage() bu selectni to'ldiradi, shuning uchun bu yerda faqat birinchi yuklanishda to'ldirish kerak bo'lishi mumkin
        // yoki umuman bu joyni bo'sh qoldirish mumkin
    }
    if (yearSelect) {
        getUniqueYears(animeData).forEach(y => {
            const opt = document.createElement('option');
            opt.value = y;
            opt.textContent = y;
            yearSelect.appendChild(opt);
        });
    }
}

// 4. Search & filter logic
function filterAnime(search, genre, year) {
    return animeData.filter(a => {
        const matchTitle = a.title.toLowerCase().includes(search.toLowerCase());
        const matchGenre = genre ? a.genres.includes(genre) : true;
        const matchYear = year ? a.year == year : true;
        return matchTitle && matchGenre && matchYear;
    });
}

// 5. Render anime grid
function renderAnimeGrid(animes) {
    const grid = document.getElementById('anime-grid');
    const emptyState = document.getElementById('empty-state');
    if (!grid) return;
    grid.innerHTML = '';
    if (animes.length === 0) {
        emptyState.style.display = 'block';
        // Keep grid layout with empty cards
        for (let i = 0; i < 4; i++) {
            const card = document.createElement('div');
            card.className = 'anime-card';
            card.style.visibility = 'hidden';
            grid.appendChild(card);
        }
        return;
    } else {
        emptyState.style.display = 'none';
    }
    animes.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <img src="${anime.poster}" alt="${anime.title}">
            <div class="anime-info">
                <div>
                    <div class="anime-title">${anime.title}</div>
                    <div class="anime-genres">${anime.genres.join(', ')}</div>
                    <div class="anime-year">${anime.year}</div>
                    <div class="anime-desc">${anime.description}</div>
                </div>
                <button class="batafsil-btn" onclick="location.href='anime.html?id=${anime.id}'">Batafsil</button>
            </div>
        `;
        grid.appendChild(card);
    });
    // Keep grid size consistent
    for (let i = animes.length; i < 4; i++) {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.style.visibility = 'hidden';
        grid.appendChild(card);
    }
    // ...existing code...
}

// 6. Featured carousel (top 5 trending/new anime)
function getFeaturedAnime() {
    // Trending: latest 5 by year
    return animeData.sort((a,b) => b.year - a.year).slice(0,5);
}
function renderCarousel() {
    const carousel = document.getElementById('featured-carousel');
    if (!carousel) return;
    const featured = getFeaturedAnime();
    carousel.innerHTML = `
        <div class="carousel-track">
            ${featured.map(anime => `
                <div class="carousel-item">
                    <img src="${anime.poster}" alt="${anime.title}">
                    <div class="carousel-info">
                        <div class="anime-title">${anime.title}</div>
                        <div class="anime-genres">${anime.genres.join(', ')}</div>
                        <div class="anime-year">${anime.year}</div>
                        <button class="batafsil-btn" onclick="location.href='anime.html?id=${anime.id}'">${translations[localStorage.getItem('site-lang')||'uz']['details']}</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="carousel-controls">
            <button class="carousel-btn" id="carousel-prev">&#8592;</button>
            <button class="carousel-btn" id="carousel-next">&#8594;</button>
        </div>
    `;
    let idx = 0;
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    function updateCarousel() {
        track.style.transition = 'transform 0.6s cubic-bezier(.4,0,.2,1)';
        track.style.transform = `translateX(-${idx * (items[0].offsetWidth + 32)}px)`;
    }
    document.getElementById('carousel-prev').onclick = function() {
        idx = Math.max(0, idx - 1);
        updateCarousel();
    };
    document.getElementById('carousel-next').onclick = function() {
        idx = Math.min(items.length - 1, idx + 1);
        updateCarousel();
    };
    updateCarousel();
}

// 7. Bookmark (Saqlab qo‘yish) logic
function getSavedAnimeIds() {
    return JSON.parse(localStorage.getItem('savedAnimeIds') || '[]');
}
function saveAnime(id) {
    let ids = getSavedAnimeIds();
    if (!ids.includes(id)) {
        ids.push(id);
        localStorage.setItem('savedAnimeIds', JSON.stringify(ids));
    }
}
function removeAnime(id) {
    let ids = getSavedAnimeIds();
    ids = ids.filter(i => i !== id);
    localStorage.setItem('savedAnimeIds', JSON.stringify(ids));
}
function isAnimeSaved(id) {
    return getSavedAnimeIds().includes(id);
}
function renderSavedModal() {
    const modal = document.getElementById('saved-modal');
    const list = document.getElementById('saved-list');
    if (!modal || !list) return;
    list.innerHTML = '';
    const ids = getSavedAnimeIds();
    if (ids.length === 0) {
        list.innerHTML = '<li>Hech qanday anime saqlanmagan</li>';
    } else {
        ids.forEach(id => {
            const anime = animeData.find(a => a.id === id);
            if (anime) {
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.alignItems = 'center';
                li.style.justifyContent = 'space-between';
                li.style.gap = '10px';
                li.style.marginBottom = '7px';
                li.innerHTML = `
                  <span style="color:var(--accent);font-weight:600;">${anime.title}</span>
                  <span style="display:flex;gap:6px;">
                    <a href="anime.html?id=${anime.id}" class="batafsil-btn" style="padding:4px 12px;font-size:0.98rem;">${translations[localStorage.getItem('site-lang')||'uz']['details']}</a>
                    <button onclick="removeAnime(${anime.id});renderSavedModal();" style="background:none;border:none;color:var(--primary);font-size:1rem;cursor:pointer;">O'chirish</button>
                  </span>
                `;
                list.appendChild(li);
            }
        });
    }
    modal.style.display = 'flex';
}
function closeSavedModal() {
    const modal = document.getElementById('saved-modal');
    if (modal) modal.style.display = 'none';
}

// --- Like Button Logic ---
function getLikes() {
    return JSON.parse(localStorage.getItem('animeLikes') || '{}');
}
function likeAnime(id) {
    let likes = getLikes();
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem('animeLikes', JSON.stringify(likes));
}
function getAnimeLikes(id) {
    let likes = getLikes();
    return likes[id] || 0;
}

// --- Search Suggestions/Autocomplete ---
function renderSearchSuggestions(query) {
    const suggestions = document.getElementById('search-suggestions');
    if (!suggestions) return;
    grid.innerHTML = '';
    const lang = localStorage.getItem('site-lang') || 'uz';
    // Implement your search suggestion logic here
    // Example: suggestions.innerHTML = '';
    // Populate suggestions based on query
    suggestions.style.display = 'block';
}

// --- Notification Modal ---
function showNotification(msg) {
    const modal = document.getElementById('notification-modal');
    if (!modal) return;
    modal.textContent = msg;
    modal.style.display = 'block';
    setTimeout(() => { modal.style.display = 'none'; }, 2500);
}

// --- Theme Toggle ---
function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    function setTheme(mode) {
        if (mode === 'light') {
            document.documentElement.style.setProperty('--bg-dark', '#f5f6fa');
            document.documentElement.style.setProperty('--bg-light', '#e9eaf3');
            document.documentElement.style.setProperty('--card-bg', '#fff');
            document.documentElement.style.setProperty('--text-main', '#23242b');
            document.documentElement.style.setProperty('--text-muted', '#6c6f7a');
            btn.textContent = '🌞';
        } else {
            document.documentElement.style.setProperty('--bg-dark', '#181a20');
            document.documentElement.style.setProperty('--bg-light', '#23242b');
            document.documentElement.style.setProperty('--card-bg', '#20222a');
            document.documentElement.style.setProperty('--text-main', '#f5f6fa');
            document.documentElement.style.setProperty('--text-muted', '#b2b6c8');
            btn.textContent = '🌙';
        }
        localStorage.setItem('theme', mode);
    }
    let mode = localStorage.getItem('theme') || 'dark';
    setTheme(mode);
    btn.onclick = function() {
        mode = (mode === 'dark') ? 'light' : 'dark';
        setTheme(mode);
    };
}

// 8. Main page logic
function renderRecentlyViewed() {
    const block = document.getElementById('recently-viewed');
    if (!block) return;
    let ids = JSON.parse(localStorage.getItem('recentlyViewedAnime') || '[]');
    if (!ids.length) {
        block.style.display = 'none';
        return;
    }
    // Faqat oxirgi 12 tasini ko'rsatamiz
    ids = ids.slice(0, 12);
    block.style.display = 'block';
    const lang = localStorage.getItem('site-lang') || 'uz';
    block.innerHTML = `<div class=\"rv-title\">${lang === 'ru' ? 'Недавно просмотренные' : 'So‘nggi ko‘rilganlar'}</div>`;
    const list = document.createElement('div');
    list.className = 'rv-list';
    ids.forEach(rvId => {
        const rvAnime = animeData.find(a => a.id === rvId);
        if (rvAnime) {
            const item = document.createElement('a');
            item.className = 'rv-item';
            item.href = 'anime.html?id=' + rvAnime.id;
            item.title = rvAnime.title;
            item.innerHTML = `<img src=\"${rvAnime.poster}\" alt=\"${rvAnime.title}\"><span>${rvAnime.title}</span>`;
            list.appendChild(item);
        }
    });
    block.appendChild(list);
}

function mainPageInit() {
    renderFilters();
    setLanguage(localStorage.getItem('site-lang') || 'uz');
    renderCarousel();
    renderAnimeGrid(animeData);
    renderRecentlyViewed();
    // Search/filter events
    const searchInput = document.getElementById('search-input');
    const genreFilter = document.getElementById('genre-filter');
    const yearFilter = document.getElementById('year-filter');
    const suggestions = document.getElementById('search-suggestions');
    function updateGrid() {
        const search = searchInput.value;
        const genre = genreFilter.value;
        const year = yearFilter.value;
        const filtered = filterAnime(search, genre, year);
        renderAnimeGrid(filtered);
        renderRecentlyViewed();
    }
    searchInput && searchInput.addEventListener('input', function(e) {
        updateGrid();
        renderSearchSuggestions(searchInput.value);
    });
    genreFilter && genreFilter.addEventListener('change', updateGrid);
    yearFilter && yearFilter.addEventListener('change', updateGrid);
    // Hide suggestions on blur
    if (suggestions) {
        searchInput.addEventListener('blur', () => setTimeout(() => suggestions.style.display = 'none', 200));
    }
    // Saved modal
    const savedLink = document.getElementById('saved-link');
    savedLink && savedLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderSavedModal();
    });
    document.getElementById('close-modal').onclick = closeSavedModal;
    // Theme toggle
    setupThemeToggle();
    // ...existing code...
}

// 9. Anime detail page logic
function animeDetailInit() {
    // URLdan id ni olamiz
    // O'zgaruvchilarni faqat bir marta e'lon qilamiz
    if (window.__animeDetailInitRan) return;
    window.__animeDetailInitRan = true;
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const detail = document.getElementById('anime-detail');
    if (!detail) return;
    if (typeof animeData === 'undefined') {
        detail.innerHTML = '<div class="empty-state">Anime maʼlumotlari topilmadi (animeData yoʻq)</div>';
        return;
    }
    const anime = animeData.find(a => a.id === id);
    if (!anime) {
        detail.innerHTML = '<div class="empty-state">Anime topilmadi</div>';
        return;
    }
    let viewed = JSON.parse(localStorage.getItem('recentlyViewedAnime') || '[]');
    viewed = viewed.filter(i => i !== anime.id);
    viewed.unshift(anime.id);
    if (viewed.length > 10) viewed = viewed.slice(0, 10);
    localStorage.setItem('recentlyViewedAnime', JSON.stringify(viewed));
    // So‘nggi ko‘rilganlarni asosiy sahifada ko‘rsatish
    function renderRecentlyViewed() {
        const block = document.getElementById('recently-viewed');
        if (!block) return;
        const ids = JSON.parse(localStorage.getItem('recentlyViewedAnime') || '[]');
        if (!ids.length) {
            block.style.display = 'none';
            return;
        }
        block.style.display = 'block';
        block.innerHTML = '<div class="rv-title">So‘nggi ko‘rilganlar</div>';
        const list = document.createElement('div');
        list.className = 'rv-list';
        ids.forEach(rvId => {
            const rvAnime = animeData.find(a => a.id === rvId);
            if (rvAnime) {
                const item = document.createElement('a');
                item.className = 'rv-item';
                item.href = 'anime.html?id=' + rvAnime.id;
                item.title = rvAnime.title;
                item.innerHTML = `<img src="${rvAnime.poster}" alt="${rvAnime.title}"><span>${rvAnime.title}</span>`;
                list.appendChild(item);
            }
        });
        block.appendChild(list);
    }
    // DOMContentLoaded da so‘nggi ko‘rilganlarni ko‘rsatish
    window.addEventListener('DOMContentLoaded', () => {
        renderRecentlyViewed();
    });
    // Render anime detail with three buttons: Saqlab qo‘yish, Orqaga qaytish, Tomosha qilish
    // Baholash uchun localStorage va hisoblash
    function getAnimeRating(id) {
        const ratings = JSON.parse(localStorage.getItem('animeRatings') || '{}');
        const arr = ratings[id] || [];
        if (!arr.length) return 0;
        return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
    }
    function getAnimeRatingCount(id) {
        const ratings = JSON.parse(localStorage.getItem('animeRatings') || '{}');
        return (ratings[id] || []).length;
    }
    // Tavsif qisqartirish
    function shortDesc(desc, len = 180) {
        if (desc.length <= len) return desc;
        return desc.slice(0, len) + '...';
    }
    const rating = getAnimeRating(anime.id);
    const ratingCount = getAnimeRatingCount(anime.id);
    const lang = localStorage.getItem('site-lang') || 'uz';
    let desc = anime.description;
    if (lang === 'ru' && anime.description_ru) desc = anime.description_ru;
    const shortDescription = shortDesc(desc);
    // Janr tarjimalari
    const genreMap = {
        ru: {
            'Detektiv': 'Детектив',
            'Drama': 'Драма',
            'Ekshen': 'Экшен',
            'Fantastika': 'Фантастика',
            'Komediya': 'Комедия',
            'Sarguzasht': 'Приключения',
            'Sport': 'Спорт',
            'Triller': 'Триллер'
        },
        uz: {
            'Detektiv': 'Detektiv',
            'Drama': 'Drama',
            'Ekshen': 'Ekshen',
            'Fantastika': 'Fantastika',
            'Komediya': 'Komediya',
            'Sarguzasht': 'Sarguzasht',
            'Sport': 'Sport',
            'Triller': 'Triller'
        }
    };
    const genresTranslated = anime.genres.map(g => {
        if (lang === 'ru') return `<span class="anime-genre">${genreMap.ru[g] || g}</span>`;
        return `<span class="anime-genre">${genreMap.uz[g] || g}</span>`;
    }).join(' ');
    detail.innerHTML = `
        <img class="anime-cover" src="${anime.poster}" alt="${anime.title}">
        <div class="anime-main-info">
            <div class="anime-title">${anime.title}</div>
            <div class="anime-stats">
                <div class="anime-stat"><span style="font-size:2rem;">${anime.year}</span><span class="stat-label">${translations[lang]['year']}</span></div>
                <div class="anime-stat"><span style="font-size:2rem;">${anime.episodes || '-'}"</span><span class="stat-label">${translations[lang]['episodes']}</span></div>
                <div class="anime-stat"><span style="font-size:2rem;">${anime.seasons || '-'}"</span><span class="stat-label">${translations[lang]['seasons']}</span></div>
            </div>
            <div class="anime-genres">
                ${genresTranslated}
            </div>
            <div class="anime-status">${translations[lang]['status']}: <span style="color:#7fff7f">${translations[lang]['completed']}</span></div>
            <div class="anime-btns">
                <button id="watch-btn" class="batafsil-btn">${translations[lang]['watch']}</button>
                <button id="save-btn" class="batafsil-btn"></button>
                <button id="back-btn" class="batafsil-btn">${translations[lang]['back']}</button>
            </div>
        </div>
        <div class="anime-rating-panel">
            <span class="anime-rating-score" id="anime-rating-score">${rating}</span>
            <div class="anime-rating-stars" id="anime-rating-stars">
                ${[1,2,3,4,5].map(i => `<span class="anime-rating-star" data-star="${i}">&#9733;</span>`).join('')}
            </div>
            <span style="color:#b2b6c8;font-size:1rem;">(${ratingCount} ${translations[lang]['rating-count']})</span>
        </div>
        <div class="anime-desc-block">
            <div class="anime-desc-title">${translations[lang]['about-anime']}</div>
            <div class="anime-desc-short" id="anime-desc-short">${shortDescription}</div>
            ${desc.length > 180 ? `<button class="desc-more-btn" id="desc-more-btn">${translations[lang]['more']}</button>` : ''}
            <div class="anime-desc-full" id="anime-desc-full" style="display:none;">${desc}</div>
        </div>
    `;
    // Baholash yulduzlari interaktivligi
    const stars = detail.querySelectorAll('.anime-rating-star');
    const scoreEl = detail.querySelector('#anime-rating-score');
    function updateStars(val) {
        stars.forEach((s, i) => {
            if (i < val) s.classList.add('filled');
            else s.classList.remove('filled');
        });
    }
    updateStars(Math.round(rating));
    stars.forEach((star, idx) => {
        star.addEventListener('mouseenter', () => updateStars(idx+1));
        star.addEventListener('mouseleave', () => updateStars(Math.round(rating)));
        star.addEventListener('click', () => {
            let ratings = JSON.parse(localStorage.getItem('animeRatings') || '{}');
            if (!ratings[anime.id]) ratings[anime.id] = [];
            ratings[anime.id].push(idx+1);
            localStorage.setItem('animeRatings', JSON.stringify(ratings));
            const newRating = getAnimeRating(anime.id);
            const newCount = getAnimeRatingCount(anime.id);
            scoreEl.textContent = newRating;
            detail.querySelector('span[style*="color:#b2b6c8"]').textContent = `(${newCount} baho)`;
            updateStars(Math.round(newRating));
        });
    });
    // Ko‘proq tugmasi logikasi
    const moreBtn = detail.querySelector('#desc-more-btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            detail.querySelector('#anime-desc-short').style.display = 'none';
            detail.querySelector('#anime-desc-full').style.display = 'block';
            moreBtn.style.display = 'none';
        });
    }
    // Saqlab qo‘yish button logic
    const saveBtn = document.getElementById('save-btn');
    function updateSaveBtn() {
        const lang = localStorage.getItem('site-lang') || 'uz';
        if (isAnimeSaved(anime.id)) {
            saveBtn.textContent = translations[lang]['saved'];
            saveBtn.disabled = true;
        } else {
            saveBtn.textContent = translations[lang]['save'];
            saveBtn.disabled = false;
        }
    }
    updateSaveBtn();
    saveBtn.onclick = function() {
        saveAnime(anime.id);
        updateSaveBtn();
    };
    // Orqaga qaytish button logic
    const backBtn = document.getElementById('back-btn');
    backBtn.onclick = function() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = 'index.html';
        }
    };
    // Tomosha qilish button logic
    const watchBtn = document.getElementById('watch-btn');
    watchBtn.onclick = function() {
        if (anime.channel) {
            window.open(anime.channel, '_blank');
        } else {
                alert('Fasllar topilmadi');
        }
    };
}

// --- Loader Logic ---
function showLoader() {
    const loader = document.getElementById('loader-overlay');
    if (loader) loader.style.display = 'flex';
}
function hideLoader() {
    const loader = document.getElementById('loader-overlay');
    if (loader) loader.style.display = 'none';
}

// 10. Page init
if (document.getElementById('anime-grid')) {
    showLoader();
    setTimeout(() => {
        mainPageInit();
        setupBurgerMenu();
        hideLoader();
    }, 800);
} else if (document.getElementById('anime-detail')) {
    showLoader();
    setTimeout(() => {
        animeDetailInit();
        setupBurgerMenu();
        hideLoader();
    }, 800);
}
