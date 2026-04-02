// utils
import {
  draw,
  getDataFromLS,
  getToken,
  setDataToLS,
} from "../helpers/helpers.js";
// service
import Api from "./Api.js";

class Auth {
  constructor({
    container,
    component,
    elements,
    formType = "signup",
    actionTrigger = null,
  }) {
    getDataFromLS("user") && getToken();
    if (!((formType === "signin") | (formType === "signup"))) throw new Error("Invalid 'formType' param!");
    // ! DOM ELEMENTS
    this.container = container;
    this.component = component;
    this.actionTrigger = actionTrigger && document.querySelector(actionTrigger);
    this.form = null;
    this.submitBtn = null;
    this.userLogout = document.querySelector(".user-menu-logout");
    // ! LOGIC PROPS -----
    this.elements = elements;
    this.formType = formType;
    if (this.formType === "signin") {
      this.userLogin = document.querySelector(".user-login");
      this.userLogin.textContent = getDataFromLS("user")?.login ?? "";
      this.actionTrigger.firstElementChild.textContent = getDataFromLS("user")
        ?.login
        ? ""
        : "login";
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
    );
  }

  getSubmitBtnValue(formType) {
    return formType === "signup" ? "регистрация" : "войти";
  }

  template(container, component, elements, actionTrigger) {
    this.render(container, component, elements)
      .addInputListener()
      .addSubmitListener()
      .addClickListenerToContainer();

    actionTrigger &&
      this.addClickListenerToActionTrigger(
        actionTrigger,
      ).addClickListenerToUserLogout();
  }

  render(container, component, elements) {
    draw(container, component(elements, this.formType, this.submitBtnValue));
    this.form = container.querySelector(`.authForm`);
    this.submitBtn = this.form.submit;
    return this;
  }

  addInputListenerHandler = (e) => {
    const { name, value } = e.target;

    const elemData = this.elements.find((ed) => ed.name === name);

    if (elemData.regExp.test(value)) {
      this.state[name] = value;
      e.target.nextElementSibling.classList.remove("active");
    } else {
      e.target.nextElementSibling.classList.add("active");
      this.state[name] = "";
    }

    Object.values(this.state).every((v) => v)
      ? (this.submitBtn.disabled = false)
      : (this.submitBtn.disabled = true);
  };

  addInputListener() {
    this.form?.addEventListener("input", this.addInputListenerHandler);
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

    let res = await Api[this.formType](body);

    if (!(res instanceof Object)) return this.reset(res);

    if (this.formType === "signin") {
      this.signIn(res);
      this.reset("Вход прошел успешно!");
      return setTimeout(() => {
        this.container.classList.toggle("active");
      }, 2000);
    }
    this.reset("Пользователь зарегистрирован. Требуется вход в систему!");
    setTimeout(() => {
      location.replace("./main.html");
    }, 2000);
  };

  addSubmitListener() {
    this.form?.addEventListener("submit", this.addSubmitListenerHandler);
    return this;
  }

  addClickListenerToContainerHandler = (e) => {
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

  async logout() {
    this.actionTrigger.firstElementChild.textContent = "login";
    this.userLogin.textContent = "";
    const token = await getToken();
    await Api.logout(token);
    setDataToLS("user", null);
  }

  signIn(res) {
    this.actionTrigger.firstElementChild.textContent = "";
    this.userLogin.textContent = res?.user?.login;
    setDataToLS("user", {
      login: res?.user?.login,
      token: res?.accessToken,
      exp: res.exp || null,
      id: res?.user?.id || null
    });
  }

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

  reset(res) {
    this.form.reset();
    this.state = this.getInitState(this.elements);
    this.submitBtn.disabled = true;
    this.submitBtn.value = this.submitBtnValue;
    this.submitBtn.nextElementSibling.classList.toggle("active");
    this.submitBtn.nextElementSibling.textContent = res;
  }

  getInitState(elements) {
    return elements
      .slice(0, -1)
      .reduce((acc, el) => ({ ...acc, [el.name]: "" }), {});
  }

  addClickListenerToUserLogout = () => {
    this.userLogout.onclick = () => this.logout();
  };
}

export { Auth };
