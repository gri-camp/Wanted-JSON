// const:
import { ROOT } from "./models/models.js";
// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Quiz } from "./service/Quiz.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";
// json:
import QUIZ from "./json/quiz.json" with { type: "json" };

const FOOTER = document.querySelector(".footer");

const key = window.location.hash.replace(/^#/, '');


//! Подключаем тему:
new Theme({ root: ROOT });

// !Отрисовка Теста:
new Quiz({ list: QUIZ[key], Component: Components.QUIZ_ITEM, key });

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

// ! Отрисовка навигационной кнопки:
new UpwardButton({ Component: Components.UPWARD_BTN });
