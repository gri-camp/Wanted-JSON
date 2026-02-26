const Responses = {
  books: {
    getEntities: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 1,
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        genre: "Фэнтези",
        publicationYear: 1997,
        isbn: '978-5-389-07435-4',
        pageCount: 432, 
        publisher: "Махаон",
        ageRating: '6+',
        price: 1149.00,
        description: "Мальчик, выросший в чулане, узнает, что он волшебник, и попадает в школу, где письма доставляют совы, а в подземельях спит трехголовый пес.",
        mainCharacters: <span class='purple'>[</span>"Гарри Поттер", "Гермиона Грейнджер", "Рон Уизли"<span class='purple'>]</span>,
        scene: "Хогвартс, Англия",
        awards: <span class='purple'>[</span>"nestlé smarties book prize for 9 to 11 years"<span class='purple'>]</span>,
        originalLanguage: "английский",      
        goodreadsRating: 4.50,
        tags: ["магия", "школа", "дружба"],
        movieAdaptation: true,            
        movieTitle: "Гарри Поттер и философский камень",
        lastUpdated : "2025-10-22",
    <span class='purple'>}</span>,           
    ...
    <span class='purple'>]</span>,
    "total": 30,
    "page": 1,
    "limit": 10,
    "totalPages": 3,
<span class='purple'>}</span>           
</code>`,
    getEntitiesQS: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 6,
        title: "Убить пересмешника",
        author: "Харпер Ли",
        genre: "Роман",
        publicationYear: 1960,
        isbn: '978-5-17-104721-4',
        pageCount: 416, 
        publisher: "АСТ",
        ageRating: '12+',
        price: 799.00,
        description: "Маленькая девочка наблюдает, как ее отец-адвокат защищает чернокожего парня в городе, где даже соседи делятся на своих и чужих.",
        mainCharacters: <span class='purple'>[</span>"Аттикус Финч", "Скаут Финч", "Артур 'Страшила' Рэдли", "Джереми Финч"<span class='purple'>]</span>,
        scene: "Мейкомб, Алабама",
        awards: <span class='purple'>[</span>"Пулитцеровская премия(1961)", "quill award for audio book(2007)"<span class='purple'>]</span>,
        originalLanguage: "английский",      
        goodreadsRating: 4.27,
        tags: ["классика", "социальная драма"],
        movieAdaptation: true,            
        movieTitle: "Убить пересмешника",
        lastUpdated : "2025-10-22",
    <span class='purple'>}</span>,
    ...
    <span class='purple'>]</span>,
    "total": 30,
    "page": 2,
    "limit": 5,
    "totalPages": 6,
<span class='purple'>}</span>           
</code>`,
    getSingleEntity: `
<code><span class='purple'>{</span>    
    id: 2,
    title: "Властелин колец: Братство Кольца",
    author: "Дж. Р. Р. Толкин",
    genre: "Фэнтези",
    publicationYear: 1954,
    isbn: '978-5-17-081802-0',
    pageCount: 480, 
    publisher: "АСТ",
    ageRating: '12+',
    price: 549.00,
    description: "Небольшой отряд из девяти путников сопровождает хоббита, который несет кольцо, способное подчинить себе весь мир, к жерлу вулкана.",
    mainCharacters: <span class='purple'>[</span>"Фродо Бэггинс", "Гэндальф", "Арагорн"<span class='purple'>]</span>,
    scene: "Средиземье",
    awards: <span class='purple'>[</span>"International Fantasy Award"<span class='purple'>]</span>,
    originalLanguage: "английский",      
    goodreadsRating: 4.40,
    tags: ["эпическое фэнтези", "приключения"],
    movieAdaptation: true,            
    movieTitle: "Властелин колец: Братство Кольца",
    lastUpdated : "2025-10-22",    
<span class='purple'>}</span>
</code>`,
    getSearchedEntity: `
<code><span class='purple'>{</span>
    data: <span class='purple'>[</span> 
    <span class='purple'>{</span>
        id: 2,
        title: "Властелин колец: Братство Кольца",
        author: "Дж. Р. Р. Толкин",
        genre: "Фэнтези",
        publicationYear: 1954,
        isbn: '978-5-17-081802-0',
        pageCount: 480, 
        publisher: "АСТ",
        ageRating: '12+',
        price: 549.00,
        description: "Небольшой отряд из девяти путников сопровождает хоббита, который несет кольцо, способное подчинить себе весь мир, к жерлу вулкана.",
        mainCharacters: <span class='purple'>[</span>"Фродо Бэггинс", "Гэндальф", "Арагорн"<span class='purple'>]</span>,
        scene: "Средиземье",
        awards: <span class='purple'>[</span>"International Fantasy Award"<span class='purple'>]</span>,
        originalLanguage: "английский",      
        goodreadsRating: 4.40,
        tags: ["эпическое фэнтези", "приключения"],
        movieAdaptation: true,            
        movieTitle: "Властелин колец: Братство Кольца",
        lastUpdated : "2025-10-22",
    <span class='purple'>}</span>,
    ...
    <span class='purple'>]</span>,
    "total": 3,
    "page": 1,
    "limit": 3,
    "totalPages": 1,
<span class='purple'>}</span>
</code>`,
    addEntity: `
<code> // Код ответа: <span class='success'>201</span>.

<strong class='purple'>{</strong>    
    id: '36',        
    title: "Гений", <span class="danger">*</span>                
    author: "Теодор Драйзер", <span class="danger">*</span>
    genre: 'роман', <span class="danger">*</span>
    publicationYear: 1915,
    isbn: "978-5-04-198799-2",
    pageCount: 1110, 
    description: "Герой романа 'Гений', талантливый художник Юджин Витла, во многом сродни своему создателю – американскому писателю Теодору Драйзеру. Их сближают не только биографические совпадения, но и эстетические взгляды.",
    tags: <span class='purple'>[</span>"Американская классика", "Зарубежная классика", "Судьба человека"<span class='purple'>]</span>,                        
    originalLanguage: "английский",
    ...        
<strong class='purple'>}</strong>
</code>`,
    deleteEntity: `
<code> // Код ответа: <span class='success'>200</span>.

<strong class='purple'>{</strong>
    id: 6,
    title: "Убить пересмешника",
    author: "Харпер Ли",
    genre: "Роман",
    publicationYear: 1960,
    isbn: '978-5-17-104721-4',
    pageCount: 416, 
    publisher: "АСТ",
    ageRating: '12+',
    price: 799.00,
    description: "Маленькая девочка наблюдает, как ее отец-адвокат защищает чернокожего парня в городе, где даже соседи делятся на своих и чужих.",
    mainCharacters: <span class='purple'>[</span>"Аттикус Финч", "Скаут Финч", "Артур 'Страшила' Рэдли", "Джереми Финч"<span class='purple'>]</span>,
    scene: "Мейкомб, Алабама",
    awards: <span class='purple'>[</span> "Пулитцеровская премия(1961)", "quill award for audio book(2007)" <span class='purple'>]</span>,
    originalLanguage: "английский",      
    goodreadsRating: 4.27,
    tags: ["классика", "социальная драма"],
    movieAdaptation: true,            
    movieTitle: "Убить пересмешника",
    lastUpdated : "2025-10-22",    
<strong class='purple'>}</strong>
</code>`,
  },
  athletes: {
    getEntities: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 1,
        fullName: "Лионель Месси",
        sport: "Футбол",
        country: 'Аргентина',
        age: 38,
        birthPlace: 'Росарио, Аргентина',
        birthDate: '1987-06-24',
        zodiacSign: 'Рак',
        gender: "мужской",
        height: 170,
        nationality: 'Аргентинец',
        position: 'Нападающий',
        currentTeam: 'Интер Майами, Сборная Аргентины по футболу',
        mainAchievements: <span class='purple'>[</span>"8 Золотых мячей", "6 золотых бутс", "Чемпион мира 2022", "4 Лиги Чемпионов УЕФА", "Президентская медаль Свободы"<span class='purple'>]</span>,          
        annualSalary: 53321240.00,
        instagramFollowers: 507718702,
        olympics: 'Золото 2008 Пекин',
        brandAmbassador: 'Adidas, Michelob Ultra, Sayyar, Huawei',
        firstVictory: 'Чемпионат мира U-20 2005',
        hobbies: 'Теннис, баскетбол, американский футбол, видеоигры, падел',
        isActive: true,  
        lastUpdated: '2025-10-25',
    <span class='purple'>}</span>,       
    ...
    <span class='purple'>]</span>,
    "total": 28,
    "page": 1,
    "limit": 10,
    "totalPages": 3,
