// utils
import { draw } from "../helpers/helpers.js";

class Menu {
  constructor({ list, Component }) {
    this.$header_el = document.querySelector(".header");
    this.$burger = this.$header_el.querySelector(".burger");
    this.$nav_el = null;
    this.list = list;
    this.Component = Component;
    this.menuLinks = null;
    // Methods:
    this.render(
      this.$header_el,
      this.list,
      this.Component
    ).addListenerToHeader(this.$header_el, this.list);
  }

  render(header_el, list, Component) {
    const html = Component(list);
    draw(header_el, html);
    this.menuLinks = header_el.querySelectorAll(".menu-link");
    this.$nav_el = header_el.querySelector(".header-nav");    
    return this;
  }

  addListenerToHeaderHandler = (e) => {
    if (e.target.href) {
      return;
    } else if (e.target.closest(".burger")) {
      this.$nav_el.classList.toggle("active");
    } else if (!e.target.matches(".menu-link")) {
      this.$nav_el.classList.remove("active");
    } else {
      const { id } = e.target;
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      this.hilightChosenLink(this.menuLinks, e.target);
      this.$nav_el.classList.toggle("active");
    }
  };

  hilightChosenLink(links, link) {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  }

  addListenerToHeader(container) {
    container.addEventListener("click", this.addListenerToHeaderHandler);
    return this;
  }
}

export { Menu };
