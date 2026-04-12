// consts:
import {
  ARROW,
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  GETTING_STARTED_CARD_LIST,
  HOMEPAGE_MENU_LIST,
  QUIZ_LINK_LIST,
  REQUEST_CARD_LIST,
  ROOT,
  SIGN_IN_FORM_ELEMS_LIST,
  USER_MENU_LIST,
} from "./models/models.js";
// utils:
import { draw, getHTMLFromList } from "./helpers/helpers.js";
// service classes:
import { Auth } from "./service/Auth.js";
import Components from "./service/Components.js";
import { Menu } from "./service/Menu.js";
import { Observer } from "./service/Observer.js";
import { Request } from "./service/Request.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";

try {
  const USER_MENU = document.querySelector(".user-menu");
  const FEATURES = document.querySelector("#features");
  const ENTITIES = document.querySelector("#entities");
  const GETTING_STARTED = document.querySelector(".gettingStarted-container");
  const EXAMPLES = document.querySelector("#examples ol");
  const DOCUMENTATION = document.querySelector("#documentation ul");
  const SUPPORT = document.querySelector(".support");
  const QUIZ = document.querySelector("#quiz");
  const FOOTER = document.querySelector(".footer");
  const SIGN_IN_POPUP = document.querySelector(".authForm-popup");

  // Подключаем тему:
  new Theme({ trigger: ".theme", root: ROOT });

  // !Отрисовка главного меню:
  new Menu({ list: HOMEPAGE_MENU_LIST, Component: Components.MENU });

  // !Отрисовка главного меню:
  const USER_MENU_HTML = getHTMLFromList(USER_MENU_LIST, (card) =>
    Components.USER_MENU(card),
  );
  draw(USER_MENU, USER_MENU_HTML);

  // !Содержимое секции 'FEATURES':
  const FEATURES_HTML = getHTMLFromList(FEATURES_CARD_LIST, (card) =>
    Components.FEATURES_CARD(card),
  );
  draw(FEATURES, FEATURES_HTML);

  // !Содержимое секции 'GETTING_STARTED':
  const GETTING_STARTED_HTML = GETTING_STARTED_CARD_LIST.map((card) =>
    Components.GETTING_STARTED_CARD(card),
  ).join(ARROW);

  draw(GETTING_STARTED, GETTING_STARTED_HTML);

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

  // !Содержимое секции 'QUIZ':
  const QUIZ_HTML = getHTMLFromList(QUIZ_LINK_LIST, (card) =>
    Components.QUIZ_LINK(card),
  );
  draw(QUIZ, QUIZ_HTML);

  // !Отрисовка Footer:
  draw(FOOTER, Components.FOOTER());

  // !Запуск декоратора наблюдателя:
  new Observer(
    null,
    document.querySelectorAll(".features-card"),
    document.querySelectorAll(".request-card"),
  );

  // !Отрисовка формы авторизации:
  new Auth({
    container: SIGN_IN_POPUP,
    component: Components.FORM,
    elements: SIGN_IN_FORM_ELEMS_LIST,
    formType: "signin",
    actionTrigger: ".signin-icon",
  });
} catch (error) {
  console.warn(error.message, error.name);
}