<span class='purple'>}</span>           
</code>`,
    getEntitiesQS: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 6,
        fullName: "Новак Джокович",
        sport: "Теннис",
        country: 'Сербия',
        age: 38,
        birthPlace: 'Белград, Сербия',
        birthDate: '1987-05-22',
        zodiacSign: 'Близнецы',
        gender: "мужской",
        height: 188,
        nationality: 'Серб',
        position: 'shooting guard',
        currentTeam: null,
        mainAchievements: <span class='purple'>[</span>"24 титула Большого шлема", "100 побед на турнирах АТР", "10 побед на Australian Open", "40 титулов на «Мастерсах»", "7 побед на Уимблдоне"<span class='purple'>]</span>,          
        annualSalary: 32000000.00,
        instagramFollowers: 16e6,
        olympics: 'Бронза 2008 Пекин, Лондон 2012, Рио-де-Жанейро 2016, золото Париж 2024',
        brandAmbassador: 'Lacoste, Hublot, Aman Resorts, Qatar Airways, Joe & The Juice',
        firstVictory: 'Первый титул ATP 2006 в Амерсфорте',
        hobbies: 'Походы, бег, плавание, велосипедные прогулки, футбол, баскетбол',
        isActive: true, 
        lastUpdated: '2025-10-28',
    <span class='purple'>}</span>,
    ...
    <span class='purple'>]</span>,
    "total": 28,
    "page": 2,
    "limit": 5,
    "totalPages": 6,
<span class='purple'>}</span>           
</code>`,
    getSingleEntity: `
<code><span class='purple'>{</span>     
    id: 2,
    fullName: "Криштиану Роналду",
    sport: "Футбол",
    country: 'Португалия',
    age: 40,
    birthPlace: 'Фуншал, Мадейра',
    birthDate: '1985-02-05',
    zodiacSign: 'Водолей',
    gender: "мужской",
    height: 187,
    nationality: 'Португалец',
    position: 'Нападающий',
    currentTeam: 'Аль-Наср, Сборная Португалии по футболу',
    mainAchievements: <span class='purple'>[</span>"5 Золотых мячей", "5 Лиг Чемпионов УЕФА", "Лучший бомбардир в истории футбола", "Победитель Евро-2016"<span class='purple'>]</span>,          
    annualSalary: 208400000.00,
    instagramFollowers: 667000000,
    olympics: '2004 Афины',
    brandAmbassador: 'Nike, Herbalife, Tag Heuer, Clear, American Tourister, Emirates, SIXPAD, Binance',
    firstVictory: 'Кубок Португалии 2003 со Спортингом',
    hobbies: 'Бильярд, картинг, падел, ходить в кино, петь',
    isActive: true,  
    lastUpdated: '2025-10-25',   
<span class='purple'>}</span>
</code>`,
    getSearchedEntity: `
<code><span class='purple'>{</span>
    data: <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 4,
        fullName: "Леброн Джеймс",
        sport: "Баскетбол",
        country: 'США',
        age: 40,
        birthPlace: 'Акрон, Огайо',
        birthDate: '1984-12-30',
        zodiacSign: 'Козерог',
        gender: "мужской",
        height: 206,
        nationality: 'Американец',
        position: 'Легкий форвард',
        currentTeam: 'Лос-Анджелес Лейкерс',
        mainAchievements: <span class='purple'>[</span>"4-кратный чемпион НБА", "4-кратный MVP НБА", "3 олимпийских золота", "Чемпион Америки 2007", "Лучший снайпер в истории НБА"<span class='purple'>]</span>,          
        annualSalary: 46000000.00,
        instagramFollowers: 159000000,
        olympics: 'Бронза 2004 Афины, Золото 2008 Пекин, 2012 Лондон, 2024 Париж',
        brandAmbassador: 'Nike, McDonalds, Coca-Cola, Upper Deck',
        firstVictory: 'Чемпион НБА 2012',
        hobbies: 'Велосипедные прогулки, йога, пилатес, бег',
        isActive: true, 
        lastUpdated: '2025-10-25',
    <span class='purple'>}</span>,
    ...  
    <span class='purple'>]</span>,
    "total": 4,
    "page": 1,
    "limit": 4,
    "totalPages": 1,
<span class='purple'>}</span>
</code>`,
    addEntity: `
<code> // Код ответа: <span class='success'>201</span>.

<strong class='purple'>{</strong>    
    id: 33,        
    fullName: "A.T. Reaves", <span class="danger">*</span>
    sport: "basketball", <span class="danger">*</span>
    country: 'USA', <span class="danger">*</span>
    age: 27, <span class="danger">*</span>                
    olympics: null,
    brandAmbassador: 'TravisMathew, Rigorer',
    firstVictory: '2023, Кубок НБА',
    hobbies: 'гольф, видеоигры',
    isActive: true,             
    ...
<strong class='purple'>}</strong>
</code>`,
    deleteEntity: `
<code> // Код ответа: <span class='success'>200</span>.

<strong class='purple'>{</strong>    
    id: 6,
    fullName: "Новак Джокович",
    sport: "Теннис",
    country: 'Сербия',
    age: 38,
    birthPlace: 'Белград, Сербия',
    birthDate: '1987-05-22',
    zodiacSign: 'Близнецы',
    gender: "мужской",
    height: 188,
    nationality: 'Серб',
    position: 'shooting guard',
    currentTeam: null,
    mainAchievements: <span class='purple'>[</span>"24 титула Большого шлема", "100 побед на турнирах АТР", "10 побед на Australian Open", "40 титулов на «Мастерсах»", "7 побед на Уимблдоне"<span class='purple'>]</span>,          
    annualSalary: 32000000.00,
    instagramFollowers: 14.8e6,
    olympics: 'Бронза 2008 Пекин, Лондон 2012, Рио-де-Жанейро 2016, золото Париж 2024',
    brandAmbassador: 'Lacoste, Hublot, Aman Resorts, Qatar Airways, Joe & The Juice',
    firstVictory: 'Первый титул ATP 2006 в Амерсфорте',
    hobbies: 'Походы, бег, плавание, велосипедные прогулки, футбол, баскетбол',
    isActive: true, 
    lastUpdated: '2025-10-28',  
<strong class='purple'>}</strong>
</code>`,
  },
  videoGames: {
    getEntities: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 1,
        title: "ELDEN RING NIGHTREIGN",
        developer: "FromSoftware, Inc.",
        publisher: 'FromSoftware, Inc., Bandai Namco Entertainment',
        releaseDate: '2025-05-30',
        genre: 'Экшены, Ролевые игры',
        platforms: <span class='purple'>[</span>"PlayStation 5", "PlayStation 4", "Xbox One", "Xbox Series X|S", "Windows"<span class='purple'>]</span>,
        ageRating: '16+',
        price: 39.99,
        description: 'Кооперативный экшен, в котором трое игроков управляют проклятыми воителями, пытаясь за одну ночь отыскать ключи к запечатанному чертогу Полуночного Эрдтри.',
        setting: 'Параллельная версия Междуземья, где ночь никогда не кончается, а законы физики и магии искажены влиянием потусторонних сущностей.',
        awards: <span class='purple'>[</span>"Japan Game Awards 2025"<span class='purple'>]</span>,
        tags: <span class='purple'>[</span>"похода на Dark Souls", "сетевой кооператив", "для нескольких игроков", "Рогалик"<span class='purple'>]</span>,
        hasSequel: false,          
        sequelTitle: null,
        multiplayer: true,
        lastUpdated: '2025-12-06',
    <span class='purple'>}</span>,       
    ...
    <span class='purple'>]</span>,
    "total": 30,
    "page": 1,
    "limit": 10,
    "totalPages": 3,
