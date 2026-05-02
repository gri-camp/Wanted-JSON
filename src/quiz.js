// const:
import { ROOT, MAIN_PAGE_LINK } from "./models/models.js";
// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Quiz } from "./service/Quiz.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";
// json:
import QUIZ from "./json/quiz.json" with { type: "json" };
// static
import "./sass/style.sass";

const FOOTER = document.querySelector(".footer");
const key = window.location?.search.replace(/^\?key=/i, '');
const mainPageLinkElem = document.querySelector(".mainPageLink");

//! Пишем ссылку на главную:
mainPageLinkElem.href = MAIN_PAGE_LINK

//! Подключаем тему:
new Theme({ root: ROOT, trigger: '.theme' });

// !Отрисовка Теста:
new Quiz({ list: QUIZ[key], Component: Components.QUIZ_ITEM, key });

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

// ! Отрисовка навигационной кнопки:
new UpwardButton({ Component: Components.UPWARD_BTN });
