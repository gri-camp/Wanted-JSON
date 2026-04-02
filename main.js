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
import { Auth } from "./service/Auth.js";
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

  // !Отрисовка формы авторизации:
  new Auth({
    container: SIGN_IN_POPUP,
    component: Components.FORM,
    elements: FORM_ELEMS_LIST.filter((el) => el.name !== "password2"),
    formType: "signin",
    actionTrigger: ".signin-icon",
  });

  // ! Отрисовка уведомления:
  new Notice({
    msg: "Уважаемые пользователи! \n\t В ближайшее время на нашем сервисе появятся новые эндпоинты для авторизации: '/fakeAuth/signin', '/fakeAuth/signup'.",
    Component: Components.NOTICE_MODAL(),
    trigger: ".noticeIcon",
  });
} catch (error) {
  console.warn(error.message, error.name);
}