<span class='purple'>}</span>           
</code>`,
    getEntitiesQS: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 6,
        title: "Battlefield™",
        developer: "Battlefield Studios",
        publisher: 'Electronic Arts',
        releaseDate: '2025-10-10',
        genre: 'Экшены',
        platforms: <span class='purple'>[</span>"ПК", "PlayStation 5", "Xbox Series X|S"<span class='purple'>]</span>,
        ageRating: null,
        price: 69.99,
        description: 'Масштабные бои с упором на разрушаемость окружения и использование тяжелой техники, где каждый игрок влияет на общую картину боя.',
        setting: 'Ближайшее будущее, противостояние сверхдержав, разрушенные города Европы и Азии.',
        awards: null,
        tags: <span class='purple'>[</span>"Шутер от первого лица", "Для нескольких игроков", "Экшен"<span class='purple'>]</span>,
        hasSequel: false,          
        sequelTitle: null,
        multiplayer: true,
        lastUpdated: '2025-12-06',
    <span class='purple'>}</span>,
    ...
    <span class='purple'>]</span>,
    "total": 30,
    "page": 2,
    "limit": 5,
    "totalPages": 6,
<span class='purple'>}</span>           
</code>`,
    getSingleEntity: `
<code><span class='purple'>{</span>     
    id: 2,
    title: "Counter-Strike 2",
    developer: "Valve",
    publisher: 'Valve',
    releaseDate: '2023-09-27',
    genre: 'Экшен, Экшен от первого лица, бесплатные',
    platforms: <span class='purple'>[</span>"Windows", "Linux"<span class='purple'>]</span>,
    ageRating: '18+',
    price: 0.00,
    description: 'Тактический шутер, где исход раунда решают доли секунды, точный расчет и умение читать поведение противника по звукам и карте.',
    setting: 'Современный мир, зоны локальных вооруженных конфликтов, где спецподразделения противостоят террористическим ячейкам.',
    awards: null,
    tags: <span class='purple'>[</span>"Шутер от первого лица", "Для нескольких игроков", "Экшен"<span class='purple'>]</span>,
    hasSequel: false,          
    sequelTitle: null,
    multiplayer: true,   
<span class='purple'>}</span>
</code>`,
    getSearchedEntity: `
<code><span class='purple'>{</span>
    data: <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 2,
        title: "Counter-Strike 2",
        developer: "Valve",
        publisher: 'Valve',
        releaseDate: '2023-09-27',
        genre: 'Экшен, Экшен от первого лица, бесплатные',
        platforms: <span class='purple'>[</span>"Windows", "Linux"<span class='purple'>]</span>,
        ageRating: '18+',
        price: 0.00,
        description: 'Тактический шутер, где исход раунда решают доли секунды, точный расчет и умение читать поведение противника по звукам и карте.',
        setting: 'Современный мир, зоны локальных вооруженных конфликтов, где спецподразделения противостоят террористическим ячейкам.',
        awards: null,
        tags: <span class='purple'>[</span>"Шутер от первого лица", "Для нескольких игроков", "Экшен"<span class='purple'>]</span>,
        hasSequel: false,          
        sequelTitle: null,
        multiplayer: true,
        lastUpdated: '2025-12-06',
    <span class='purple'>}</span>,
    ...       
    <span class='purple'>]</span>,
    "total": 4,
    "page": 1,
    "limit": 4,
    "totalPages": 1,
<span class='purple'>}</span>
</code>`,
    addEntity: `
<code> // Код ответа: <span class='success'>201</span>.

<strong class='purple'>{</strong>    
    id: 31,
    title: "First Empire", <span class="danger">*</span>    
    genre: 'Экшен-RPG, стратегия', <span class="danger">*</span>    
    ageRating: '16+', <span class="danger">*</span>
    price: 55.33, <span class="danger">*</span>
    description: 'стратегия в реальном времени (RTS) в изометрической проекции со связанным сюжетом и элементами RPG',
    setting: 'Мир основан на детально проработанной базе из одноимённой серии книг пана Сапковского',
    awards: null,         
    ...
<strong class='purple'>}</strong>
</code>`,
    deleteEntity: `
<code> // Код ответа: <span class='success'>200</span>.

<strong class='purple'>{</strong>    
    id: 6,
    title: "Battlefield™",
    developer: "Battlefield Studios",
    publisher: 'Electronic Arts',
    releaseDate: '2025-10-10',
    genre: 'Экшены',
    platforms: <span class='purple'>[</span>"ПК", "PlayStation 5", "Xbox Series X|S"<span class='purple'>]</span>,
    ageRating: null,
    price: 69.99,
    description: 'Масштабные бои с упором на разрушаемость окружения и использование тяжелой техники, где каждый игрок влияет на общую картину боя.',
    setting: 'Ближайшее будущее, противостояние сверхдержав, разрушенные города Европы и Азии.',
    awards: null,
    tags: <span class='purple'>[</span>"Шутер от первого лица", "Для нескольких игроков", "Экшен"<span class='purple'>]</span>,
    hasSequel: false,          
    sequelTitle: null,
    multiplayer: true,
    lastUpdated: '2025-12-06',  
<strong class='purple'>}</strong>
</code>`,
  },
  movies: {
    getEntities: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 1,
        title: 'Начало',
        originalTitle: 'Inception',
        releaseYear: 2010,
        duration: 148,
        country: 'США, Великобритания',
        language: 'Английский,
        director: 'Кристофер Нолан',
        mainActors: <span class='purple'>[</span>"Леонардо ДиКаприо", "Джозеф Гордон-Левитт", "Эллиот Пейдж", "Том Харди"<span class='purple'>]</span>,
        genre: <span class='purple'>[</span>"фантастика", "боевик", "триллер"<span class='purple'>]</span>,
        ageRating: '12+',
        budget: 160000000.00,
        boxOffice: 836800000.00,
        imdb: 8.8,
        kinopoiskRating: 8.7,
        awards: <span class='purple'>[</span>"Оскар (4 номинации)", "BAFTA (9 номинаций)"<span class='purple'>]</span>,
        description: 'Кристофер Нолан приглашает зрителя в путешествие по этажам снов, где архитектура подчиняется законам подсознания, а реальность сворачивается в спираль. Команда профессионалов внедряется в разум наследника империи, чтобы посеять там не просто идею, а целую философию.',
        location: <span class='purple'>[</span>"Токио", "Лос-Анджелес", "Париж", "Лондон"<span class='purple'>]</span>,
        studio: "Warner Bros.",
        isSeries: false,
        seasons: null,
        lastUpdated: '2025-12-25',
    <span class='purple'>}</span>,
    ...
    <span class='purple'>]</span>,
    "total": 45,
    "page": 1,
    "limit": 10,
    "totalPages": 5,
