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
  FAKE_AUTH: "fakeAuth",
};

const ROOT = document.documentElement;
const ARROW =
  '<div class="icon-box"><span class="material-icons-round arrow">east</span></div>';

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

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
  fakeSignin: (host) =>
    `${API_CONSTS.PROTOCOL}://${host}/${API_CONSTS.FAKE_AUTH}/${API_CONSTS.SIGNIN}`,
  fakeSignup: (host) =>
    `${API_CONSTS.PROTOCOL}://${host}/${API_CONSTS.FAKE_AUTH}/${API_CONSTS.SIGNUP}`,
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
  {
    id: "fakeSignup",
    title: "Моковая регистрация:",
    method: "post",
    url: (host, ep) => URLS.fakeSignup(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
  {
    id: "fakeSignin",
    title: "Моковая авторизация:",
    method: "post",
    url: (host, ep) => URLS.fakeSignin(host, ep),
    ...getSchemesToolbarConfig(),
    note: false,
  },
];

function getSchemesToolbarConfig() {
  return {
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
  };
}

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
  // {
  //   icon: `<span class="material-icons-round" style='color: #1c963c;'>integration_instructions</span>`,
  //   text: `Наглядный единый источник описания всех сущностей API`,
  //   title: "Swagger Документация",
  // },
];

const GETTING_STARTED_CARD_LIST = [
  {
    icon: `<span class="material-icons-round">app_registration</span>`,
    text: `Зарегистрируйся, заполнив простую форму!`,
    title: "1. Регистрирация",
  },
  {
    icon: `<span class="material-icons-round">login</span>`,
    text: `Пройди авторизацию и перейди в свой профиль ⬆️`,
    title: "2. Авторизация",
  },
  {
    icon: `<span class="material-icons-round">token</span>`,
    text: `Скопируй токен доступа для совершения запросов к REST API - пример запроса на странице с <a href='#documentation' rel="noopener noreferrer"> документацией </a>`,
    title: "3. Access-токен",
  },
];

const QUIZ_LINK_LIST = [
  {
    href: `./quiz.html?key=http`,
    header: `основы <abbr title="англ. Hypertext Transfer Protocol - протокол передачи гипертекста">HTTP протокола</abbr>`,
    icon: `<span class="material-icons-round">quiz</span>`
  },
  {
    href: `./quiz.html?key=js`,
    header: `основы языка <abbr title="англ. JavaScript - мультипарадигменный язык программирования с динамической типизацией">JavaScript</abbr>`,
    icon: `<span class="material-icons-round">quiz</span>`
  },
  {
    href: `./quiz.html?key=css`,
    header: `основы языка <abbr title="англ. Cascading Style Sheets - язык стилей, используемый для описания внешнего вида веб‑страниц">CSS</abbr>`,
    icon: `<span class="material-icons-round">quiz</span>`
  },
  {
    href: `./quiz.html?key=html`,
    header: `основы языка <abbr title="англ. HyperText Markup Language - стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере">HTML</abbr>`,
    icon: `<span class="material-icons-round">quiz</span>`
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
    href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.CLIENT_INFO}`,
    endpoint: API_CONSTS.CLIENT_INFO,
    icon: `<span class="material-icons-round" style='color: #1c963c;'>public</span>`,
  },
  {
    href: `./fakeAuth.html?endpoint=${API_CONSTS.FAKE_AUTH}`,
    endpoint: API_CONSTS.FAKE_AUTH,
    icon: `<span class="material-icons-round">app_registration</span>`,
  },
  // {
  //   href: `${API_CONSTS.PROTOCOL}://${API_CONSTS.HOST}/${API_CONSTS.DOCS}`,
  //   endpoint: API_CONSTS.DOCS,
  //   icon: `<span class="material-icons-round" style='color: #1c963c;'>integration_instructions</span>`,
  // },
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
    href: `#quiz`,
    text: `тестирование`,
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

const USER_MENU_LIST = [
  {
    icon: `face`,
    text: `профиль`,
    cls: "user-menu-profile",
  },
  {
    icon: `logout`,
    text: `выйти`,
    cls: "user-menu-logout",
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
  {
    href: `./fakeAuth.html?endpoint=fakeAuth`,
    text: `<div class="icon-box"><span class="material-icons-round">app_registration</span></div> <em style="font-weight:bold;">fakeAuth</em>`,
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

const SIGN_UP_FORM_ELEMS_LIST = [
  {
    type: "text",
    placeholder: "электронная почта:",
    name: "login",
    // errorMsg: "не менее 5 символов: латинские буквы, цифры, '-', '_', '.', '@'",
    errorMsg: "введите корректный адрес электронной почты",
    // regExp: /^[A-Z0-9-_\.@]{5,}$/i,
    regExp: /^[A-Z0-9\._-]+@[A-Z0-9-\.]+\.[A-Z]{2,4}$/i,
    tabindex: 1,
  },
  {
    type: "password",
    placeholder: "пароль:",
    name: "password",
    errorMsg: "не менее 8 символов: латинские буквы, цифры, '-', '_'",
    regExp: /^[A-Z0-9_-]{8,}$/i,
    tabindex: 2,
  },
  {
    type: "password",
    placeholder: "подтвердить пароль:",
    name: "confirm_password",
    errorMsg: "не менее 8 символов: латинские буквы, цифры, '-', '_'",
    regExp: /^[A-Z0-9_-]{8,}$/i,
    tabindex: 3,
  },
  {
    type: "checkbox",
    placeholder: "согласие на обработку персональных данных!",
    name: "agreement",
    errorMsg: null,
    regExp: null,
    tabindex: 4,
  },
  {
    type: "checkbox",
    placeholder: "согласие на получение уведомлений!",
    name: "notification",
    errorMsg: null,
    regExp: null,
    tabindex: 5,
  },
  {
    type: "submit",
    placeholder: null,
    name: "submit",
    errorMsg: null,
    regExp: null,
    tabindex: 6,
  },
];

const SIGN_IN_FORM_ELEMS_LIST = [
  {
    type: "text",
    placeholder: "электронная почта:",
    name: "login",
    // errorMsg: "не менее 5 символов: латинские буквы, цифры, '-', '_', '.', '@'",
    errorMsg: "введите корректный адрес электронной почты",
    // regExp: /^[A-Z0-9-_\.@]{5,}$/i,
    regExp: /^[A-Z0-9\._-]+@[A-Z0-9-\.]+\.[A-Z]{2,4}$/i,
    tabindex: 1,
  },
  {
    type: "password",
    placeholder: "пароль:",
    name: "password",
    errorMsg: "не менее 8 символов: латинские буквы, цифры, '-', '_'",
    regExp: /^[A-Z0-9_-]{8,}$/i,
    tabindex: 2,
  },
  {
    type: "submit",
    placeholder: null,
    name: "submit",
    errorMsg: null,
    regExp: null,
    tabindex: 3,
  },
];

export {
  API_CONSTS,
  ARROW,
  AUTH_ENDPOINTS,
  DOCSPAGE_MENU_LIST,
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  FILTERING_WHITE_LIST,
  getSchemesToolbarConfig,
  GETTING_STARTED_CARD_LIST,
  HOMEPAGE_MENU_LIST,
  MONTHS,
  POST_REQUIRED_FIELDS,
  QUIZ_LINK_LIST,
  REQUEST_CARD_LIST,
  ROOT,
  SIGN_IN_FORM_ELEMS_LIST,
  SIGN_UP_FORM_ELEMS_LIST,
  SORTING_WHITE_LIST,
  URLS,
  USER_MENU_LIST,
};
