// consts:
import { ROOT } from "./models/models.js";
// utils:
import { copy, draw, getDataFromLS, getToken, getTokenDeathTimeValue } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";
import { Theme } from "./service/Theme.js";
import { Auth } from "./service/Auth.js";

const FOOTER = document.querySelector(".footer");

// Подключаем тему:
new Theme({ root: ROOT });

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

const profileState = {
  container: document.querySelector(".appContainer"),
  accessTokenSection: document.querySelector(".accessTokenSection"),
  accessTokenDeathTimeElem: null,
  refreshButton: null,
  accessTokenValueElem: null,
  logoutButton: null,
  subscribers: [],
  user: getDataFromLS("user"),

  template() {
    this.observer().getActualUserParams();
  },

  render(container, user) {
    const html = Components.PROFILE_PAGE(user);
    draw(container, html);
    this.accessTokenSection = document.querySelector(".accessTokenSection");
    this.accessTokenValueElem = this.accessTokenSection.querySelector(
      ".accessTokenSection-value",
    );
    this.refreshButton = this.accessTokenSection.querySelector(".refresh");
    this.accessTokenDeathTimeElem = this.accessTokenSection.querySelector(
      ".accessTokenSection-form strong",
    );
    this.logoutButton = this.container.querySelector('.logout')
    this.addListenerToContainer();
    this.addListenerToLogoutButton()   
  },

  isUserSignedIn() {
    if (!this?.user?.accessToken) {
      this.container.innerHTML = `<h1 class='h1'>Вы не вошли в систему</h1>`;
      window.setTimeout(() => location.replace("./main.html"), 2000);
      return false;
    }
    return true;
  },

  async getActualUserParams() {
    await getToken();
    this.user = getDataFromLS("user");
    this.render(this.container, this.user);
  },

  async addListenerToContainerHandler(e) {
    if (e.target.closest(".request-card-copybar")) {
      let accessTokenValueElem = this.accessTokenSection.querySelector("code"),
        copyStatus = this.accessTokenSection.querySelector(".copy-status");
      copy(accessTokenValueElem, copyStatus);
    }
    if (e.target.closest(".refresh")) {
      e.preventDefault();
      await getToken();
      this.user = getDataFromLS("user");
      this.subscribers.forEach((fn) =>
        fn(this.accessTokenValueElem, this.accessTokenDeathTimeElem, this.user),
      );
    }
  },

  addListenerToContainer() {
    this.container.addEventListener(
      "click",
      this.addListenerToContainerHandler.bind(this),
    );
    return this;
  },

  observer() {
    this.subscribers.push(
      (accessTokenValueElem, accessTokenDeathTimeElem, user) => {
        accessTokenValueElem.textContent = user?.accessToken;
        accessTokenDeathTimeElem.textContent = getTokenDeathTimeValue(
          user?.exp,
        );
      },
    );
    return this;
  },

  addListenerToLogoutButton() {
    this.logoutButton.onclick = () => {
      Auth.cleanUserData()
      location.replace('./main.html')
    }
  }
};

profileState.isUserSignedIn() && profileState.template();