<span class='purple'>}</span></code>`,
    getEntitiesQS: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 6,
        title: 'Звёздные войны: Новая надежда',
        originalTitle: 'Star Wars: Episode IV - A New Hope',
        releaseYear: 1977,
        duration: 121,
        country: 'США',
        language: 'Английский,
        director: 'Джордж Лукас',
        mainActors: <span class='purple'>[</span>"Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"<span class='purple'>]</span>,
        genre: <span class='purple'>[</span>"фантастика", "приключения", "боевик"<span class='purple'>]</span>,
        ageRating: '6+',
        budget: 11000000.00,
        boxOffice: 775800000.00,
        imdb: 8.6,
        kinopoiskRating: 8.1,
        awards: <span class='purple'>[</span>"Оскар (6 побед)"<span class='purple'>]</span>,
        description: 'В далекой галактике сирота с пустынной планеты случайно становится обладателем таинственного сообщения от принцессы. Вместе с космическим пиратом и древним рыцарем он отправляется в путь, который решит судьбу всей Империи.',
        location: <span class='purple'>[</span>"Тунис", "Гватемала", "Калифорния"<span class='purple'>]</span>,
        studio: "Lucasfilm",
        isSeries: false,
        seasons: null,
        lastUpdated: '2025-12-25',
    <span class='purple'>}</span>,        
    ...
    <span class='purple'>]</span>,
    "total": 45,
    "page": 2,
    "limit": 5,
    "totalPages": 9,
<span class='purple'>}</span></code>`,
    getSingleEntity: `
<code><span class='purple'>{</span>        
    id: 2,
    title: 'Побег из Шоушенка',
    originalTitle: 'The Shawshank Redemption',
    releaseYear: 1994,
    duration: 142,
    country: 'США',
    language: 'Английский,
    director: 'Фрэнк Дарабонт',
    mainActors: <span class='purple'>[</span>"Тим Роббинс", "Морган Фриман", "Боб Гантон"<span class='purple'>]</span>,
    genre: <span class='purple'>[</span>"фантастика", "боевик", "триллер"<span class='purple'>]</span>,
    ageRating: '16+',
    budget: 25000000.00,
    boxOffice: 73300000.00,
    imdb: 9.3,
    kinopoiskRating: 9.1,
    awards: <span class='purple'>[</span>"Оскар (7 номинаций)"<span class='purple'>]</span>,
    description: 'В стенах суровой тюремной системы разворачивается история о том, как надежда становится самым опасным и самым мощным инструментом выживания. Банкир с глазами мечтателя бросает вызов системе, не имея ни оружия, ни связей.',
    location: <span class='purple'>[</span>"Мэн, США"<span class='purple'>]</span>,
    studio: "Castle Rock Entertainment",
    isSeries: false,
    seasons: null,
    lastUpdated: '2025-12-25',       
<span class='purple'>}</span></code>`,
    getSearchedEntity: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>        
        <span class='purple'>{</span>
            id: 2,
            title: 'Побег из Шоушенка',
            "originalTitle": 'The Shawshank Redemption',
            "releaseYear": 1994,
            duration: 142,
            country: 'США',
            language: 'Английский,
            director: 'Фрэнк Дарабонт',
            "mainActors": <span class='purple'>[</span>"Тим Роббинс", "Морган Фриман", "Боб Гантон"<span class='purple'>]</span>,
            genre: <span class='purple'>[</span>"фантастика", "боевик", "триллер"<span class='purple'>]</span>,
            ageRating: '16+',
            budget: 25000000.00,
            boxOffice: 73300000.00,
            imdb: 9.3,
            kinopoiskRating: 9.1,
            awards: <span class='purple'>[</span>"Оскар (7 номинаций)"<span class='purple'>]</span>,
            description: 'В стенах суровой тюремной системы разворачивается история о том, как надежда становится самым опасным и самым мощным инструментом выживания. Банкир с глазами мечтателя бросает вызов системе, не имея ни оружия, ни связей.',
            location: <span class='purple'>[</span>"Мэн, США"<span class='purple'>]</span>,
            studio: "Castle Rock Entertainment",
            isSeries: false,
            seasons: null,
            lastUpdated: '2025-12-25',         
        <span class='purple'>}</span>       
        ...
    <span class='purple'>]</span>,
    "total": 5,
    "page": 1,
    "limit": 5,
    "totalPages": 1,
