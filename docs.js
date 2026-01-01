// consts:
import { REQUEST_CARD_LIST, AUTH_ENDPOINTS, API_CONSTS } from "./models/models.js";
// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Observer } from "./service/Observer.js";
import { Request } from "./service/Request.js";
import { UpwardButton } from "./service/UpWardButton.js";

try {
  const endPoint = location.search.replace(/^\?endpoint=/, "");

  // Секции и контейнеры:
  const limiting = document.querySelector("#limiting");
  const pagination = document.querySelector("#pagination");
  const selectedFields = document.querySelector("#selectedFields");
  const sorting = document.querySelector("#sorting");
  const addEntity = document.querySelector("#addEntity");
  const deleteEntity = document.querySelector("#deleteEntity");
  const FOOTER = document.querySelector(".footer");
  const endPointName = document.querySelector(".endpoint");
  endPointName.textContent = endPoint;

  // !Содержимое секции 'urls':
  new Request({
    list: REQUEST_CARD_LIST.filter(card => !AUTH_ENDPOINTS.includes(card?.id)),
    endPoint,
    Component: "REQUEST_CARD_DOCS_PAGE",
  });

  // !Содержимое секции 'limiting':
  draw(limiting, Components.LIMITING_DOCA(API_CONSTS.HOST, endPoint));

  // !Содержимое секции 'pagination':
  draw(pagination, Components.PAGINATION_DOCA(API_CONSTS.HOST, endPoint));

  // !Содержимое секции 'selectedFields':
  draw(selectedFields, Components.SELECTEDFIELDS_DOCA(API_CONSTS.HOST, endPoint));

  // !Содержимое секции 'sorting':
  draw(sorting, Components.SORTING_DOCA(API_CONSTS.HOST, endPoint));

  // !Содержимое секции 'addEntity':
  draw(addEntity, Components.ADD_ENTITY_DOCA(API_CONSTS.HOST, endPoint));

  // !Содержимое секции 'addEntity':
  draw(deleteEntity, Components.DELETE_ENTITY_DOCA(API_CONSTS.HOST, endPoint));

  // ! Отрисовка навигационной кнопки:
  new UpwardButton({ Component: Components.UPWARD_BTN });

  // !Отрисовка Подвала:
  draw(FOOTER, Components.FOOTER());

  // !Запуск декоратора наблюдателя:
  new Observer(null, document.querySelectorAll(".request-card"));

  console.log(window.parent.location);

} catch (error) {
  console.warn(error.message, error.name);
}
