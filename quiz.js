// const:
import { QUIZ_LIST, ROOT } from "./models/models.js";
// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Quiz } from "./service/Quiz.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";

const FOOTER = document.querySelector(".footer");

//! Подключаем тему:
new Theme({ root: ROOT });

// !Отрисовка Теста:
new Quiz({ list: QUIZ_LIST, Component: Components.QUIZ_ITEM });

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

// ! Отрисовка навигационной кнопки:
new UpwardButton({ Component: Components.UPWARD_BTN });
