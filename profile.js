// consts:
import { ROOT } from "./models/models.js";
// utils:
import { copy, draw, getDataFromLS, getToken } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Theme } from "./service/Theme.js";

const FOOTER = document.querySelector(".footer");

// Подключаем тему:
new Theme({ root: ROOT });

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

const profileState = {
  container: document.querySelector(".appContainer"),
  tokenSection: document.querySelector(".tokenSection"),  
  TOKEN_VALUE: null,
  subscribers: [],
  user: getDataFromLS("user"),
  token: getDataFromLS("user")?.token ?? null,
  login: getDataFromLS("user")?.login ?? '',
  userId: getDataFromLS("user")?.id ?? '',

  template() {
    this.observer()
      .render(this.container)
      .addListenerToContainer()
      .getActualToken();
  },

  render(container) {
    const html = `
      <section class="app-section tokenSection">    
        <h3>Текущий токен:</h3>
        ${Components.COPY_BAR()}
        <li class="tokenSection-li">
          <code class="tokenSection-value"></code>
        </li>
      </section>
      <section class="app-section userSection">
        <h3>Данные пользователя:</h3>        
        <p>Имя пользователя: <code>${this?.user?.login}</code></p>
        <p>ID пользователя: <code>${this?.user?.id}</code></p>
      </section>  
    `;   
    draw(container, html);
    this.TOKEN_VALUE = document.querySelector(".tokenSection-value");
    this.tokenSection = document.querySelector(".tokenSection");
    return this;
  },

  isUserSignedIn() {
    if (!this.token) {
      this.container.innerHTML = `<h1 class='h1'>Вы не вошли в систему</h1>`;
      window.setTimeout(() => location.replace("./main.html"), 2000);
      return false;
    }
    return true;
  },

  async getActualToken() {
    this.token = await getToken();
    this.subscribers.forEach((fn) => fn(this.TOKEN_VALUE, this.token));
    return this;
  },

  observer() {
    this.subscribers.push(draw);
    return this;
  },

  addListenerToContainerHandler(e) {
    if (e.target.closest(".request-card-copybar")) {
      let tokenContainer = this.tokenSection.querySelector("code"),      
      copyStatus = this.tokenSection.querySelector(".copy-status");
      copy(tokenContainer, copyStatus);
    }
  },

  addListenerToContainer() {
    this.container.addEventListener(
      "click",
      this.addListenerToContainerHandler.bind(this),
    );
    return this;
  },
};

profileState.isUserSignedIn() && profileState.template();

