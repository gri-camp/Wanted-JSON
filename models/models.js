const API_CONSTS = {
  PROTOCOL: "https",
  HOST: "dummy.chromiusj.ru",
  BOOKS: "books",
  ATHLETES: "athletes",
  VIDEOGAMES: "videoGames",
  CARS: "cars",
  MOVIES: "movies",
  DOCS: "docs",
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
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?select=value1,value2`,
  getSortedEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?sort=\${field}:\${dir}`,
  getFilteredEntities: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}?\${field}=\${value}`,
  addEntity: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}`,
  deleteEntity: (host, ep = "${endpoint}") =>
    `${API_CONSTS.PROTOCOL}://${host}/${ep}/\${id}`,
  // ! Авторизация / регистрация
  signup: (host, ep) => `${API_CONSTS.PROTOCOL}://${host}/${ep}`,
  signin: (host, ep) => `${API_CONSTS.PROTOCOL}://${host}/${ep}`,
  logout: (host, ep) => `${API_CONSTS.PROTOCOL}://${host}/${ep}`,
  refresh: (host, ep) => `${API_CONSTS.PROTOCOL}://${host}/${ep}`,
};

const REQUEST_CARD_LIST = [
  {
    id: "getEntities",
    title: "получение всех сущностей:",
    method: "get",
    url: (host, ep) => URLS.getEntities(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "getEntitiesQS",
    title: "получение сущностей c передачей query-параметров:",
    method: "get",
    url: (host, ep) => URLS.getEntitiesQS(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "getSingleEntity",
    title: "получение сущности по ID:",
    method: "get",
    url: (host, ep) => URLS.getSingleEntity(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "getSearchedEntity",
    title: "поиск сущностей:",
    method: "get",
    url: (host, ep) => URLS.getSearchedEntity(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "addEntity",
    title: "добавление новой сущности:",
    method: "post",
    url: (host, ep) => URLS.addEntity(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: true,
  },
  {
    id: "deleteEntity",
    title: "удаление сущности по ID:",
    method: "delete",
    url: (host, ep) => URLS.deleteEntity(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "signup",
    title: "регистрация пользователя",
    method: "post",
    url: (host, ep) => URLS.signup(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "signin",
    title: "авторизация пользователя",
    method: "post",
    url: (host, ep) => URLS.signin(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "logout",
    title: "выход из системы",
    method: "post",
    url: (host, ep) => URLS.logout(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
    note: false,
  },
  {
    id: "refresh",
    title: "обновления токена",
    method: "post",
    url: (host, ep) => URLS.refresh(host, ep),
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
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
    text: `Практикуйся и изучай основные <abbr title="Create, Read, Update and Delete operations"
    >CRUD</abbr>-операции: <strong">GET, POST, DELETE</strong>.`,
    title: "Практика и изучение",
  },
  {
    icon: `<span class="material-icons-round">data_object</span>`,
    text: `Все данные предоставлены в популярном и гибком формате <abbr title="JavaScript Object Notation">JSON</abbr>!`,
    title: "JSON-данные",
  },
  {
    icon: `<span class="material-icons-round">no_accounts</span>`,
    text: `Получай доступ ко всем данным без API-ключа и регистрации!`,
    title: "Старт без регистрации",
  },
  {
    icon: `<span class="material-icons-round">html</span>`,
    text: `Возможность быстро протестировать внешний вид приложения, используя <abbr>API</abbr>.`,
    title: `Тестирование <abbrss>UI</abbrss> Вашего приложения`,
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
    text: `Поддержка query-параметров для фильтрации, сортировки, пагинации, лимитирования, поиска и выборки данных!`,
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
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.DOCS}`,
    endpoint: API_CONSTS.DOCS,
    icon: `<span class="material-icons-round" style='color: #1c963c;'>integration_instructions</span>`,
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

const MENU_LIST = [
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
];

const DOCUMENTATION_LIST = [
  {
    href: `./docs.html?endpoint=books`,
    text: `<div class="warning"><span class="material-icons-round">description</span></div> <em style="font-weight:bold;">books</em>`,
  },
  {
    href: `./docs.html?endpoint=athletes`,
    text: `<div class="warning"><span class="material-icons-round">description</span></div> <em style="font-weight:bold;">athletes</em>`,
  },
  {
    href: `./docs.html?endpoint=videoGames`,
    text: `<div class="warning"><span class="material-icons-round">description</span></div> <em style="font-weight:bold;">videoGames</em>`,
  },
  {
    href: `./docs.html?endpoint=movies`,
    text: `<div class="warning"><span class="material-icons-round">description</span></div> <em style="font-weight:bold;">movies</em>`,
  },
  {
    href: `./docs.html?endpoint=cars`,
    text: `<div class="warning"><span class="material-icons-round">description</span></div> <em style="font-weight:bold;">cars</em>`,
  },
  {
    href: `./auth.html?endpoint=auth`,
    text: `<div class="warning"><span class="material-icons-round">description</span></div> <em style="font-weight:bold;">auth</em>`,
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
};

const FILTERING_WHITE_LIST = {
  books: ["author", "genre"],
  athletes: ["sport", "country"],
  videoGames: ["genre", "developer"],
  movies: ["genre", "country"],
  cars: ["brand", "country"],
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
      type: "integer",
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
      type: "integer",
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
      type: "integer",
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

export {
  API_CONSTS,
  AUTH_ENDPOINTS,
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  FILTERING_WHITE_LIST,
  FORM_ELEMS_LIST,
  MENU_LIST,
  POST_REQUIRED_FIELDS,
  REQUEST_CARD_LIST,
  SORTING_WHITE_LIST,
  URLS,
  ROOT,
};
