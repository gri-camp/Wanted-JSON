// utils
import { draw, getHTMLFromList } from "../helpers/helpers.js";

class Form {
  constructor({ container, component, elements, formCls = 'reg-form' }) {
    this.container = container;
    this.component = component;
    this.elements = elements;
    if (!(formCls === "reg-form" | formCls === "auth-form"))  throw new Error("Invalid 'formCls' param!");
    this.formCls = formCls;    
    this.submitBtnValue = this.getSubmitBtnValue(this.formCls); 
    this.form = null;
    this.submitBtn = null;
    this.state = this.getInitState(this.elements);
    // methods
    this.template(this.container, this.component, this.elements);
   
    
  }

  getSubmitBtnValue(formCls) {
    return formCls === 'reg-form' ? "регистрация" : "войти"
  }

  template(container, component, elements) {
    this.render(container, component, elements)
      .addInputListener()
      .addSubmitListener()
      .addClickListener();
  }
  
  render(container, component, elements) {
    draw(container, component(elements, this.formCls, this.submitBtnValue));
    this.form = container.querySelector(`form`);    
    this.form.username.focus();
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

  addSubmitListenerHandler = (e) => {
    e.preventDefault();

    if (
      this.state.password !== this.state.password2 &&
      this.formCls !== "auth-form"
    ) {
      this.submitBtn.nextElementSibling.textContent = "Пароли не совпадают...";
      this.submitBtn.nextElementSibling.classList.add("active");
      return;
    } else {
      this.submitBtn.nextElementSibling.classList.remove("active");
    }

    const json = JSON.stringify(this.state);

    new Promise((res) => {
      this.submitBtn.value = "Загрузка...";
      setTimeout(() => {
        res(json);
      }, 1500);
    }).then((json) => this.reset());
  };

  addSubmitListener() {
    this.form?.addEventListener("submit", this.addSubmitListenerHandler);
    return this;
  }

  addClickListenerHandler = (e) => {
    if (!e.target.closest('form')) this.container.classList.toggle("active");
    this.submitBtn.nextElementSibling.classList.toggle("active");
    this.submitBtn.nextElementSibling.textContent = "";
  };

  addClickListener() {
    this.container.addEventListener("click", this.addClickListenerHandler);
  }

  reset() {
    this.form.reset();
    this.state = this.getInitState(this.elements);
    this.submitBtn.disabled = true;
    this.submitBtn.value = this.submitBtnValue;
    this.submitBtn.nextElementSibling.classList.toggle("active");
    this.submitBtn.nextElementSibling.textContent =
      "Данные успешно отправлены!";
  }

  getInitState(elements) {
    return elements
      .slice(0, -1)
      .reduce((acc, el) => ({ ...acc, [el.name]: "" }), {});
  }
}

export { Form };
