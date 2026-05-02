// consts:
import { ROOT, MAIN_PAGE_LINK } from "./models/models.js";
// utils:
import { draw, isUserSignedIn } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Theme } from "./service/Theme.js";
import {Profile} from "./service/Profile.js";
// static
import "./sass/style.sass";

const FOOTER = document.querySelector(".footer");
const mainPageLinkElem = document.querySelector(".mainPageLink");

//! Пишем ссылку на главную:
mainPageLinkElem.href = MAIN_PAGE_LINK

// Подключаем тему:
new Theme({ trigger: ".theme", root: ROOT });

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

// !Отрисовка Профайла пользователя:
isUserSignedIn(document.querySelector(".appContainer"), 'profile') && new Profile().template();
