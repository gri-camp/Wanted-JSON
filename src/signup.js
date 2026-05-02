// const:
import { ROOT, SIGN_UP_FORM_ELEMS_LIST, MAIN_PAGE_LINK } from "./models/models.js";
// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import { Auth } from "./service/Auth.js";
import Components from "./service/Components.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";
// static
import "./sass/style.sass";

const FOOTER = document.querySelector(".footer");
const APP_CONTAINER = document.querySelector(".appContainer");
const mainPageLinkElem = document.querySelector(".mainPageLink");

//! Пишем ссылку на главную:
mainPageLinkElem.href = MAIN_PAGE_LINK;

//! Подключаем тему:
new Theme({ root: ROOT });

// !Отрисовка формы регистрации:
new Auth({
  container: APP_CONTAINER,
  component: Components.FORM,
  elements: SIGN_UP_FORM_ELEMS_LIST,
});

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

// ! Отрисовка навигационной кнопки:
new UpwardButton({ Component: Components.UPWARD_BTN });
