// consts:
import {
  API_CONSTS,
  AUTH_ENDPOINTS,
  REQUEST_CARD_LIST,
  ROOT,
} from "./models/models.js";
// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Observer } from "./service/Observer.js";
import { Request } from "./service/Request.js";
import { Theme } from "./service/Theme.js";
import { UpwardButton } from "./service/UpWardButton.js";

try {
  const endPoint = location.search.replace(/^\?endpoint=/, "");

  // Секции и контейнеры:
  const limiting = document.querySelector("#limiting");
  const pagination = document.querySelector("#pagination");
  const selectedFields = document.querySelector("#selectedFields");
  const sorting = document.querySelector("#sorting");
  const filtering = document.querySelector("#filtering");
  const addEntity = document.querySelector("#addEntity");
  const deleteEntity = document.querySelector("#deleteEntity");
  const patchEntity = document.querySelector("#patchEntity");
  const FOOTER = document.querySelector(".footer");

  const endPointName = document.querySelector(".endpoint");
  endPointName.textContent = endPoint;

  // Подключаем тему:
  new Theme({ trigger: ".theme", root: ROOT });

  // !Содержимое секции 'urls':
  new Request({
    list: REQUEST_CARD_LIST.filter(
      (card) => !AUTH_ENDPOINTS.includes(card?.id),
    ),
    endPoint,
    Component: "REQUEST_CARD_DOCS_PAGE",
  });

  // !Содержимое секции 'limiting':
  draw(limiting, Components.LIMITING_DOCA(API_CONSTS.HOST, endPoint));

  // !Содержимое секции 'pagination':
  draw(pagination, Components.PAGINATION_DOCA(API_CONSTS.HOST, endPoint));

  // !Содержимое секции 'selectedFields':
  draw(
    selectedFields,
    Components.SELECTEDFIELDS_DOCA(API_CONSTS.HOST, endPoint),
  );

  // !Отрисовка секции 'sorting':
  draw(sorting, Components.SORTING_DOCA(API_CONSTS.HOST, endPoint));

  // !Отрисовка секции 'filterEntity':
  draw(filtering, Components.FILTERING_DOCA(API_CONSTS.HOST, endPoint));

  // !Отрисовка секции 'addEntity':
  draw(addEntity, Components.ADD_ENTITY_DOCA(API_CONSTS.HOST, endPoint));

  // !Отрисовка секции 'deleteEntity':
  draw(deleteEntity, Components.DELETE_ENTITY_DOCA(API_CONSTS.HOST, endPoint));

  // !Отрисовка секции 'patchEntity':
  draw(patchEntity, Components.PATCH_ENTITY_DOCA(API_CONSTS.HOST, endPoint));

  // ! Отрисовка навигационной кнопки:
  new UpwardButton({ Component: Components.UPWARD_BTN });

  // !Отрисовка Подвала:
  draw(FOOTER, Components.FOOTER());

  // !Запуск декоратора наблюдателя:
  new Observer(null, document.querySelectorAll(".request-card"));
} catch (error) {
  console.warn(error.message, error.name);
}

