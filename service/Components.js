import {
  AUTH_ENDPOINTS,
  FILTERING_WHITE_LIST,
  POST_REQUIRED_FIELDS,
  SORTING_WHITE_LIST,
  URLS,
} from "../models/models.js";
// helpers:
import { getHTMLFromList } from "../helpers/helpers.js";

class Components {
  //! компоненты main.html
  MENU(list) {
    return `
      <nav class='header-nav'>
      <ul class="header-menu">
        ${getHTMLFromList(
          list,
          ({ href, text }) =>
            `<li class="li"><a ${
              (href === "customers") | (href === "references")
                ? `href='./${href}.html'`
                : `id="${href}"`
            } class="menu-link" rel="noopener noreferrer">${text}</a></li>`,
        )}
        
      </ul>
    </nav>
        `;
  }
  REQUEST_CARD_MAIN_PAGE = (
    { id, title, method, url, cls = "" },
    host,
    endpoint,
  ) => `
        <article id="${id}" class="request-card">
            <h3>
                <strong class="request-card-title danger">${title}</strong>
            </h3>
            <div class="request-card-info" data-id="${id}" data-method="${method}">
                <button class='btn ${cls}'> ${method} </button>
                <code class='request-card-url'> ${
                  AUTH_ENDPOINTS.includes(id)
                    ? url(host, id)
                    : url(host, endpoint)
                } </code>
            </div>            
        </article>`;
  NOTE_MAIN_PAGE = () => `
    <div>
        <p class="note">
            <span class="danger">&#10071;</span>Переменная \${endpoint} представляет
            доступные в API ресурсы:<span class="danger">
            'athletes', 'books', 'videoGames', ...</span>.
        </p>
        <p class="note">
            <span class="danger">&#10071;</span>Переменная \${value} представляет значения
            передаваемых пользователем query-параметров.
        </p>
        <p class="note">
            <span class="danger">&#10071;</span>Переменная \${id} представляет
            идентификатор запрашиваемого ресурса.
        </p>
    </div>
    `;
  FEATURES_CARD = ({ icon, text, title }) => `
    <article class="features-card">
        <div class="icon-box">${icon}</div>
        <h3 class="features-title">${title}</h3>
        <hr class="features-card-hr"/>
        <p class="features-card-text">${text}</p>
    </article>
    `;
  ENTITIES_LINK = ({ href, endpoint, icon }) => `
    <a class="entities-card" href="${href}" rel="noopener noreferrer">
        <button class="btn btn-entity">
        ${icon}
        ${endpoint !== "docs" ? endpoint : "swagger"} 
        <span class="entities-card-url"> /${endpoint} </span>       
        </button>        
    </a>
    `;
  EXAMPLES_LINK = ({ href, example }) => `
    <li class="request-card-url doca">
        <a href="${href}" rel="noopener noreferrer">
          <div class="icon-box"><span class="material-icons-round">api</span></div>
          <span class='example'>${example}</span>
        </a>
    </li>
    `;
  DOCUMENTATION_LINK = ({ href, text }) => `
    <li class="request-card-url doca">
        <a href="${href}" rel="noopener noreferrer">
            ${text}
        </a>
    </li>
    `;
  //! компоненты docs.html
  REQUEST_CARD_DOCS_PAGE(
    { id, title, method, url, cls = "", scheme, ReqBtn, ResBtn, ErrBtn, note },
    host,
    endpoint,
  ) {
    return `
    <article id="${id}" class="request-card">
        <h3>
            <strong class="request-card-title danger">${title}</strong>
        </h3>
        <section class="request-card-info" data-id="${id}" data-method="${method}">
            <button class='btn ${cls}'> ${method} </button>
            <code class='request-card-url'> ${
              AUTH_ENDPOINTS.includes(id) ? url(host, id) : url(host, endpoint)
            } </code>
        </section>
        ${this.URL_CARD_TRIGGERS({
          id,
          ...scheme,
          ReqBtn,
          ResBtn,
          ErrBtn,
        })}        
        <div data-id="${id}" class="code">          
          <div class="request-card-copybar">
            <button class='btn'>
              <span class="material-icons-round">content_copy</span>
            </button>
            <em class='copy-status'>копировать</em> 
          </div>
          <pre></pre>
        </div>                  
    </article>`;
  }

