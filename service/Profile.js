// helpers:
import {
  copy,
  dateFormatter,
  draw,
  getActualUserAuthParams,
  getDataFromLS,
  getTokenDeathTimeValue,
} from "../helpers/helpers.js";
import { SS_ERROR_KEY } from "../models/models.js";
// service classes:
import Api from "./Api.js";
import { Auth } from "./Auth.js";
import Components from "./Components.js";
import { Notice } from "./Notice.js";

class Profile {
  constructor() {
    // ! DOM
    this.container = document.querySelector(".appContainer");
    this.accessTokenSection = document.querySelector(".accessTokenSection");
    this.accessTokenDeathTimeElem = null;
    this.refreshButton = null;
    this.accessTokenValueElem = null;
    this.spinner = this.container.querySelector(".spinner");
    this.logoutButton = null;
    this.limitElem = null;
    this.usedElem = null;
    this.remainElem = null;
    this.resetAtElem = null;
    // ! LOGIC
    this.notice = new Notice({
      Component: Components.NOTICE_MODAL,
      key: SS_ERROR_KEY,
    });
    this.subscribers = [];
    this.user = getDataFromLS("user");
  }

  async template() {
    this.observer();
    this.spinner.classList.toggle("active");
    // await this.getActualUserParams();
    this.spinner.classList.toggle("active");
    this.render(this.container, this.user);
    this.updateReqLimits(
      this.remainElem,
      this.usedElem,
      this.resetAtElem,
      this.limitElem,
    );
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
    this.remainElem = container.querySelector(
      ".limit-section-data-remaining code",
    );
    this.usedElem = container.querySelector(".limit-section-data-used code");
    this.resetAtElem = container.querySelector(
      ".limit-section-data-resetAt code",
    );
    this.limitElem = container.querySelector(".limit-section-data-limit code");
  }

  async getActualUserParams() {
    await getActualUserAuthParams();
    this.user = getDataFromLS("user");
  }

  async updateReqLimits(remainElem, usedElem, resetAtElem, limitElem) {
    this.spinner.classList.toggle("active");
    let { requestLimit } = await Api.getEntities("athletes", "country=россия");
    this.spinner.classList.toggle("active");
    this.renderLimitsData(remainElem, usedElem, resetAtElem, limitElem, {
      remaining: requestLimit?.remaining,
      resetAt: requestLimit?.resetAt,
      used: requestLimit?.used,
      limit: requestLimit?.limit,
    });
  }

  renderLimitsData(remainElem, usedElem, resetAtElem, limitElem, data) {
    remainElem.textContent = data?.remaining;
    usedElem.textContent = data?.used;
    resetAtElem.textContent = dateFormatter(data?.resetAt);
    limitElem.textContent = data?.limit;
  }

  async addListenerToContainerHandler(e) {
    if (e.target.closest(".request-card-copybar")) {
      let accessTokenValueElem = this.accessTokenSection.querySelector("code"),
        copyStatus = this.accessTokenSection.querySelector(".copy-status");
      copy(accessTokenValueElem, copyStatus);
    }
    if (e.target.closest(".refresh")) {
      e.preventDefault();
      try {
        this.spinner.classList.toggle("active");
        let res = await getActualUserAuthParams();
        this.spinner.classList.toggle("active");
        if (typeof res === "string") {
          throw new Error(res);
        }
        this.user = getDataFromLS("user");
        this.subscribers.forEach((fn) =>
          fn(
            this.accessTokenValueElem,
            this.accessTokenDeathTimeElem,
            this.user,
          ),
        );
        this.updateReqLimits(
          this.remainElem,
          this.usedElem,
          this.resetAtElem,
          this.limitElem,
        );
        this.refreshButton.disabled = true;
      } catch (e) {
        this.notice.noticeModalShow(e.message, 0);
        setTimeout(() => sessionStorage.removeItem(this.notice.key), 100);
      }
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
