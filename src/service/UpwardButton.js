// utils
import { draw } from "../helpers/helpers.js";

class UpwardButton {
  constructor({ Component }) {
    this.$html = document.documentElement;
    this.Component = Component;
    this.$upwardBtn = null;
    this.checkpoint = 700;
    // Methods:
    this.render(this.Component)
      .addListenerToUpwardBtn(this.$upwardBtn)
      .addListenerToWindow();
  }

  render(Component) {
    const html = Component();
    draw(document.body, html);
    this.$upwardBtn = document.body.querySelector(".upwardBtn");
    return this;
  }

  addListenerToUpwardBtnHandler = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  addListenerToUpwardBtn(btn) {
    btn.addEventListener("click", this.addListenerToUpwardBtnHandler);
    return this;
  }

  addListenerToWindowHandler = (e) => {
    const offset = window.scrollY;
    if (
      offset > this.checkpoint &&
      !this.$upwardBtn.className.includes("active")
    ) {
      this.$upwardBtn.classList.toggle("active");
    }
    if (
      offset < this.checkpoint &&
      this.$upwardBtn.className.includes("active")
    ) {
      this.$upwardBtn.classList.toggle("active");
    }
  };

  addListenerToWindow($html) {
    window.addEventListener("scroll", this.addListenerToWindowHandler);
    return this;
  }
}

export { UpwardButton };