<span class='purple'>}</span></code>`,
    addEntity: `
<code> // Код ответа: <span class='success'>201</span>.

<strong class='purple'>{</strong>    
    id: 46,
    title: "Cчастливое число Слевина", <span class="danger">*</span> 
    country: "CША", <span class="danger">*</span>
    ageRating: '16+', <span class="danger">*</span>
    releaseYear: 2006, <span class="danger">*</span>   
    genre: <span class='purple'>[</span>"триллер", "драма", "преступление"<span class='purple'>]</span>,  
    description: 'Главный герой, Слевин, получает загадочное сообщение о том, что его жизнь может измениться благодаря некоему «счастливому числу». Однако вместо удачи он сталкивается с серией загадочных и опасных событий.',
    awards: null,
    imdb: 7.7,         
    ...
<strong class='purple'>}</strong>
</code>`,
    deleteEntity: `
<code> // Код ответа: <span class='success'>200</span>.

<strong class='purple'>{</strong> 
    id: 6,
    title: 'Звёздные войны: Новая надежда',
    originalTitle: 'Star Wars: Episode IV - A New Hope',
    releaseYear: 1977,
    duration: 121,
    country: 'США',
    language: 'Английский,
    director: 'Джордж Лукас',
    "mainActors": <span class='purple'>[</span>"Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"<span class='purple'>]</span>,
    genre: <span class='purple'>[</span>"фантастика", "приключения", "боевик"<span class='purple'>]</span>,
    ageRating: '6+',
    budget: 11000000.00,
    boxOffice: 775800000.00,
    imdb: 8.6,
    kinopoiskRating: 8.1,
    awards: <span class='purple'>[</span>"Оскар (6 побед)"<span class='purple'>]</span>,
    description: 'В далекой галактике сирота с пустынной планеты случайно становится обладателем таинственного сообщения от принцессы. Вместе с космическим пиратом и древним рыцарем он отправляется в путь, который решит судьбу всей Империи.',
    location: <span class='purple'>[</span>"Тунис", "Гватемала", "Калифорния"<span class='purple'>]</span>,
    studio: "Lucasfilm",
    isSeries: false,
    seasons: null,
    lastUpdated: '2025-12-25',
<strong class='purple'>}</strong></code>`,
  },
  cars: {
    getEntities: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 1,
        brand: 'Toyota',
        model: 'Camry XV70',
        country: 'Япония',
        modelYear: 2017,
        engineTypes: <span class='purple'>[</span>"атмосферный", "гибрид"<span class='purple'>]</span>,
        bodyType: <span class='purple'>[</span>"седан"<span class='purple'>]</span>,
        transmissionType: 'автоматическая',
        basePrice: 25000.00,
        enginePowerList: <span class='purple'>{</span>"Н·м": 190, "л.с.": 150 <span class='purple'>}</span>, 
        segment: 'эконом',
        licenseCategory: 'B',
        annualProduction: 500000,
        topSales: 'США',
        euroStandart: 'Евро 6',
        colors: <span class='purple'>[</span>"белый", "черный", "серебристый", "синий"<span class='purple'>]</span>,
        headlights: 'светодиодные',
        lastUpdated: '2025-12-27',
    <span class='purple'>}</span>,        
    ...
    <span class='purple'>]</span>,
    "total": 30,
    "page": 1,
    "limit": 10,
    "totalPages": 3,
<span class='purple'>}</span></code>`,
    getEntitiesQS: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 6,
        brand: 'Tesla',
        model: 'Model 3',
        country: 'США',
        modelYear: 2017,
        engineTypes: <span class='purple'>[</span>"электрический"<span class='purple'>]</span>,
        bodyType: <span class='purple'>[</span>"седан"<span class='purple'>]</span>,
        transmissionType: 'автоматическая',
        basePrice: 45050.84,
        enginePowerList: <span class='purple'>{</span>"Н·м": 375, "л.с.": 283 <span class='purple'>}</span>, 
        segment: 'премиум',
        licenseCategory: 'B',
        annualProduction: 500000,
        topSales: 'Китай',
        euroStandart: 'Евро 6',
        colors: <span class='purple'>[</span>"белый", "черный", "красный", "синий"<span class='purple'>]</span>,
        headlights: 'светодиодные',
        lastUpdated: '2025-12-27',
    <span class='purple'>}</span>,             
    ...
    <span class='purple'>]</span>,
    "total": 30,
    "page": 2,
    "limit": 5,
    "totalPages": 6,
