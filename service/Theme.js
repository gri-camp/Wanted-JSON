class Theme {
  constructor({ trigger, root }) {
    this.root = root;
    this.trigger = document.querySelector(trigger);
    this.currTheme = this.getTheme();
    this.setRootTheme(this.currTheme);
    if (!trigger) return;
    this.setThemeIcon(this.currTheme);
    this.addListenerToTrigger(this.trigger);
  }

  setRootTheme = (theme) => {
    ["color", "bg", "card-bg", "shadow"].forEach((prop) =>
      this.root?.style.setProperty(
        `--app-default-${prop}`,
        `var(--app-${theme}-${prop})`,
      ),
    );
  };

  setThemeIcon = (theme) => {
    this.trigger.firstElementChild.textContent = `${theme}_mode`;
  };

  saveTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  getTheme() {
    return localStorage.getItem("theme") || "dark";
  }

  changeCurrTheme = (theme) => {
    this.currTheme = theme === "dark" ? "light" : "dark";
  };

  addListenerToTriggerHandler = () => {
    [
      this.changeCurrTheme,
      this.setRootTheme,
      this.saveTheme,
      this.setThemeIcon,
    ].forEach((method) => method(this.currTheme));
  };

  addListenerToTrigger(trigger) {
    trigger.addEventListener("click", this.addListenerToTriggerHandler);
  }
}

export { Theme };
