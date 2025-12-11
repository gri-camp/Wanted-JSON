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
        description: "Гарри Поттер – сирота с необычным шрамом на лбу. 11 лет он жил в доме дяди и тёти, пока не узнал, что он – волшебник! Теперь Гарри вместе с новыми друзьями предстоит освоить магию и полёты на метле, найти таинственные крестражи и вступить в борьбу с самим Волан-де-Мортом.",
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
        description: "Хоббит Фродо должен уничтожить Кольцо Всевластья",
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
        description: "История маленького сонного городка на юге Америки, поведанная маленькой девочкой.История ее брата Джима, друга Дилла и ее отца — честного, принципиального адвоката Аттикуса Финча, одного из последних и лучших представителей старой «южной аристократии».История судебного процесса по делу чернокожего парня, обвиненного в насилии над белой девушкой.Но прежде всего — история переломной эпохи, когда ксенофобия, расизм, нетерпимость и ханжество, присущие американскому югу, постепенно уходят в прошлое.«Ветер перемен» только-только повеял над Америкой. Что он принесет?..",
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
    description: "Хоббит Фродо должен уничтожить Кольцо Всевластья",
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
        description: "Гарри Поттер – сирота с необычным шрамом на лбу. 11 лет он жил в доме дяди и тёти, пока не узнал, что он – волшебник! Теперь Гарри вместе с новыми друзьями предстоит освоить магию и полёты на метле, найти таинственные крестражи и вступить в борьбу с самим Волан-де-Мортом.",
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
    title: "Гений",<span class="danger">// required</span>                
    author: "Теодор Драйзер",<span class="danger">// required</span>
    genre: 'роман',<span class="danger">// required</span>
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
    description: "История маленького сонного городка на юге Америки, поведанная маленькой девочкой.История ее брата Джима, друга Дилла и ее отца — честного, принципиального адвоката Аттикуса Финча, одного из последних и лучших представителей старой «южной аристократии».История судебного процесса по делу чернокожего парня, обвиненного в насилии над белой девушкой.Но прежде всего — история переломной эпохи, когда ксенофобия, расизм, нетерпимость и ханжество, присущие американскому югу, постепенно уходят в прошлое.«Ветер перемен» только-только повеял над Америкой. Что он принесет?..",
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
        <span class='purple'>{</span>
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
    fullName: "A.T. Reaves",<span class="danger">// required</span>
    sport: "basketball",<span class="danger">// required</span>
    country: 'USA',<span class="danger">// required</span>
    age: 27,<span class="danger">// required</span>                
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
            description: 'ELDEN RING NIGHTREIGN — это отдельное приключение во вселенной ELDEN RING, которое подарит новые впечатления, изменив основные принципы игры.	фэнтезийное западное средневековье в вымышленной стране',
            setting: 'Междуземье, управляемой когда-то королевой Марикой Вечной',
            awards: <span class='purple'>[</span>"Japan Game Awards 2025"<span class='purple'>]</span>,
            tags: <span class='purple'>[</span>"похода на Dark Souls", "сетевой кооператив", "для нескольких игроков", "Рогалик"<span class='purple'>]</span>,
            hasSequel: false,          
            sequelTitle: null,
            multiplayer: true,
            lastUpdated: '2025-12-06',
        <span class='purple'>}</span>,
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
            description: 'Более двух десятилетий Counter-Strike служит примером первоклассной соревновательной игры, путь развития которой определяют миллионы игроков со всего мира. Теперь пришло время нового этапа — Counter-Strike 2',
            setting: 'Настоящее время',
            awards: null,
            tags: <span class='purple'>[</span>"Шутер от первого лица", "Для нескольких игроков", "Экшен"<span class='purple'>]</span>,
            hasSequel: false,          
            sequelTitle: null,
            multiplayer: true,
            lastUpdated: '2025-12-06',
        <span class='purple'>}</span>       
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
            title: "Battlefield™",
            developer: "Battlefield Studios",
            publisher: 'Electronic Arts',
            releaseDate: '2025-10-10',
            genre: 'Экшены',
            platforms: <span class='purple'>[</span>"ПК", "PlayStation 5", "Xbox Series X|S"<span class='purple'>]</span>,
            ageRating: null,
            price: 69.99,
            description: 'Вас ждёт невероятное погружение в тотальную войну. В войне с танками, истребителями и огромным боевым арсеналом ваш отряд — самое смертоносное оружие.	недалёкое будущее, 2042 год, когда мир находится на грани катастрофы из-за климатических изменений, вызвавших масштабные природные катаклизмы',
            setting: null,
            awards: null,
            tags: <span class='purple'>[</span>"Шутер от первого лица", "Для нескольких игроков", "Экшен"<span class='purple'>]</span>,
            hasSequel: false,          
            sequelTitle: null,
            multiplayer: true,
            lastUpdated: '2025-12-06',
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
    title: "Counter-Strike 2",
    developer: "Valve",
    publisher: 'Valve',
    releaseDate: '2023-09-27',
    genre: 'Экшен, Экшен от первого лица, бесплатные',
    platforms: <span class='purple'>[</span>"Windows", "Linux"<span class='purple'>]</span>,
    ageRating: '18+',
    price: 0.00,
    description: 'Более двух десятилетий Counter-Strike служит примером первоклассной соревновательной игры, путь развития которой определяют миллионы игроков со всего мира. Теперь пришло время нового этапа — Counter-Strike 2',
    setting: 'Настоящее время',
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
        description: 'Более двух десятилетий Counter-Strike служит примером первоклассной соревновательной игры, путь развития которой определяют миллионы игроков со всего мира. Теперь пришло время нового этапа — Counter-Strike 2',
        setting: 'Настоящее время',
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
    title: "First Empire", <span class="danger">// required</span>    
    genre: 'Экшен-RPG, стратегия', <span class="danger">// required</span>    
    ageRating: '16+', <span class="danger">// required</span>
    price: 55.33, <span class="danger">// required</span>
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
    description: 'Вас ждёт невероятное погружение в тотальную войну. В войне с танками, истребителями и огромным боевым арсеналом ваш отряд — самое смертоносное оружие.	недалёкое будущее, 2042 год, когда мир находится на грани катастрофы из-за климатических изменений, вызвавших масштабные природные катаклизмы',
    setting: null,
    awards: null,
    tags: <span class='purple'>[</span>"Шутер от первого лица", "Для нескольких игроков", "Экшен"<span class='purple'>]</span>,
    hasSequel: false,          
    sequelTitle: null,
    multiplayer: true,
    lastUpdated: '2025-12-06',  
<strong class='purple'>}</strong>
</code>`,
  },
};

export { Responses };