<span class='purple'>}</span></code>`,
    getSingleEntity: `
<code><span class='purple'>{</span>    
    id: 2,
    brand: 'BMW',
    model: 'X5 G05',
    country: 'Германия',
    modelYear: 2018,
    engineTypes: <span class='purple'>[</span>"турбо", "дизель"<span class='purple'>]</span>,
    bodyType: <span class='purple'>[</span>"внедорожник", "кроссовер"<span class='purple'>]</span>,
    transmissionType: 'автоматическая',
    basePrice: 83665.85,
    enginePowerList: <span class='purple'>{</span>"Н·м": 450, "л.с.": 340<span class='purple'>}</span>, 
    segment: 'премиум',
    licenseCategory: 'B',
    annualProduction: 200000,
    topSales: 'Китай',
    euroStandart: 'Евро 6',
    colors: <span class='purple'>[</span>"черный", "белый", "синий", "серый"<span class='purple'>]</span>,
    headlights: 'лазерные, матричные, светодиодные',
    lastUpdated: '2025-12-27',         
<span class='purple'>}</span></code>`,
    getSearchedEntity: `
  <code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>        
    <span class='purple'>{</span>
        id: 2,
        brand: 'BMW',
        model: 'X5 G05',
        country: 'Германия',
        modelYear: 2018,
        engineTypes: <span class='purple'>[</span>"турбо", "дизель"<span class='purple'>]</span>,
        bodyType: <span class='purple'>[</span>"внедорожник", "кроссовер"<span class='purple'>]</span>,
        transmissionType: 'автоматическая',
        basePrice: 83665.85,
        enginePowerList: <span class='purple'>{</span>"Н·м": 450, "л.с.": 340<span class='purple'>}</span>, 
        segment: 'премиум',
        licenseCategory: 'B',
        annualProduction: 200000,
        topSales: 'Китай',
        euroStandart: 'Евро 6',
        colors: <span class='purple'>[</span>"черный", "белый", "синий", "серый"<span class='purple'>]</span>,
        headlights: 'лазерные, матричные, светодиодные',
        lastUpdated: '2025-12-27',         
    <span class='purple'>}</span>       
    ...
    <span class='purple'>]</span>,
    "total": 3,
    "page": 1,
    "limit": 3,
    "totalPages": 1,
