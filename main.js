// components:
import Components from "./service/Components.js";
// consts:
import {
  API_CONSTS,
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  FORM_ELEMS_LIST,
  MENU_LIST,
  REQUEST_CARD_LIST,
} from "./models/models.js";
// utils:
import { draw, getHTMLFromList } from "./helpers/helpers.js";
// service classes:
import Api from "./service/Api.js";
import { Form } from "./service/Form.js";
import { Menu } from "./service/Menu.js";
import { Observer } from "./service/Observer.js";
import { Request } from "./service/Request.js";
import { UpwardButton } from "./service/UpWardButton.js";

try {
  const FEATURES = document.querySelector("#features");
  const ENTITIES = document.querySelector("#entities");
  const EXAMPLES = document.querySelector("#examples ol");
  const DOCUMENTATION = document.querySelector("#documentation ul");
  const FOOTER = document.querySelector(".footer");
  const REGISTRATION = document.querySelector("#registration");
  const AUTHORIZATION = document.querySelector("#authorization");
  const REGISTRATION_ICON = document.querySelector(".registration");
  const AUTHORIZATION_ICON = document.querySelector(".authorization");

  REGISTRATION_ICON.onclick = () => REGISTRATION.classList.toggle("active");
  AUTHORIZATION_ICON.onclick = () => AUTHORIZATION.classList.toggle("active");

  // !Отрисовка главного меню:
  new Menu({ list: MENU_LIST, Component: Components.MENU });

  // !Содержимое секции 'FEATURES':
  const FEATURES_HTML = getHTMLFromList(FEATURES_CARD_LIST, (card) =>
    Components.FEATURES_CARD(card)
  );
  draw(FEATURES, FEATURES_HTML);

  // !Содержимое секции 'ENTITIES':
  const ENTITIES_HTML = getHTMLFromList(ENTITIES_LIST, (card) =>
    Components.ENTITIES_LINK(card)
  );
  draw(ENTITIES, ENTITIES_HTML);

  // !Содержимое секции 'URLS':
  new Request({ list: REQUEST_CARD_LIST, Component: "REQUEST_CARD_MAIN_PAGE" });

  // !Содержимое секции 'EXAMPLES':
  const EXAMPLES_HTML = getHTMLFromList(EXAMPLES_LIST, (card) =>
    Components.EXAMPLES_LINK(card)
  );
  draw(EXAMPLES, EXAMPLES_HTML);

  // !Содержимое секции 'DOCUMENTATION':
  const DOCUMENTATION_HTML = getHTMLFromList(DOCUMENTATION_LIST, (card) =>
    Components.DOCUMENTATION_LINK(card)
  );
  draw(DOCUMENTATION, DOCUMENTATION_HTML);

  // ! Отрисовка навигационной кнопки:
  new UpwardButton({ Component: Components.UPWARD_BTN });

  // !Отрисовка Подвала:
  draw(FOOTER, Components.FOOTER());

  // !Запуск декоратора наблюдателя:
  new Observer(
    null,
    document.querySelectorAll(".features-card"),
    document.querySelectorAll(".request-card")
  );

  // !Отрисовка формы регистрации:
  new Form({
    container: REGISTRATION,
    component: Components.FORM,
    elements: FORM_ELEMS_LIST,
  });

  // !Отрисовка формы авторизации:
  new Form({
    container: AUTHORIZATION,
    component: Components.FORM,
    elements: FORM_ELEMS_LIST.filter((el) => el.name !== "password2"),
    formCls: "auth-form",
  });

  // ! getEntities -----------
  (async function (endPoint, qs) {
    let res = await Api.getEntities(endPoint, qs);
    console.log(res);
  })(API_CONSTS.BOOKS, "sort=id:desc&limit=unknown");

  // ! getSingleEntity -----------
  // (async function (endPoint, id) {
  //   let res = await Api.getSingleEntity(endPoint, id);
  //   console.log(res);
  // })(API_CONSTS.VIDEOGAMES, "13");

  // ! getSearchedEntity -----------
  // (async function (endPoint, q) {
  //   let res = await Api.getSearchedEntity(endPoint, q);
  //   console.log(res);
  // })(API_CONSTS.BOOKS, "преступление");

  // ! addEntity -----------
  // (async function (endPoint, body) {
  //   let res = await Api.addEntity(endPoint, body);
  //   console.log(res);
  // })(API_CONSTS.ATHLETES, {
  //   fullName: "foo",
  //   country: "adventure",
  //   age: 25,
  //   sport: 'hello',
  // });

  //  ! deleteEntity-----------
  // (async function (endPoint, id) {
  //   let res = await Api.deleteEntity(endPoint, id);
  //   console.log(res);
  // })(API_CONSTS.VIDEOGAMES, 16);
} catch (error) {
  console.warn(error.message, error.name);
}



