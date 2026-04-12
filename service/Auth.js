// utils
import {
  debouncer,
  draw,
  fetchAuthRequest,
  getActualUserAuthParams,
  getDataFromLS,
  setDataToLS,
} from "../helpers/helpers.js";
// service
import Api from "./Api.js";
import Components from "./Components.js";
import { Notice } from "./Notice.js";

class Auth {
  constructor({
    container,
    component,
    elements,
    formType = "signup",
    actionTrigger = null,
  }) {
    getDataFromLS("user") && getActualUserAuthParams();
    if (!((formType === "signin") | (formType === "signup")))
      throw new Error("Invalid 'formType' param!");
    // ! DOM ELEMENTS
    this.notice = new Notice({
      msg: "AccessToken действует 90 мин. По истечении этого времени, Вы можете вручную обновить токен, находясь в профиле.",
      Component: Components.NOTICE_MODAL,
    });
    this.textSliceValue = 13;
    this.container = container;
    this.component = component;
    this.form = null;
    this.submitBtn = null;
    this.spinner = null;
    this.userLogout = document.querySelector(".user-menu-logout");
    // ! LOGIC PROPS -----
    this.debouncedFormFilling = debouncer(this.formFilling, 300);
    this.elements = elements;
    this.formType = formType;
    if (this.formType === "signin") {
      this.actionTrigger = document.querySelector(actionTrigger);
      this.userLogout = document.querySelector(".user-menu-logout");
      this.userProfile = document.querySelector(".user-menu-profile");
      this.userLogin = document.querySelector(".user-login");
      getDataFromLS("user")?.login
        ? this.showRegisteredUser(
            "",
            getDataFromLS("user").login.slice(0, this.textSliceValue),
            "add",
          )
        : this.showRegisteredUser("login", "", "remove");
    }
    if (this.formType === "signup") {
      this.agreementPopup = null;
    }
    this.submitBtnValue = this.getSubmitBtnValue(this.formType);
    this.passCompareError = new Error("пароли не совпадают!");
    // ! FORM STATE
    this.state = this.getInitState(this.elements);

    // methods
    this.template(
      this.container,
      this.component,
      this.elements,
      this.actionTrigger,
      this.formType,
    );
  }

  getSubmitBtnValue(formType) {
    return formType === "signup" ? "регистрация" : "войти";
  }

  template(container, component, elements, actionTrigger, formType) {
    this.render(container, component, elements)
      .addInputListener()
      .addSubmitListener()
      .addClickListenerToContainer();

    formType === "signin" &&
      this.addClickListenerToActionTrigger(actionTrigger)
        .addClickListenerToUserLogout()
        .addClickListenerToUserProfile();

    formType === "signup" &&
      this.addClickListenerToAgreementPopup(this.agreementPopup);
  }

  render(container, component, elements) {
    draw(container, component(elements, this.submitBtnValue));
    this.form = container.querySelector(`.authForm`);
    this.submitBtn = this.form.submit;
    this.spinner = this.form.querySelector(".spinner");
    if (this.formType === "signup") {
      this.agreementPopup = document.querySelector(".authForm-agreemеntPopup");
    }
    return this;
  }

  formFilling = (e) => {
    const { name, value } = e.target;

    const elemData = this.elements.find((ed) => ed.name === name);

    if (elemData?.type === "checkbox") {
      this.state[name] = !this.state[name];
    } else if (elemData.regExp.test(value)) {
      this.state[name] = value;
      e.target.nextElementSibling.classList.remove("active");
    } else {
      e.target.nextElementSibling.classList.add("active");
      this.state[name] = "";
    }

    Object.values(this.state).every((v) => v)
      ? (this.submitBtn.disabled = false)
      : (this.submitBtn.disabled = true);

    console.log(this.state);
  };

  addInputListener() {
    this.form?.addEventListener("input", (e) => this.debouncedFormFilling(e));
    return this;
  }

  addSubmitListenerHandler = async (e) => {
    e.preventDefault();

    if (
      this.state.password !== this.state.password2 &&
      this.formType === "signup"
    ) {
      this.submitBtn.nextElementSibling.textContent =
        this.passCompareError.message;
      this.submitBtn.nextElementSibling.classList.add("active");
      return;
    } else {
      this.submitBtn.nextElementSibling.classList.remove("active");
    }

    const body = { login: this.state.login, password: this.state.password };

    this.submitBtn.value = "Загрузка...";

    let response = await fetchAuthRequest(this.spinner, this.formType, body);

    if (!(response instanceof Object)) return this.reset(response);

    if (this.formType === "signin") {
      this.signIn(response);
      this.reset("Вход прошел успешно!");
      return setTimeout(() => {
        this.container.classList.toggle("active");
        this.notice.noticeModalShow(3000);
      }, 2000);
    }
    this.reset(response?.message);
    setTimeout(() => {
      location.replace("./main.html");
    }, 2000);
  };

  addSubmitListener() {
    this.form?.addEventListener("submit", this.addSubmitListenerHandler);
    return this;
  }

  addClickListenerToContainerHandler = (e) => {
    if (e.target.matches(".authForm-agreementTrigger"))
      return this.agreementPopup.classList.toggle("active");

    if (!e.target.closest("form") && this.formType === "signin")
      this.container.classList.toggle("active");
    this.submitBtn.nextElementSibling.classList.toggle("active");
    this.submitBtn.nextElementSibling.textContent = "";
  };

  addClickListenerToContainer() {
    this.container.addEventListener(
      "click",
      this.addClickListenerToContainerHandler,
    );
    return this;
  }

  signIn({ user, accessToken, exp }) {
    this.showRegisteredUser(
      "",
      user.login.slice(0, this.textSliceValue),
      "add",
    );
    setDataToLS("user", {
      login: user?.login,
      accessToken,
      exp: exp || null,
      id: user?.id || null,
    });
  }

  async logout() {
    this.showRegisteredUser("login", "", "remove");
    Auth.cleanUserData();
  }

  static async cleanUserData() {
    const actualUserParams = await getActualUserAuthParams();
    await Api.logout(actualUserParams.accessToken);
    setDataToLS("user", null);
    return;
  }

  addClickListenerToUserLogout = () => {
    this.userLogout.onclick = () => this.logout();
    return this;
  };

  showRegisteredUser(actionTriggerContent, userLoginContent, action) {
    this.actionTrigger.firstElementChild.textContent = actionTriggerContent;
    this.userLogin.classList[action]("active");
    this.userLogin.textContent = userLoginContent;
  }

  addClickListenerToUserProfile = () => {
    this.userProfile.onclick = (e) => {
      location.replace("./profile.html");
    };
    return this;
  };

  addClickListenerToActionTriggerHandler = () => {
    this.container.classList.toggle("active");
  };

  addClickListenerToActionTrigger(actionTrigger) {
    actionTrigger.addEventListener(
      "click",
      this.addClickListenerToActionTriggerHandler,
    );
    return this;
  }

  addClickListenerToAgreementPopup(agreementPopup) {
    agreementPopup.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  reset(res) {
    this.form.reset();
    this.state = this.getInitState(this.elements);
    this.submitBtn.disabled = true;
    this.submitBtn.value = this.submitBtnValue;
    this.submitBtn.nextElementSibling.classList.toggle("active");
    this.submitBtn.nextElementSibling.textContent = res;
  }

  getInitState(elements) {
    return elements.slice(0, -1).reduce(
      (acc, { name, type }) => ({
        ...acc,
        [name]: type === "checkbox" ? false : "",
      }),
      {},
    );
  }
}

export { Auth };


