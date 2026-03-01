// consts:
import { REQUEST_CARD_LIST, AUTH_ENDPOINTS } from "./models/models.js";
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
  const FOOTER = document.querySelector(".footer");
 
  // !Содержимое секции 'urls':
  new Request({
    list: REQUEST_CARD_LIST.filter(card => AUTH_ENDPOINTS.includes(card?.id)),
    endPoint,
    Component: "REQUEST_CARD_DOCS_PAGE",
  });
  
  // ! Отрисовка навигационной кнопки:
  new UpwardButton({ Component: Components.UPWARD_BTN });

  // !Отрисовка Подвала:
  draw(FOOTER, Components.FOOTER());

  // !Запуск декоратора наблюдателя:
  new Observer(null, document.querySelectorAll(".request-card"));
} catch (error) {
  console.warn(error.message, error.name);
}
