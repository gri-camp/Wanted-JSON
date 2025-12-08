// utils
import { draw, getHTMLFromList } from "../helpers/helpers.js";

class AuthForm {
  constructor({ container, component, elements, target = "signUp" }) {
    this.container = container;
    this.component = component;
    this.elements = elements;
    this.submitValues = {
      signIn: "войти",
      signUp: "регистрация",
    };
    if (!((target === "signUp") | (target === "signIn")))
      throw new Error("Incorrect target parameter value...");
    this.target = target;
    this.form = null;
    this.submitBtn = null;
    this.state = this.getInitState(this.elements);
    // methods
    this.template(this.container, this.component, this.elements);
  }

  template(container, component, elements) {
    this.render(container, component, elements)
      .addInputListener()
      .addSubmitListener();
  }

  render(container, component, elements) {
    const html = getHTMLFromList(
      this.target === "signUp"
        ? elements
        : elements.filter((el) => el.name !== "passСonf"),
      (el) => component(el, this.submitValues[this.target])
    );
    draw(container, `<form class='auth-form'>${html}</form>`);
    this.form = container.querySelector(".auth-form");
    this.submitBtn = this.form.submit;
    return this;
  }

  getInitState(elements) {
    return elements
      .slice(0, -1)
      .reduce((acc, el) => ({ ...acc, [el.name]: "" }), {});
  }

  addInputListenerHandler = (e) => {
    const { name, value } = e.target;

    const elemData = this.elements.find((ed) => ed.name === name);

    if (elemData.regExp.test(value)) {
      this.state[name] = value;
      e.target.nextElementSibling.classList.remove("active");
      if (Object.values(this.state).every((v) => v))
        this.form.submit.disabled = false;
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

  addSubmitListenerHandler = (e) => {
    e.preventDefault();

    if (this.state.pass !== this.state.passСonf) {
      this.submitBtn.nextElementSibling.textContent = "Пароли не совпадают...";
      this.submitBtn.nextElementSibling.classList.add("active");
      return;
    } else {
      this.submitBtn.nextElementSibling.classList.remove("active");
    }

    const body = JSON.stringify(this.state);

    new Promise((res) => {
      this.submitBtn.value = "Загрузка...";
      console.log(body);
      setTimeout(() => {
        this.reset();
      }, 1500);
    });

    setTimeout(() => this.reset(), 1500);
  };

  reset() {
    this.form.reset();
    this.state = this.getInitState(this.elements);
    this.submitBtn.disabled = true;
    this.submitBtn.value = this.submitValues[this.target];
  }

  addSubmitListener() {
    this.form?.addEventListener("submit", this.addSubmitListenerHandler);
    return this.getInitState;
  }
}

export { AuthForm };
