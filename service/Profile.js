// consts:
// utils:
import {
  copy,
  draw,
  getActualUserAuthParams,
  getDataFromLS,
  getTokenDeathTimeValue,
} from "../helpers/helpers.js";
// service classes:
import { Auth } from "./Auth.js";
import Components from "./Components.js";

class Profile {
  constructor() {
    this.container = document.querySelector(".appContainer");
    this.accessTokenSection = document.querySelector(".accessTokenSection");
    this.accessTokenDeathTimeElem = null;
    this.refreshButton = null;
    this.accessTokenValueElem = null;
    this.spinner = this.container.querySelector(".spinner");
    this.logoutButton = null;
    this.subscribers = [];
    this.user = getDataFromLS("user");
  }

  async template() {
    this.observer();
    this.spinner.classList.toggle("active");
    // await this.getActualUserParams();
    this.spinner.classList.toggle("active");
    this.render(this.container, this.user);
    this.addListenerToContainer();
    this.addListenerToLogoutButton();
  }

  render(container, user) {
    const html = Components.PROFILE_PAGE(user);
    draw(container, html);
    this.accessTokenSection = container.querySelector(".accessToken-section");
    this.accessTokenValueElem = this.accessTokenSection.querySelector(
      ".accessToken-section-value",
    );
    this.refreshButton = this.accessTokenSection.querySelector(".refresh");
    this.accessTokenDeathTimeElem = this.accessTokenSection.querySelector(
      ".accessToken-section-tokenDeathTimeElem",
    );
    this.logoutButton = container.querySelector(".logout-section button");
  }

  static isUserSignedIn(container, page) {
    if (!getDataFromLS("user")?.accessToken) {
      page !== 'index' ? this.showUnregisteredHTML(container, page) : ''
      return false;
    }
    return true;
  }

  static showUnregisteredHTML(container) {
    container.innerHTML = `<h1 class='h1'>Вы не вошли в систему</h1>`;
    window.setTimeout(() => location.replace("./main.html"), 2000);
  }

  async getActualUserParams() {
    await getActualUserAuthParams();
    this.user = getDataFromLS("user");
  }

  async addListenerToContainerHandler(e) {
    if (e.target.closest(".request-card-copybar")) {
      let accessTokenValueElem = this.accessTokenSection.querySelector("code"),
        copyStatus = this.accessTokenSection.querySelector(".copy-status");
      copy(accessTokenValueElem, copyStatus);
    }
    if (e.target.closest(".refresh")) {
      e.preventDefault();
      this.spinner.classList.toggle("active");
      await getActualUserAuthParams();
      this.spinner.classList.toggle("active");
      this.user = getDataFromLS("user");
      this.subscribers.forEach((fn) =>
        fn(this.accessTokenValueElem, this.accessTokenDeathTimeElem, this.user),
      );
      this.refreshButton.disabled = true;
    }
  }

  addListenerToContainer() {
    this.container.addEventListener(
      "click",
      this.addListenerToContainerHandler.bind(this),
    );
    return this;
  }

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
  }

  addListenerToLogoutButton() {
    this.logoutButton.onclick = async () => {
      this.spinner.classList.toggle("active");
      await Auth.cleanUserData();
      this.spinner.classList.toggle("active");
      setTimeout(() => location.replace("./main.html"), 1000);
    };
  }
}

export { Profile };

