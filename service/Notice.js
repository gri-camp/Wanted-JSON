import { draw } from "../helpers/helpers.js";

class Notice {
  constructor({ msg, styleString = "", Component }) {
    this.body = document.body;
    this.noticeModalExit = null;
    this.noticeModal = null;
    this.msg = msg;
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
    draw(body, Component(msg));
    this.noticeModal = body.querySelector(".noticeModal");
    this.noticeModalExit = this.noticeModal.querySelector(".noticeModal-exit");
    return this;
  }

  noticeModalShow(delay) {
    setTimeout(() => {
      this.noticeModal.classList.toggle("active");
    }, 0);
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
