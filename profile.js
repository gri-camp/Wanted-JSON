// consts:
import { ROOT } from "./models/models.js";
// utils:
import { draw, isUserSignedIn } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Theme } from "./service/Theme.js";
import {Profile} from "./service/Profile.js";

const FOOTER = document.querySelector(".footer");

// Подключаем тему:
new Theme({ trigger: ".theme", root: ROOT });

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

// !Отрисовка Профайла пользователя:
isUserSignedIn(document.querySelector(".appContainer"), 'profile') && new Profile().template();
