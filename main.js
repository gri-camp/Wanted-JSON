// consts:
import {
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  FORM_ELEMS_LIST,
  HOMEPAGE_MENU_LIST,  
  REQUEST_CARD_LIST,
  ROOT,
} from "./models/models.js";
// utils:
import { draw, getHTMLFromList } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Form } from "./service/Form.js";
import { Menu } from "./service/Menu.js";
import { Notice } from "./service/Notice.js";
import { Observer } from "./service/Observer.js";
import { Request } from "./service/Request.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";

try {
  const FEATURES = document.querySelector("#features");
  const ENTITIES = document.querySelector("#entities");
  const EXAMPLES = document.querySelector("#examples ol");
  const DOCUMENTATION = document.querySelector("#documentation ul");
  const SUPPORT = document.querySelector(".support");
  const FOOTER = document.querySelector(".footer");
  const SIGN_UP_POPUP = document.querySelector("#signup");
  const SIGN_IN_POPUP = document.querySelector("#signin");

  // Подключаем тему:
  new Theme({ trigger: ".theme", root: ROOT });

  // !Отрисовка главного меню:
  new Menu({ list: HOMEPAGE_MENU_LIST, Component: Components.MENU });

  // !Содержимое секции 'FEATURES':
  const FEATURES_HTML = getHTMLFromList(FEATURES_CARD_LIST, (card) =>
    Components.FEATURES_CARD(card),
  );
  draw(FEATURES, FEATURES_HTML);

  // !Содержимое секции 'ENTITIES':
  const ENTITIES_HTML = getHTMLFromList(ENTITIES_LIST, (card) =>
    Components.ENTITIES_LINK(card),
  );
  draw(ENTITIES, ENTITIES_HTML);

  // !Содержимое секции 'URLS':
  new Request({ list: REQUEST_CARD_LIST, Component: "REQUEST_CARD_MAIN_PAGE" });

  // !Содержимое секции 'EXAMPLES':
  const EXAMPLES_HTML = getHTMLFromList(EXAMPLES_LIST, (card) =>
    Components.EXAMPLES_LINK(card),
  );
  draw(EXAMPLES, EXAMPLES_HTML);

  // !Содержимое секции 'DOCUMENTATION':
  const DOCUMENTATION_HTML = getHTMLFromList(DOCUMENTATION_LIST, (card) =>
    Components.DOCUMENTATION_LINK(card),
  );
  draw(DOCUMENTATION, DOCUMENTATION_HTML);

  // ! Отрисовка навигационной кнопки:
  new UpwardButton({ Component: Components.UPWARD_BTN });

  // ! Отрисовка кнопки поддержки:
  draw(SUPPORT, Components.SUPPORT());

  // !Отрисовка Footer:
  draw(FOOTER, Components.FOOTER());

  // !Запуск декоратора наблюдателя:
  new Observer(
    null,
    document.querySelectorAll(".features-card"),
    document.querySelectorAll(".request-card"),
  );

<<<<<<< Updated upstream
  // !Отрисовка формы регистрации:
  new Form({
    container: SIGN_UP_POPUP,
    component: Components.FORM,
    elements: FORM_ELEMS_LIST,
    actionTrigger: ".signup-icon",
  });

  // !Отрисовка формы авторизации:
  new Form({
    container: SIGN_IN_POPUP,
    component: Components.FORM,
    elements: FORM_ELEMS_LIST.filter((el) => el.name !== "password2"),
    formType: "signin",
    actionTrigger: ".signin-icon",
  });
=======
  // ! Отрисовка уведомления:
  new Notice({
    msg: "Уважаемые пользователи! \t В ближайшее время на нашем сервисе появятся новые эндпоинты для авторизации: '/signIn', '/signUp'.",
    Component: Components.NOTICE_MODAL,
    trigger: '.noticeIcon'
  });

  // ! getEntities -----------
  // (async function (endPoint, qs) {
  //   let res = await Api.getEntities(endPoint, qs);
  //   console.log(res);
  // })(API_CONSTS.MOVIES, "country=великобрит&select=id,title,description");
>>>>>>> Stashed changes

  // ! getSingleEntity -----------
  // (async function (endPoint, id) {
  //   let res = await Api.getEntities(endPoint, id);
  //   console.log(res);
<<<<<<< Updated upstream
  // })(API_CONSTS.VIDEOGAMESCOMMENTS, `5`);
=======
  // })(API_CONSTS.MOVIES, '455');

  // ! getSearchedEntity -----------
  // (async function (endPoint, q) {
  //   let res = await Api.getSearchedEntity(endPoint, q);
  //   console.log(res);
  // })(API_CONSTS.MOVIES, "Тарковский");

  // ! addEntity -----------
  // (async function (endPoint, body) {
  //   let res = await Api.addEntity(endPoint, body);
  //   console.log(res);
  // })(API_CONSTS.VIDEOGAMESCOMMENTS, {
  //   login: "FOO",
  //   gameId: "15",
  //   comment: "роман, сатира",
  //   date: "2026-02-22",
  // });

  //  ! deleteEntity-----------
  // (async function (endPoint, id) {
  //   let res = await Api.deleteEntity(endPoint, id);
  //   console.log(res);
  // })(API_CONSTS.MOVIES, 45);

  //  ! updateEntity-----------
  (async function (endPoint, id, body) {
    let res = await Api.updateEntity(endPoint, id, body);
    console.log(res);
  })(API_CONSTS.MOVIES, 45, {
    title: "title",
    director: "director",
    studio: "some-studio",
    duration: "357",
  });
>>>>>>> Stashed changes
} catch (error) {
  console.warn(error.message, error.name);
}
