// utils
import { draw } from "../helpers/helpers.js";

class Menu {
  constructor({ list, Component }) {
    this.$body_el = document.body;
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
      this.Component,
    ).addListenerToContainer(this.$body_el, this.list);
  }

  render(header_el, list, Component) {
    const html = Component(list);
    draw(header_el, html);
    this.menuLinks = header_el.querySelectorAll(".header-menu-link");
    this.$nav_el = header_el.querySelector(".header-nav");
    return this;
  }

  addListenerToContainerHandler = (e) => {
    if (e.target.href) {
      return;
    } else if (e.target.closest(".burger")) {
      this.$nav_el.classList.toggle("active");
    } else if (
      !e.target.matches(".header-menu-link") &&
      this.$nav_el.classList.contains("active")
    ) {
      this.$nav_el.classList.remove("active");
    } else if (e.target.matches(".header-menu-link")) {
      const { id } = e.target;
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      this.hilightChosenLink(this.menuLinks, e.target);
      this.$nav_el.classList.toggle("active");
    } else {
      return;
    }
  };

  hilightChosenLink(allLinks, targetLink) {
    allLinks.forEach((l) => l.classList.remove("active"));
    targetLink.classList.add("active");
  }

  addListenerToContainer(container) {
    container.addEventListener("click", this.addListenerToContainerHandler);
    return this;
  }
}

export { Menu };
