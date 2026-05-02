import { draw, getDataFromSS, setDataToSS } from "../helpers/helpers.js";

class Notice {
  constructor({ styleString = "", Component, key }) {
    this.body = document.body;
    this.noticeModalExit = null;
    this.noticeModal = null;
    this.noticeModalText = null;
    // logic
    this.key = key;
    this.Component = Component;
    this.styleString = styleString;
    this.templator(this.body, this.msg, this.styleString, this.Component);
  }

  templator(body, msg, styleString, Component) {
    this.render(body, Component, msg)
      .addstyleStringToNoticeModal(styleString, this.noticeModal)
      .addClickListenerToNoticeModalExit(
        this.noticeModalExit,
        this.noticeModal,
      );
  }

  render(body, Component, msg) {
    draw(body, Component());
    this.noticeModal = body.querySelector(".noticeModal");
    this.noticeModalExit = this.noticeModal.querySelector(".noticeModal-exit");
    this.noticeModalText = this.noticeModal.querySelector(".noticeModal-text");
    return this;
  }

  noticeModalShow(msg, delay) {
    if (getDataFromSS(this.key)) return;
    setDataToSS(this.key, msg);
    setTimeout(() => {
      this.noticeModalText.textContent = msg;
      this.noticeModal.classList.toggle("active");
    }, delay);
    return this;
  }

  addstyleStringToNoticeModal(styleString, noticeModal) {
    noticeModal.setAttribute("style", styleString);
    return this;
  }

  addClickListenerToNoticeModalExit(exit, noticeModal) {
    exit.addEventListener("click", () =>
      noticeModal.classList.remove("active"),
    );
    return this;
  }
}

export { Notice };
