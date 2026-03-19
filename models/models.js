import { getSchemesToolbarConfig } from "../helpers/helpers.js";

const API_CONSTS = {
  PROTOCOL: "https",
  HOST: "api.wantedjson.ru",
  BOOKS: "books",
  ATHLETES: "athletes",
  VIDEOGAMES: "videoGames",
  VIDEOGAMESCOMMENTS: "videoGamesComments",
  CARS: "cars",
  MOVIES: "movies",
  DOCS: "docs",
  CLIENT_INFO: "client-info",
  AUTH: "auth",
  SIGNUP: "signup",
  SIGNIN: "signin",
  LOGOUT: "logout",
  REFRESH: "refresh",
};

const ROOT = document.documentElement;

const AUTH_ENDPOINTS = ["signin", "signup", "logout", "refresh"];

const URLS = {
  getEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}`,
  getEntitiesQS: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?page=\${value}&limit=\${value}`,
  getSingleEntity: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}/\${id}`,
  getSearchedEntity: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?q=\${value}`,
  getLimitedEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?limit=10`,
  getPaginatedEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?page=2&limit=10`,
  getSelectedEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?select=field1,field2`,
  getSortedEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?sort=\${field}:\${dir}`,
  getFilteredEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?\${field}=\${value}`,
  addEntity: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}`,
  deleteEntity: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}/\${id}`,
  updateEntity: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}/\${id}`,
  // ! Авторизация / регистрация
  signup: (host, ep) =>
    `${API_CONSTS.PROTOCOL}://${host}/${API_CONSTS.AUTH}/${ep}`,
  signin: (host, ep) =>
    `${API_CONSTS.PROTOCOL}://${host}/${API_CONSTS.AUTH}/${ep}`,
  logout: (host, ep) =>
    `${API_CONSTS.PROTOCOL}://${host}/${API_CONSTS.AUTH}/${ep}`,
  refresh: (host, ep) =>
    `${API_CONSTS.PROTOCOL}://${host}/${API_CONSTS.AUTH}/${ep}`,
};

