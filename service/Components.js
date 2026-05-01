import {
  AUTH_ENDPOINTS,
  FILTERING_WHITE_LIST,
  POST_REQUIRED_FIELDS,
  SORTING_WHITE_LIST,
  URLS,
} from "../models/models.js";
// helpers:
import { getHTMLFromList, getTokenDeathTimeValue } from "../helpers/helpers.js";

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
            } class="header-menu-link" rel="noopener noreferrer">${text}</a></li>`,
        )}
        
      </ul>
    </nav>    
        `;
  }
  USER_MENU({ icon, text, cls }) {
    return `
      <li>
        <div class="${cls}">
          <span class="material-icons-round"> ${icon} </span>
          ${text}
        </div>
      </li>    
        `;
  }

  REQUEST_CARD_MAIN_PAGE = (
    { id, title, method, url, cls = "" },
    host,
    endpoint,
  ) => `
        <article id="${id}" class="request-card">
            <h3>
                <strong class="request-card-title">${title}</strong>
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
            доступные в API ресурсы: <strong> 'athletes', 'books', 'videoGames', ...</strong>.
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

  QUIZ_LINK = ({ href, header, icon }) => `
    <a href="${href}" class="quiz-link" rel="noopener">
      <article>        
          <span class="icon-box">${icon}</span>${header}        
      </article>
    </a>
    `;

  GETTING_STARTED_CARD = ({ icon, text, title }) => `
    <article class="gettingStarted-card">
        <div class="gettingStarted-flex">
          <div class="icon-box">${icon}</div>
          <p class="gettingStarted-card-title">${title}</p>   
        </div>             
        <p class="gettingStarted-card-text">${text}</p>
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
  EXAMPLES_LINK = ({ href, text, title }) => `
    <em>${title}</em>
    <li class="request-card-url doca">        
        <a ${href ? `href=${href}` : ""} rel="noopener noreferrer">
          <div class="icon-box"><span class="material-icons-round">api</span></div>
          <span class='example'>${text}</span>
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
            <strong class="request-card-title">${title}</strong>
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
          ${this.COPY_BAR()}          
          <pre></pre>
        </div>                  
    </article>`;
  }

  COPY_BAR() {
    return `
      <div class="request-card-copybar">
        <button class='btn'>
          <span class="material-icons-round">content_copy</span>
        </button>
        <em class='copy-status'>копировать</em> 
      </div>
    `;
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
            <span class="danger">&#10071;</span>Переменная \${dir} принимает значения:
            <ul class='white-list'>
              ${getHTMLFromList(
                ["asc", "desc"],
                (dir) => `<li class=' btn'> ${dir} </li>`,
              )}
            </ul> 
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
        <p class="note">
            <span class="danger">&#10071;</span>Переменная \${value} - значение query-параметра.
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
          POST-запрос имитирует добавление новой сущности на сервер. В случае успеха, сервер вернет объект, содержащий <strong class='success'>валидные</strong> поля, переданные в запросе <a href="#addEntity" class='danger'>(см. схему ответа)</a>:
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
            <span class="danger">&#10071;</span>Передаваемый объект (body) должен содержать обновляемые поля конкретной сущности <a href="#getEntities" class='danger'>(см. схему)</a>.
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
        <span>поддержать</span>
      </button>
    </a>`;

  FOOTER() {
    return `
      <hr class='footer-hr'/>
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
      <p class='footer-link-copyright'>&copy; wantedjson.ru Все права защищены.</p>        
    `;
  }
  FORM(elements, submitValue) {
    return `
    <form class='authForm'>
      <div class="authForm-logo">
        <img src="./icons/logo.svg" alt="LOGO" />
      </div>
      <h2 class='authForm-title'>wanted json</h2>
      ${getHTMLFromList(
        elements,
        ({ type, placeholder, name, errorMsg, tabindex }, i) =>
          type === "checkbox"
            ? `<div class='${name}'>
                  <input type='${type}' name="${name}" id='${name}' placeholder="${placeholder}" 
                  tabindex="${tabindex}">
                  <span class="${name}-trigger">${placeholder}</span>
                </div>`
            : `<div>
                ${
                  name === "password"
                    ? `<span class="material-icons-round authForm-visibility">visibility</span>`
                    : ""
                }
                <input type='${type}' name="${name}" placeholder="${placeholder}" id='${name}' autocomplete='on'
                ${type === "submit" ? `value='${submitValue}' disabled readonly` : ""}            
                tabindex="${tabindex}" ${!i && "autofocus"}/>                  
                <span class="authForm-error">${errorMsg}</span>
              </div>`,
      )}
      <div class='spinner'>
        <div class='spinner-circle1'></div>
        <div class='spinner-circle2'></div>
        <div class='spinner-circle3'></div>
      </div>
      ${submitValue === "войти" ? `<div id='authForm-signup-link'><a href="./signup.html">регистрация</a></div>` : ""}   
    </form>`;
  }

  NOTICE_MODAL(style = "") {
    return `
    <section class="noticeModal" id="noticeModal" style='${style}'>        
      <p class="section-text noticeModal-text"></p>
      <div class="noticeModal-exit danger">
        <span class="material-icons-round">close</span>
      </div>    
    </section>`;
  }

  QUIZ_ITEM({ id, q, correct, answers }, userAnswers, isDone) {
    return `
    <article class='quizItem' title='${`Вопрос № ${id}`}' id='item-${id}'>
      <h3>${id + ".  " + q}</h3>
      <ul class='quizItem-ul'>
        ${getHTMLFromList(
          answers,
          (answer, i) => `
          <li class='quizItem-li'>            
            <input 
              type="${correct.length > 1 ? "checkbox" : "radio"}"
              name="${correct.length === 1 && id}"
              ${userAnswers[id]?.includes(i) ? "checked" : ""} 
              value='${i}' 
              id='${id}' 
              class='quizItem-input'              
            />                            
            <div class='quizItem-answer ${correct.includes(i) && isDone && "success"}'>
              ${answer}
            </div>            
          </li>`,
        )}
      </ul>
    </article>`;
  }

  QUIZ_RESULT(userResult, list) {
    return `
  <output>      
      <strong>Количество верных ответов: <span class='success'>${userResult.t}</span></strong> <br/>
      <strong>Количество неверных ответов: <span class='danger'>${userResult.f}</span></strong> <br/> 
      <strong>Процент выполнения: ${((userResult.t / list.length) * 100).toFixed(2)}% </strong> <br/>
      <br/>
      <strong>Правильные ответы:</strong> <br/>
      ${getHTMLFromList(
        list,
        ({ correct, id }) =>
          `<a rel='noopener' href='${`#item-${id}`}'>
              Вопрос ${id}: ответы ${correct.map((d) => d + 1).join(", ")}
            </a>;<br/>`,
      )}
      <br/>
      <strong class='danger'>Нажмите 'РЕСТАРТ', чтобы начать тест заново!</strong>
  </output>`;
  }

  PROFILE_PAGE(user) {
    const isAccessTokenExpired = Date.now() > new Date(user.exp * 1000);
    return `
      <section class="app-section accessToken-section">    
        <h3>Текущий токен:</h3>
        ${this.COPY_BAR()}
        <li class="accessToken-section-li">
          <code class="accessToken-section-value"> ${user.accessToken}</code>
        </li>
        <form action="" class='accessToken-section-form'>
          <fieldset>
            <legend>Время истечения токена:</legend>
            <p class='accessToken-section-tokenDeathTimeElem'> ${getTokenDeathTimeValue(user?.exp)} </p>
            <p>              
              <button class="btn btn-success refresh" title="обновить токен" ${isAccessTokenExpired ? "" : "disabled"}>
                <div class="">
                  <span class="material-icons-round"> restart_alt </span>
                </div>
                обновить
              </button>              
            </p>
          </fieldset>
        </form>
      </section>
      <section class="app-section user-section">
        <h3>пользователь:</h3>
        <div class="user-section-data">
          <p>Имя пользователя: <code>${user?.login}</code></p>
          <p>ID пользователя: <code>${user?.id}</code></p>
        </div>       
      </section>
      <section class="app-section limit-section">
        <h3>Запросы <span style='text-transform: none;'>${user?.login}</span>:</h3>
        <div class="limit-section-data">
          <p class='limit-section-data-limit'>Суточный лимит: <code></code></p>
          <p class='limit-section-data-remaining'>Осталось: <code></code></p>
          <p class='limit-section-data-used'>Использовано: <code></code></p>
          <p class='limit-section-data-resetAt'>Oбновление лимита: <code></code></p>
        </div>       
      </section>
      <section class="app-section logout-section">
        <p class="logout-section-logoutBtn">
          <button class="btn btn-danger" title="выйти из системы">        
            <span class="material-icons-round"> logout </span>
            выйти
          </button>
        </p>      
      </section>
            
    `;
  }
  AGREEMENT() {
    return `
    <h2 class="h2">Согласие на обработку данных:</h2>
        <p>
          Настоящим субъект персональных данных (посетитель сайта https://
          wantedjson.ru), действуя свободно, своей волей и в своем интересе, а
          также подтверждая свою дееспособность, в соответствии со ст. 9
          Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»
          дает свое согласие Оператору сайта https:// wantedjson.ru (далее
          <strong>Оператор</strong>) на обработку своих персональных данных на
          следующих условиях:
        </p>
        <div>
          <p style='margin: 0px 0px var(--app-lg-spacing) 0px'>1. Согласие дается на обработку следующих данных:</p>
          <ul>
            <li>адреса электронной почты;</li>
            <li>IP-адреса пользователя;</li>
            <li>иных данных, не позволяющих идентифицировать личность, но необходимых для корректной работы сайта Оператора.</li>                                       
          </ul>  
          Субъект персональных данных указывает вышеописанные данные по собственной
          инициативе при направлении в адрес оператора обращения посредством
          форм обратной связи на сайте Оператора: страницы
          https://wantedjson.ru/signup.html и https://wantedjson.ru/index.html.
          <br/>
          Оператор сайта https://wantedjson.ru <u> настоятельно рекомендует            
              использовать уникальный электронный адрес, не привязанный к действующим
              государственным и частным сервисам, интернет-платформам, сайтам государственных служб и органов</u
            >, в целях сохранения конфиденциальности и анонимности персональных
            данных субъекта;
        </div>
        <p>
          2. Согласие дается на обработку персональных данных с использованием
          средств автоматизации и без использования таких средств;
        </p>
        <p>
          3. Цели обработки персональных данных: услуги по предоставлению
          открытых данных для тестирования, обучения, прототипирования и
          разработки Веб-приложений субъекта; обеспечение регистрации и
          авторизации пользователей на cайте Оператора; предоставление доступа к
          персонализированным ресурсам cайта Оператора; поддержание
          работоспособности учётной записи пользователя; обеспечение
          безопасности учётных записей и предотвращение несанкционированного
          доступа.
        </p>
        <p>
          4. Настоящее согласие на обработку персональных данных включает в себя
          согласие на совершение оператором совокупности действий (операций) с
          персональными данными: сбор, запись, систематизация, накопление,
          хранение, уточнение (обновление, изменение), извлечение,
          использование, передачу (предоставление, доступ), обезличивание,
          блокирование, удаление, уничтожение;
        </p>
        <p>
          5. Согласие включает в себя разрешение субъекта на использование на
          сайте Оператора программных файлов «cookie» (в случае, если это
          разрешено в настройках браузера субъекта). Указанные выше файлы обрабатываются
          в целях: обеспечения функциональных возможностей сайта; регистрации и
          авторизации пользователей на cайте Оператора; предоставления доступа к
          персонализированным настройкам сайта Оператора; поддержания
          работоспособности учётной записи субъекта; обеспечения безопасности
          учётных записей и предотвращения несанкционированного доступа.
        </p>
        <p>
          6. Согласие на обработку персональных данных подтверждается субъектом
          в форме для регистрации, размещенной на странице
          https://wantedjson.ru/signup.html сайта Оператора, путем установки галочки для настоящего документа и нажатием кнопки «РЕГИСТРАЦИЯ»;
        </p>
        <p>
          7. Настоящее согласие действует с даты его предоставления. Настоящее
          согласие может быть отозвано субъектом персональных данных путем
          направления письменного уведомления об отзыве согласия Оператору по
          адресу электронной почты: mail@wantedjson.ru;
        </p>
        <p>
          8. В случае отзыва согласия на обработку персональных данных оператор
          вправе продолжить обработку персональных данных при наличии оснований,
          указанных в пунктах 2–9.1, 11 части 1 статьи 6, части 2 статьи 10 и
          части 2 статьи 11 Федерального закона от 27.07.2006 № 152-ФЗ «О
          персональных данных».
        </p>
        <p>
          Подтверждаю, что ознакомлен(а) с положениями Федерального закона от
          27.07.2006 № 152-ФЗ «О персональных данных», Политикой Оператора в
          отношении моих персональных данных. Права и обязанности в области
          защиты персональных данных мне понятны.
        </p>      
    `;
  }
  PRIVACY_POLICE() {
    return `
      <h2 class="h2">Политика обработки персональных данных.</h2>        
        <p>Дата вступления в силу: 2026-07-31 г.</p>
        <p>Владелец сайта: частное лицо</p>
        <p>Адрес сайта: https://wantedjson.ru</p>        
        <h3>1. Общие положения</h3>
        <p>
          1.1. Настоящая Политика обработки персональных данных (далее —
          «Политика») определяет порядок обработки и защиты персональных данных
          пользователей сайта wantedjson.ru (далее — «Сайт») в соответствии с
          требованиями Федерального закона от 27.07.2006 № 152‑ФЗ «О
          персональных данных».
        </p>
        <p>
          1.2. Политика действует в отношении всей информации, которую Сайт
          может получить о пользователе при использовании им Сайта.
        </p>
        <p>
          1.3. Использование Сайта означает безоговорочное согласие пользователя
          с настоящей Политикой и указанными в ней условиями обработки его
          персональных данных. В случае несогласия с этими условиями
          пользователь должен воздержаться от использования Сайта.
        </p>
        <h3>2. Цели обработки персональных данных</h3>
        <p>
          2.1. Персональные данные пользователей обрабатываются исключительно
          для следующих целей: обеспечение аутентификации (регистрации и авторизации)
          пользователей на Сайте; предоставление доступа к персонализированным
          ресурсам Сайта; поддержание работоспособности учётной записи
          пользователя; обеспечение безопасности учётных записей и
          предотвращение несанкционированного доступа; предоставление доступа к API
          Сайта;
        </p>
        <p>
          2.2. Обработка персональных данных осуществляется на законной и
          справедливой основе, ограничивается достижением конкретных, заранее
          определённых и законных целей.
        </p>
        <h3>3. Состав обрабатываемых персональных данных</h3>
        <p>
          3.1. Сайт обрабатывает следующие персональные данные пользователей:
          <ul>
            <li>адрес электронной почты;</li>
            <li>IP-адрес;</li>                     
          </ul>          
        </p>
        <p>3.2. Указанные данные предоставляются пользователем добровольно при регистрации / авторизации на Сайте через формы регистрации / авторизации, размещенные на Сайте, нажатием кнопок «РЕГИСТРАЦИЯ» / «ВОЙТИ» .</p>
        <p>3.3. Сайт использует файлы cookie исключительно для целей авторизации и поддержания сессии пользователя. Другие цели использования cookie отсутствуют.</p>        
        <h3>4. Правовые основания обработки персональных данных</h3>
        <p>4.1. Правовым основанием для обработки персональных данных является: 
            <ul>
                <li >согласие пользователя, выраженное посредством регистрации на Сайте и принятия условий настоящей Политики;</li>
                <li >необходимость исполнения условий пользовательского соглашения (при его наличии) между владельцем Сайта и пользователем.</li>                        
            </ul>
        </p>
        <h3>5. Порядок и условия обработки персональных данных</h3>
        <p>5.1. Обработка персональных данных осуществляется с использованием средств автоматизации в базе данных, расположенной на серверах владельца Сайта.</p>
        <p>5.2. Доступ к персональным данным имеют только уполномоченные технические специалисты, ответственные за поддержку работоспособности Сайта.</p>
        <p>5.3. Срок хранения персональных данных:
          <ul>
                <li >персональные данные хранятся в течение всего срока действия учётной записи пользователя;</li>
                <li >по запросу  пользователя об удалении учётной записи - данные удаляются из базы данных в течение 30 (тридцати) календарных дней;</li>  
                <li >резервные копии базы данных могут содержать персональные данные в течение 90 (девяноста) календарных дней с момента их создания.</li>               
            </ul>   
        </p>
        <h3>6. Меры по обеспечению безопасности персональных данных.</h3>
        <p>6.1. Владелец Сайта принимает необходимые и достаточные организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий:
            <ul>
                <li>хранение паролей пользователей в зашифрованном (хешированном) виде;</li>
                <li>использование защищённых протоколов передачи данных (HTTPS);</li>  
                <li>регулярное обновление программного обеспечения и устранение уязвимостей;</li>    
                <li>ограничение доступа к базе данных и серверам;</li>
                <li>ограничение доступа к базе данных и серверам;</li>    
                <li>хранение токенов в защищенных 'cookies';</li>
                <li>валидация и проверка параметров запроса пользователя к API Сайта на стороне сервера;</li>
                <li>установка на стороне сервера Сайта защитного ПО для защиты от DDoS-атак;</li>
                <li>строгая валидация данных, вносимая пользователем в формы регистрации / авторизации </li>                                        
            </ul>
        </p>
        <h3>7. Права пользователей</h3>
        <p>7.1. Пользователь имеет право:</p>
        <ul>
            <li >получить информацию о наличии своих персональных данных и доступ к ним;</li>
            <li >требовать уточнения, блокирования или уничтожения своих персональных данных в случаях, если они являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;</li>  
            <li>отозвать своё согласие на обработку персональных данных путём направления запроса администратору Сайта на электронный адрес: mail@wantedjson.ru.</li>    
         </ul>
        
        <h3>8. Порядок реализации прав пользователей</h3>
        <p>8.1. Для реализации своих прав пользователь может направить запрос по электронной почте: mail@wantedjson.ru.</p>
        <p>8.2. Запрос должен содержать:
          <ul>
            <li>контактный адрес электронной почты, указанный при регистрации;</li>
            <li>чёткое описание требования (доступ, уточнение, удаление, отзыв согласия на обработку данных и т.д.);
            </li>                                         
          </ul>
        </p>
        <p>8.3. Владелец Сайта обязан рассмотреть и направить ответ на запрос пользователя на контактный адрес электронной почты, указанный при регистрации.
        </p>
        <h3>9. Срок обработки персональных данных</h3>
        <p>9.1. Срок обработки персональных данных (ПДн) начинается с момента регистрации пользователя на сайте и действует до одного из следующих событий:
          <ul>            
            <li>пользователь отозвал согласие на обработку персональных данных;</li>
            <li>прекращена деятельность Сайта;</li>                                         
          </ul>
        </p>
        <h3>10. Иные данные, необходимые для корректной работы Сайта.</h3>
        <p>10.1 Для аутентификации пользователя на сайте требуются данные, которые не связаны с конкретным человеком напрямую и не позволяют идентифицировать личность:
          <ul>
            <li>пароль, созданный пользователем и указываемый в формах регистрации / авторизации для достижения целей аутентификации. Настоятельно рекомендуем создавать <strong>надежный и уникальный пароль</strong>;</li>
            <li>токены доступа в зашифрованном виде, генерируемые сервером Сайта для обеспечения доступа пользователя к API и внутренним системам статистики Сайта;</li>
            <li>ID пользователя - уникальный идентификатор, генерируемый сервером Сайта, для обеспечения корректной работы пользователя с API и внутренними системам последнего.</li>                                       
          </ul>
        </p>
        <h3>11. Изменения в Политике</h3>
        <p>11.1. Владелец Сайта вправе вносить изменения в настоящую Политику. Новая редакция Политики вступает в силу с момента её размещения на Сайте, если иное не предусмотрено новой редакцией.</p>
        <p>11.2. Актуальная версия Политики всегда доступна в форме для регистрации, размещенной на странице /signup.html сайта Оператора</p>
        <h3>12. Согласие пользователя.</h3>
        <p>
          12.1. Согласие с настоящей политикой обработки персональных данных подтверждается субъектом
          в форме для регистрации, размещенной на странице
          /signup.html сайта Оператора, путем установки галочки для настоящего документа и нажатием кнопки «РЕГИСТРАЦИЯ»;
        </p>
        <h3>13. Контакты</h3>
        <p>
          13.1. По вопросам обработки персональных данных пользователи могут обращаться по адресу:
          <a
            href="mailto:mail@wantedjson.ru"
            style="font-weight: bold"
            rel="noopener noreferrer"
            >mail@wantedjson.ru</a
          >!
        </p>
    `;
  }
}

export default new Components();