  URL_CARD_TRIGGERS({ id, req, res, err, ReqBtn, ResBtn, ErrBtn }) {
    return `
            <div class="request-card-triggers">
            <div class="request-card-trigger">
                <div class="tooltip">${req}</div>
                <button
                    class="btn btn-success trggr"
                    data-id="${id}"
                    data-scheme="${req}"
                >
                    ${ReqBtn}
                </button>
            </div>
            <div class="request-card-trigger">
                <div class="tooltip">${res}</div>
                <button
                    class="btn btn-success trggr"
                    data-id="${id}"
                    data-scheme="${res}"
                >
                    ${ResBtn}
                </button>
            </div>
            <div class="request-card-trigger">
                <div class="tooltip">${err}</div>
                <button
                    class="btn btn-success trggr"
                    data-id="${id}"
                    data-scheme="${err}"
                >
                    ${ErrBtn}
                </button>
            </div>
        </div>
        `;
  }
  PAGINATION_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Получение порции данных осуществляется GET-запросом с передачей
          параметров <strong>limit, page</strong>:
        </p>
        <div>
            <code class='request-card-url doca'> ${URLS.getPaginatedEntities(
              host,
              endpoint,
            )} </code>
        </div> 
        `;
  }
  SELECTEDFIELDS_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Получение данных по выбранным полям сущностей осуществляется
          GET-запросом с передачей параметра <strong>select</strong>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.getSelectedEntities(
              host,
              endpoint,
            )} </code>
        </div> 
        <p class='note'>
            <span class="danger">&#10071;</span>Названия выбираемых полей смотрите <a href="#getEntities" class='danger'>в схеме ответа</a>.
        </p>
        <p class='note'>
            <span class="danger">&#10071;</span>Значением параметра является строка без пробелов, содержащая требуемые поля.
        </p>
        `;
  }
  SORTING_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Сортировка данных по выбранным полям сущностей осуществляется GET-запросом с передачей
          параметра <strong>sort</strong>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.getSortedEntities(
              host,
              endpoint,
            )}</code>
        </div> 
        <p class='note'>
            <span class="danger">&#10071;</span>Переменная \${field} принимает значения:
            <ul class='white-list'>${getHTMLFromList(
              SORTING_WHITE_LIST[endpoint],
              (sortValue) => `<li class=' btn'> ${sortValue} </li>`,
            )}
            </ul>            
        </p>
        <p class='note'>
            <span class="danger">&#10071;</span>Переменная \${dir} принимает значения:<strong> asc | desc</strong>.
        </p>
        `;
  }
  FILTERING_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Получение данных осуществляется GET-запросом с передачей уникальных для каждой сущности
          параметров.
        </p>
        <div>
            <code class='request-card-url doca'> ${URLS.getFilteredEntities(
              host,
              endpoint,
            )} </code>
        </div>
        <p class='note'>
            <span class="danger">&#10071;</span>Переменная \${field} принимает значения: 
            <ul class='white-list'>${getHTMLFromList(
              FILTERING_WHITE_LIST[endpoint],
              (filterValue) => `<li class=' btn'> ${filterValue} </li>`,
            )}
            </ul>
        </p> 
        `;
  }
  LIMITING_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Получение лимитированного количеcтва сущностей осуществляется
          GET-запросом с передачей query-параметра <strong>limit</strong>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.getLimitedEntities(
              host,
              endpoint,
            )}</code>
        </div> 
        `;
  }
  ADD_ENTITY_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          POST-запрос имитирует добавление новой сущности на сервер. В случае успеха, сервер вернет объект, содержащий <strong class='success'>валидные</strong> поля, переданные в запросе <a href="#addEntity" class='danger'>(см. схему)</a>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.addEntity(
              host,
              endpoint,
            )}</code>
        </div>
        <p class='note'><span class="danger">&#10071;</span>Минимально требуемые поля в теле запроса (<strong>body</strong>):</p>
        <ul class='white-list'> 
          ${getHTMLFromList(
            POST_REQUIRED_FIELDS[endpoint],
            ({ field, type }) => `<li class='btn'>${field}</li>`,
          )}
          </ul>        
        `;
  }
  DELETE_ENTITY_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          DELETE-запрос имитирует удаление конкретной сущности на сервере. В случае успеха, сервер вернет объект с идентификатором, переданным в запросе <a href="#deleteEntity" class='danger'>(см. схему)</a>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.deleteEntity(
              host,
              endpoint,
            )}</code>
        </div>
        <p class='note'>
            <span class="danger">&#10071;</span>Переменная \${id} - идентификатор удаляемой сущности!            
        </p> 
        `;
  }
  PATCH_ENTITY_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          PATCH-запрос имитирует обновление конкретной сущности на сервере. В случае успеха, сервер вернет обновленный объект с идентификатором, переданным в запросе:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.updateEntity(
              host,
              endpoint,
            )}</code>
        </div>
        <p class='note'>
            <span class="danger">&#10071;</span>Переменная \${id} - идентификатор обновлемой сущности!            
        </p>
        <p class='note'>
            <span class="danger">&#10071;</span> Передаваемый объект (body) должен содержать обновляемые поля конкретной сущности <a href="#getEntities" class='danger'>(см. схему)</a>.
        </p> 
        `;
  }
  UPWARD_BTN() {
    return `
        <div class='icon-box upwardBtn'>
          <span class="material-icons-round">arrow_upward</span>
        </div>        
        `;
  }
  SUPPORT = () =>
    `<a href="./customers.html" rel="noopener noreferrer">
      <button class="btn">
        <span class="material-icons-round"> free_breakfast </span>
        <span>поддержать нас...</span>
      </button>
    </a>`;

  FOOTER() {
    return `
      <a href="mailto:mail@wantedjson.ru?body=привет" class="footer-link" rel="noopener noreferrer">
        <div class='footer-link-tasks'>
          <p>
            <strong>тех. поддержка: </strong>
          </p>
          <p>
            <strong>идеи для развития: </strong>
          </p>          
        </div>        
        <address>
          <span class="material-icons-round"> mail_outline </span>
          <span>mail@wantedjson.ru</span>
        </address>
      </a>        
    `;
  }
  FORM(elements, formType, submitValue) {
    return `
    <form class='${formType}'>
      ${getHTMLFromList(
        elements,
        ({ type, placeholder, name, errorMsg, tabindex }) => `
        <p>
          <input type='${type}' name="${name}" placeholder="${placeholder}" 
          ${type === "submit" ? `value='${submitValue}' disabled readonly` : ""}
          ${type === "password" ? "autocomplete='new-password'" : ""}
          ${type === "text" ? "autocomplete='username'" : ""}
          tabindex="${tabindex}"        
          />
          <span class="form-error">${errorMsg}</span>
      </p>
        `,
      )}      
    </form>`;
  }
  NOTICE_MODAL(style) {
    return `
    <section class="noticeModal" id="noticeModal">      
      <div class="noticeModal-close danger">
        <span class="material-icons-round">close</span>
      </div>
      
      <p class="section-text noticeModal-text"></p>
    </section>`;
  }
}

export default new Components();