const REQUEST_CARD_LIST = [
  {
    id: "getEntities",
    title: "получение всех сущностей:",
    method: "get",
    url: (host, ep) => URLS.getEntities(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "getEntitiesQS",
    title: "получение сущностей c передачей query-параметров:",
    method: "get",
    url: (host, ep) => URLS.getEntitiesQS(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "getSingleEntity",
    title: "получение сущности по ID:",
    method: "get",
    url: (host, ep) => URLS.getSingleEntity(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "getSearchedEntity",
    title: "поиск сущностей:",
    method: "get",
    url: (host, ep) => URLS.getSearchedEntity(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "addEntity",
    title: "добавление новой сущности:",
    method: "post",
    url: (host, ep) => URLS.addEntity(host, ep),
    ...getSchemesToolbarConfig(),
    note: true,
  },
  {
    id: "deleteEntity",
    title: "удаление сущности по ID:",
    method: "delete",
    url: (host, ep) => URLS.deleteEntity(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "updateEntity",
    title: "обновление сущности по ID:",
    method: "patch",
    url: (host, ep) => URLS.updateEntity(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "signup",
    title: "регистрация пользователя",
    method: "post",
    url: (host, ep) => URLS.signup(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "signin",
    title: "авторизация пользователя",
    method: "post",
    url: (host, ep) => URLS.signin(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "logout",
    title: "выход из системы",
    method: "post",
    url: (host, ep) => URLS.logout(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "refresh",
    title: "обновления токена",
    method: "post",
    url: (host, ep) => URLS.refresh(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
];

const FEATURES_CARD_LIST = [
  {
    icon: `<span class="material-icons-round">http</span>`,
    text: `Возможность запрашивать разные по тематике данные: книги, спорт и многое другое!`,
    title: "Многообразие эндпоинтов",
  },
  {
    icon: `<span class="material-icons-round">model_training</span>`,
    text: `Доступ к основным <abbr title="Create, Read, Update and Delete operations"
    >CRUD</abbr> операциям: <strong">GET, POST, DELETE, UPDATE</strong>.`,
    title: "Практика и изучение",
  },
  {
    icon: `<span class="material-icons-round">data_object</span>`,
    text: `Все данные предоставлены в популярном и гибком формате <abbr title="JavaScript Object Notation">JSON</abbr>!`,
    title: "JSON-данные",
  },
  {
    icon: `<strong class="material-icons-round success">money_off</strong>`,
    text: `Бесплатный доступ к данным без API-ключа и регистрации!`,
    title: "Старт без регистрации",
  },
  {
    icon: `<span class="material-icons-round">monitor_heart</span>`,
    text: `Способность сервиса выдерживать высокие нагрузки 24 часа в сутки.`,
    title: "Высокая нагрузочная способность",
  },
  {
    icon: `<span class="material-icons-round">error</span>`,
    text: `Модуль обработки пользовательских ошибок с визуализацией невалидных параметров запроса.`,
    title: "Обработка пользовательских ошибок",
  },
  {
    icon: `<span class="material-icons-round">search</span>`,
    text: `Для каждой сущности реализован поиск по множеству полей.`,
    title: "Удобный поиск",
  },
  {
    icon: `<span class="material-icons-round">settings</span>`,
    text: `Поддержка query-параметров для <em class='success'> фильтрации, сортировки, пагинации, лимитирования, поиска </em> данных!`,
    title: "Настраиваемые данные",
  },
  {
    icon: `<span class="material-icons-round" style='color: #1c963c;'>integration_instructions</span>`,
    text: `Наглядный единый источник описания всех сущностей API`,
    title: "Swagger Документация",
  },
];

const ENTITIES_LIST = [
  {
    href: `./docs.html?endpoint=${API_CONSTS.BOOKS}`,
    endpoint: API_CONSTS.BOOKS,
    icon: `<span class="material-icons-round">book</span>`,
  },
  {
    href: `./docs.html?endpoint=${API_CONSTS.ATHLETES}`,
    endpoint: API_CONSTS.ATHLETES,
    icon: `<span class="material-icons-round">sports_basketball</span>`,
  },
  {
    href: `./docs.html?endpoint=${API_CONSTS.VIDEOGAMES}`,
    endpoint: API_CONSTS.VIDEOGAMES,
    icon: `<span class="material-icons-round">gamepad</span>`,
  },
  {
    href: `./docs.html?endpoint=${API_CONSTS.MOVIES}`,
    endpoint: API_CONSTS.MOVIES,
    icon: `<span class="material-icons-round">movie_creation</span>`,
  },
  {
    href: `./docs.html?endpoint=${API_CONSTS.CARS}`,
    endpoint: API_CONSTS.CARS,
    icon: `<span class="material-icons-round">directions_car</span>`,
  },
  {
    href: `./auth.html?endpoint=${API_CONSTS.AUTH}`,
    endpoint: API_CONSTS.AUTH,
    icon: `<span class="material-icons-round">login</span>`,
  },
  {
    href: `./docs.html?endpoint=${API_CONSTS.VIDEOGAMESCOMMENTS}`,
    endpoint: API_CONSTS.VIDEOGAMESCOMMENTS,
    icon: `<span class="material-icons-round">insert_comment</span>`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.DOCS}`,
    endpoint: API_CONSTS.DOCS,
    icon: `<span class="material-icons-round" style='color: #1c963c;'>integration_instructions</span>`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.CLIENT_INFO}`,
    endpoint: API_CONSTS.CLIENT_INFO,
    icon: `<span class="material-icons-round" style='color: #1c963c;'>public</span>`,
  },
];

const EXAMPLES_LIST = [
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.CARS}`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.CARS}`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}/5`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}/5`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.ATHLETES}?q=Лионель Месси`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.ATHLETES}?q=Месси`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?select=title,author,pageCount`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?select=title,author,pageCount`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?sort=pageCount:desc`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?sort=pageCount:desc`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.VIDEOGAMES}?limit=20`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.VIDEOGAMES}?limit=20`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.MOVIES}?q=матрица`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.MOVIES}?q=матрица`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.CARS}?country=ЯПОНИЯ`,
    example: ` ${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.CARS}?country=ЯПОНИЯ`,
  },
  {
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?genre=фэнтези`,
    example: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?genre=фэнтези`,
  },
];

const HOMEPAGE_MENU_LIST = [
  {
    href: `#features`,
    text: `особенности`,
  },
  {
    href: `#entities`,
    text: `эндпоинты`,
  },
  {
    href: `#requests`,
    text: `запросы`,
  },
  {
    href: `#examples`,
    text: `примеры`,
  },
  {
    href: `#documentation`,
    text: `дока`,
  },
  {
    href: `customers`,
    text: `партнерам`,
  },
  {
    href: `references`,
    text: `отсылки`,
  },
];

const DOCSPAGE_MENU_LIST = [
  {
    href: `#pagination`,
    text: `пагинация`,
  },
  {
    href: `#selectedFields`,
    text: `выборка`,
  },
  {
    href: `#sorting`,
    text: `сортировка`,
  },
  {
    href: `#filtering`,
    text: `фильтр`,
  },
  {
    href: `#addEntityDesc`,
    text: `добавление`,
  },
  {
    href: `#deleteEntityDesc`,
    text: `удаление`,
  },
  {
    href: `#updateEntityDesc`,
    text: `обновление`,
  },
];

const DOCUMENTATION_LIST = [
  {
    href: `./docs.html?endpoint=books`,
    text: `<div class="icon-box"><span class="material-icons-round">book</span></div> <em style="font-weight:bold;">books</em>`,
  },
  {
    href: `./docs.html?endpoint=athletes`,
    text: `<div class="icon-box"><span class="material-icons-round">sports_basketball</span></div> <em style="font-weight:bold;">athletes</em>`,
  },
  {
    href: `./docs.html?endpoint=videoGames`,
    text: `<div class="icon-box"><span class="material-icons-round">gamepad</span></div> <em style="font-weight:bold;">videoGames</em>`,
  },
  {
    href: `./docs.html?endpoint=movies`,
    text: `<div class="icon-box"><span class="material-icons-round">movie_creation</span></div> <em style="font-weight:bold;">movies</em>`,
  },
  {
    href: `./docs.html?endpoint=cars`,
    text: `<div class="icon-box"><span class="material-icons-round">directions_car</span></div> <em style="font-weight:bold;">cars</em>`,
  },
  {
    href: `./docs.html?endpoint=videoGamesComments`,
    text: `<div class="icon-box"><span class="material-icons-round">insert_comment</span></div> <em style="font-weight:bold;">videoGamesComments</em>`,
  },
  {
    href: `./auth.html?endpoint=auth`,
    text: `<div class="icon-box"><span class="material-icons-round">login</span></div> <em style="font-weight:bold;">auth</em>`,
  },
];

const SORTING_WHITE_LIST = {
  books: [
    "id",
    "title",
    "author",
    "genre",
    "publicationYear",
    "isbn",
    "pageCount",
    "publisher",
    "ageRating",
    "price",
    "description",
    "scene",
    "originalLanguage",
    "goodreadsRating",
    "movieTitle",
    "lastUpdated",
  ],
  athletes: [
    "id",
    "fullName",
    "sport",
    "country",
    "age",
    "birthDate",
    "birthPlace",
    "zodiacSign",
    "height",
    "nationality",
    "currentTeam",
    "annualSalary",
    "instagramFollowers",
    "olympics",
    "brandAmbassador",
    "firstVictory",
    "hobbies",
    "lastUpdated",
  ],
  videoGames: [
    "id",
    "title",
    "developer",
    "publisher",
    "releaseDate",
    "genre",
    "ageRating",
    "price",
    "description",
    "setting",
    "lastUpdated",
  ],
  movies: [
    "id",
    "title",
    "originalTitle",
    "releaseYear",
    "duration",
    "country",
    "language",
    "director",
    "ageRating",
    "budget",
    "boxOffice",
    "imdb",
    "kinopoiskRating",
    "description",
    "studio",
    "seasons",
    "lastUpdated",
  ],
  cars: [
    "id",
    "brand",
    "model",
    "country",
    "modelYear",
    "transmissionType",
    "basePrice",
    "segment",
    "licenseCategory",
    "annualProduction",
    "topSales",
    "euroStandart",
    "headlights",
    "lastUpdated",
  ],
  videoGamesComments: [
    "id",
    "login",
    "comment",
    "date",
    "gameId",
    "userLevel",
    "likes",
  ],
};

const FILTERING_WHITE_LIST = {
  books: ["author", "genre"],
  athletes: ["sport", "country"],
  videoGames: ["genre", "developer"],
  movies: ["genre", "country"],
  cars: ["brand", "country"],
  videoGamesComments: ["login", "gameId"],
};

const POST_REQUIRED_FIELDS = {
  athletes: [
    {
      field: "fullName",
      type: "string",
    },
    {
      field: "sport",
      type: "string",
    },
    {
      field: "country",
      type: "string",
    },
    {
      field: "age",
      type: "number",
    },
  ],
  books: [
    {
      field: "title",
      type: "string",
    },
    {
      field: "author",
      type: "string",
    },
    {
      field: "genre",
      type: "string",
    },
  ],
  videoGames: [
    {
      field: "title",
      type: "string",
    },
    {
      field: "genre",
      type: "string",
    },
    {
      field: "ageRating",
      type: "string",
    },
    {
      field: "price",
      type: "number",
    },
  ],
  movies: [
    {
      field: "title",
      type: "string",
    },
    {
      field: "country",
      type: "string",
    },
    {
      field: "ageRating",
      type: "string",
    },
    {
      field: "releaseYear",
      type: "number",
    },
  ],
  cars: [
    {
      field: "brand",
      type: "string",
    },
    {
      field: "model",
      type: "string",
    },
    {
      field: "country",
      type: "string",
    },
    {
      field: "modelYear",
      type: "integer",
    },
  ],
  videoGamesComments: [
    {
      field: "login",
      type: "string",
    },
    {
      field: "comment",
      type: "string",
    },
    {
      field: "gameId",
      type: "number",
    },
    {
      field: "date",
      type: "string",
    },
  ],
};

const FORM_ELEMS_LIST = [
  {
    type: "text",
    placeholder: "имя пользователя:",
    name: "login",
    errorMsg:
      "логин должен начинаться с буквы и включать прописные и строчные латинские буквы, цифры, знаки: '-', '_' ",
    regExp: /^[A-Z][A-Z0-9-_]{1,20}$/i,
    tabindex: 1,
  },
  {
    type: "text",
    placeholder: "пароль:",
    name: "password",
    errorMsg:
      "пароль должен содержать не менее 8 символов и включать прописные и строчные латинские буквы, цифры, знаки: '-', '_'",
    regExp: /^[A-Z0-9_-]{8,}$/i,
    tabindex: 2,
  },
  {
    type: "text",
    placeholder: "подтвердить пароль:",
    name: "password2",
    errorMsg:
      "пароль должен содержать не менее 8 символов и включать прописные и строчные латинские буквы, цифры, знаки: '-', '_'",
    regExp: /^[A-Z0-9_-]{8,}$/i,
    tabindex: 3,
  },
  {
    type: "submit",
    placeholder: null,
    name: "submit",
    errorMsg: null,
    regExp: null,
    tabindex: 4,
  },
];

const QUIZ_LIST = [
  {
    id: "1",
    q: "REST API – это:",
    answers: [
      "протокол передачи данных",
      "язык программирования, используемый в Веб-разработке",
      "архитектура для взаимодействия распределенных Веб-программ",
      "набор правил для создания веб-приложений",
    ],
    correct: [2],
  },
  {
    id: "2",
    q: "Какой метод HTTP используется для получения данных?",
    answers: ["POST", "GET", "PUT", "DELETE"],
    correct: [1],
  },
  {
    id: "3",
    q: "Какие методы мутируют (изменяют) записи в базе данных на сервере?",
    answers: ["POST", "GET", "PUT", "DELETE", "OPTION"],
    correct: [0, 2, 3],
  },
  {
    id: "4",
    q: "За что отвечает Front-end в WEB-приложениях?",
    answers: [
      "отображение элементов интерфейса сайта",
      "обработку асинхронных запросов к серверу",
      "управление базами данных",
      "визуализацию данных, полученных от сервера",
      "интерактивное взаимодействие с пользователем",
    ],
    correct: [0, 3, 4],
  },
  {
    id: "5",
    q: "За что отвечает Back-end в WEB-приложениях?",
    answers: [
      "отображение элементов интерфейса сайта",
      "обработку асинхронных запросов к серверу",
      "управление базами данных",
      "визуализацию данных, полученных от сервера",
      "интерактивное взаимодействие с пользователем",
    ],
    correct: [1, 2],
  },
  {
    id: "6",
    q: "Какой статус-код HTTP указывает на успешное выполнение запроса?",
    answers: [
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error",
      "301 Moved Permanently",
      "403 Forbidden",
    ],
    correct: [0],
  },
  {
    id: "7",
    q: "Какой статус-код должен вернуться при успешном добавлении (POST) сущности на сервер?",
    answers: [
      "200 OK",
      "102 Processing",
      "202 Accepted",
      "201 Created",
      "302 Found",
    ],
    correct: [3],
  },
  {
    id: "8",
    q: "При каких условиях сервер должен ответить кодом 400 Bad Request?",
    answers: [
      "при успешном удалении сущности из базы данных",
      "при отправке запроса на защищенный маршрут (роут) без API-ключа в настройках",
      "при отправке запроса на неправильный URL",
      "при передачи в запросе некорректных query-параметров",
      "при неправильном формате тела запроса",
    ],
    correct: [2, 3, 4],
  },
  {
    id: "9",
    q: "Что такое эндпоинт (endpoint) в контексте REST API?",
    answers: [
      "конечная точка URL, где находится ресурс",
      "метод HTTP",
      "точка выхода из серверного приложения",
      "формат данных",
    ],
    correct: [0],
  },
  {
    id: "10",
    q: "Что такое JSON?",
    answers: [
      "архитектура сервера",
      "язык программирования",
      "библиотека для валидации данных",
      "формат представления данных",
    ],
    correct: [3],
  },
  {
    id: "11",
    q: "Какой метод используется для изменения существующего ресурса?",
    answers: ["POST", "GET", "PUT", "DELETE"],
    correct: [2],
  },
  {
    id: "12",
    q: "Какой заголовок FETCH-запроса обычно отвечает за передачу API-ключа?",
    answers: ["Authorization", "method ", "credentials ", "Content-Type"],
    correct: [0],
  },
  {
    id: "13",
    q: "Что такое CORS?",
    answers: [
      "протокол безопасности",
      "механизм кросс-доменного взаимодействия",
      "формат данных",
      "метод HTTP",
    ],
    correct: [1],
  },
  {
    id: "14",
    q: "Что такое AJAX?",
    answers: [
      "технология создания анимаций",
      "браузерный движок для отрисовки DOM-дерева",
      "технология шифрования данных",
      "популярная UI-библиотека",
      "технология асинхронного обмена данными с сервером",
    ],
    correct: [4],
  },
  {
    id: "15",
    q: "за что отвечает заголовок Access-Control-Allow-Origin в HTTP-запросах?",
    answers: [
      "за доступность сервера при запросе с конкретного источника",
      "за контроль и валидацию query-параметров запроса с данного источника",
      "за перечень доступных методов при кросс-доменном запросе",
      "за блокировку запроса с нелегитимного источника",
    ],
    correct: [0, 3],
  },
  {
    id: "16",
    q: "для чего используют ORM-системы на бэкенде?",
    answers: [
      "для сокращение шаблонного кода",
      "для обеспечения согласованности данных",
      "в качестве альтернативы реляционной базы данных",
      "для отправки электронных писем и SMS-сообщений",
    ],
    correct: [0, 1],
  },
  {
    id: "17",
    q: "что такое cookie в контексте HTTP?",
    answers: [
      "Файл на сервере",
      "Файл на клиенте",
      "Протокол передачи данных",
      "Метод HTTP",
    ],
    correct: [1],
  },
  {
    id: "18",
    q: "для чего используется preflight-запрос в http протоколе?",
    answers: [
      "для проверки, разрешает ли сервер использование запрашиваемого HTTP-метода и пользовательских заголовков",
      "для шифрования данных, которые будут переданы в последующем запросе",
      "для разрыва активного соединения с сервером",
      "Для отправки электронных писем и SMS-сообщений",
    ],
    correct: [0],
  },
  {
    id: "19",
    q: "когда сервер может ответить кодом 429 Too Many Requests?",
    answers: [
      "когда клиент отправляет слишком много запросов в единицу времени, что может указывать на DDoS-атаку",
      "когда превышена допустимая длина заголовков запроса",
      "когда сервер временно не имеет возможности обрабатывать запросы по техническим причинам",
      "когда запрошенный документ был окончательно перенесён на новый URI, указанный в поле 'Location' заголовка",
    ],
    correct: [0],
  },
  {
    id: "20",
    q: "какой статус-код указывает на ошибку 'неавторизованный'?",
    answers: [
      "403",
      "501",
      "401",
      "301",
    ],
    correct: [2],
  },
];



export {
  API_CONSTS,
  AUTH_ENDPOINTS,
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  FILTERING_WHITE_LIST,
  FORM_ELEMS_LIST,
  HOMEPAGE_MENU_LIST,
  DOCSPAGE_MENU_LIST,
  POST_REQUIRED_FIELDS,
  QUIZ_LIST,
  REQUEST_CARD_LIST,
  ROOT,
  SORTING_WHITE_LIST,
  URLS,
};