<span class='purple'>}</span>           
</code>`,
    addEntity: `
<code> // Код ответа: <span class='success'>201</span>.

<strong class='purple'>{</strong>    
    id: 31,
    brand: "Subaru", <span class="danger">*</span> 
    model: "Outback", <span class="danger">*</span>
    country: 'Япония', <span class="danger">*</span>
    modelYear: 2024, <span class="danger">*</span>
    licenseCategory: 'B',
    headlights: 'светодиодные',
    bodyType: ["кроссовер"],         
    ...
<strong class='purple'>}</strong>
</code>`,
    deleteEntity: `
<code> // Код ответа: <span class='success'>200</span>.

<strong class='purple'>{</strong> 
    id: 6,
    brand: 'Tesla',
    model: 'Model 3',
    country: 'США',
    modelYear: 2017,
    engineTypes: <span class='purple'>[</span>"электрический"<span class='purple'>]</span>,
    bodyType: <span class='purple'>[</span>"седан"<span class='purple'>]</span>,
    transmissionType: 'автоматическая',
    basePrice: 45050.84,
    enginePowerList: <span class='purple'>{</span>"Н·м": 375, "л.с.": 283 <span class='purple'>}</span>, 
    segment: 'премиум',
    licenseCategory: 'B',
    annualProduction: 500000,
    topSales: 'Китай',
    euroStandart: 'Евро 6',
    colors: <span class='purple'>[</span>"белый", "черный", "красный", "синий"<span class='purple'>]</span>,
    headlights: 'светодиодные',
    lastUpdated: '2025-12-27',
<strong class='purple'>}</strong>  
</code>`,
  },
  videoGamesComments: {
    getEntities: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 1,
        login: 'Альтер-эго',
        comment: 'Как понять, что игру делал не Бабадзака? Все правильно, в игре есть подробное обучение и к первому боссу можно прийти два раза. Наиграл 30+ часов и вот что я Вам скажу - это прекрасно...',
        date: '2025-06-02',
        gameId: 1,
        userLevel: 71,
        likes: 663,        
    <span class='purple'>}</span>,         
    ...
    <span class='purple'>]</span>,
    "total": 88,
    "page": 1,
    "limit": 10,
    "totalPages": 9,
<span class='purple'>}</span></code>`,
    getEntitiesQS: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 6,
        login: 'Prokopr',
        comment: 'Я помню чудное мгновенье Цзшка, Молотов и флешка Тащить я должен на длине, Но тут выходит враг ко мне.А я мой друг не растерялся, Мой верный Молотов взорвался, Врагам на зло в коробе той...',
        date: '2021-04-09',
        gameId: 2,
        userLevel: 16,
        likes: 1778,        
    <span class='purple'>}</span>,             
    ...
    <span class='purple'>]</span>,
    "total": 88,
    "page": 2,
    "limit": 5,
    "totalPages": 18,
