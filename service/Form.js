// utils
import { draw } from "../helpers/helpers.js";
// service
import Api from "./Api.js";

class Form {
  constructor({
    container,
    component,
    elements,
    formType = "signup",
    triggerIcon,
  }) {
    this.container = container;
    this.component = component;
    this.elements = elements;
    if (!((formType === "signin") | (formType === "signup")))
      throw new Error("Invalid 'formType' param!");
    this.formType = formType;
    this.submitBtnValue = this.getSubmitBtnValue(this.formType);
    this.form = null;
    this.submitBtn = null;
    this.passCompareError = new Error("пароли не совпадают!");
    this.triggerIcon = document.querySelector(triggerIcon);
    this.state = this.getInitState(this.elements);
    // methods
    this.template(this.container, this.component, this.elements, this.triggerIcon);
    
  }

  getSubmitBtnValue(formType) {
    return formType === "signup" ? "регистрация" : "войти";
  }

  template(container, component, elements, triggerIcon) {
    this.render(container, component, elements)
      .addInputListener()
      .addSubmitListener()
      .addClickListenerToContainer()
      .addClickListenerToAuthIcon(triggerIcon);
  }

  render(container, component, elements) {
    draw(container, component(elements, this.formType, this.submitBtnValue));
    this.form = container.querySelector(`form`);
    this.submitBtn = this.form.submit;
    return this;
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

  addSubmitListenerHandler = async (e) => {
    e.preventDefault();

    if (
      this.state.password !== this.state.password2 &&
      this.formType === "signup"
    ) {
      this.submitBtn.nextElementSibling.textContent = this.passCompareError.message;
      this.submitBtn.nextElementSibling.classList.add("active");
      return;
    } else {
      this.submitBtn.nextElementSibling.classList.remove("active");
    }

    const body = { login: this.state.login, password: this.state.password };

    this.submitBtn.value = "Загрузка...";

    let res = await Api[this.formType](this.formType, body);

    const msg = typeof res === "object" ? "успешно" : res;

    this.reset(msg);
  };

  addSubmitListener() {
    this.form?.addEventListener("submit", this.addSubmitListenerHandler);
    return this;
  }

  addClickListenerToContainerHandler = (e) => {
    if (!e.target.closest("form")) this.container.classList.toggle("active");
    this.submitBtn.nextElementSibling.classList.toggle("active");
    this.submitBtn.nextElementSibling.textContent = "";
  };

  addClickListenerToContainer() {
    this.container.addEventListener(
      "click",
      this.addClickListenerToContainerHandler
    );
    return this;
  }

  addClickListenerToAuthIcon(icon) {
    icon.addEventListener("click", () =>
      this.container.classList.toggle("active")
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
}

export { Form };
