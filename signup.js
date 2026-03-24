// const:
import { ROOT, FORM_ELEMS_LIST } from "./models/models.js";
// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Form } from "./service/Form.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";

const FOOTER = document.querySelector(".footer");
const APP_CONTAINER = document.querySelector(".appContainer");

//! Подключаем тему:
new Theme({ root: ROOT });

// !Отрисовка формы регистрации:
new Form({
  container: APP_CONTAINER,
  component: Components.FORM,
  elements: FORM_ELEMS_LIST,  
});

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

// ! Отрисовка навигационной кнопки:
new UpwardButton({ Component: Components.UPWARD_BTN });