<span class='purple'>}</span></code>`,
    getSingleEntity: `
<code><span class='purple'>{</span>    
    id: 2,
    login: 'kotek',
    comment: 'Спустя 17 часов игровой сессии можно смело сказать, что больше нравится чем нет, естественно если судить об опыте в группе как игра и планируется. Минусики: Вариативность не велика, не факт, что игра затянет на долго, но у меня всех боссов убить желание точно вызвало...',
    date: '2025-06-02',
    gameId: 1,
    userLevel: 227,
    likes: 92,              
<span class='purple'>}</span></code>`,
    getSearchedEntity: `
<code><span class='purple'>{</span> 
    "data": <span class='purple'>[</span>
    <span class='purple'>{</span>
        id: 2,
        login: 'kotek',
        comment: 'Спустя 17 часов игровой сессии можно смело сказать, что больше нравится чем нет, естественно если судить об опыте в группе как игра и планируется. Минусики: Вариативность не велика, не факт, что игра затянет на долго, но у меня всех боссов убить желание точно вызвало...',
        date: '2025-06-02',
        gameId: 1,
        userLevel: 227,
        likes: 92,         
    <span class='purple'>}</span>,             
    ...
    <span class='purple'>]</span>,
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1,
<span class='purple'>}</span></code>`,
    addEntity: `
<code> // Код ответа: <span class='success'>201</span>.

<strong class='purple'>{</strong>    
    id: 89,
    login: "TECH_MAGNAT", <span class="danger">*</span> 
    comment: "lorem ipsum...", <span class="danger">*</span>
    gameId: 3, <span class="danger">*</span>
    date: '2026-02-09', <span class="danger">*</span>
    userLevel: 22, 
    likes: 15,           
    ...
<strong class='purple'>}</strong>
</code>`,
    deleteEntity: `
<code> // Код ответа: <span class='success'>200</span>.
<strong class='purple'>{</strong> 
    id: 6,
    login: 'Prokopr',
    comment: 'Я помню чудное мгновенье Цзшка, Молотов и флешка Тащить я должен на длине, Но тут выходит враг ко мне.А я мой друг не растерялся, Мой верный Молотов взорвался, Врагам на зло в коробе той...',
    date: '2021-04-09',
    gameId: 2,
    userLevel: 16,
    likes: 1778,        
<strong class='purple'>}</strong>  
</code>`,
  },
  auth: {
    signin: `<code>    
<strong class='purple'>{</strong>
    "user": <strong class='purple'>{</strong>
        "id": 222,
        "login": "foo"
    <strong class='purple'>}</strong>,
    "accessToken": "your accessToken",
    "expiresIn": 1770542402,  // время окончания токена, сек.  
<strong class='purple'>}</strong>           
</code>`,
    signup: `<code>    
<strong class='purple'>{</strong>
    "user": <strong class='purple'>{</strong>
        "id": 222,
        "login": "foo"
    <strong class='purple'>}</strong>,
    "accessToken": "your accessToken", // время окончания токена, сек.      
<strong class='purple'>}</strong>           
</code>`,
    logout: ``,
    refresh: `<code>    
<strong class='purple'>{</strong>
    "user": <strong class='purple'>{</strong>
        "id": 13,
        "login": "test"
    <strong class='purple'>}</strong>,
    "accessToken": "your accessToken",
    "expiresIn": 1770542402, // время окончания токена, сек.  
<strong class='purple'>}</strong>`,
  },
};

export { Responses };
