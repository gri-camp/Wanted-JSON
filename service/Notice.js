import { draw } from "../helpers/helpers.js";

class Notice {
  constructor({ msg, styleString = "", Component }) {
    this.body = document.body;
    this.noticeModalExit = null;
    this.noticeModal = null;
    this.msg = msg;
    this.Component = Component;
    this.styleString = styleString;
    // this.delay = null;
    // this.timer = null;
    this.templator(this.body, this.msg, this.styleString, this.Component);
  }

  templator(body, msg, styleString, Component) {
    this.render(body, Component, msg)
      .addstyleStringToNoticeModal(styleString, this.noticeModal)
      .noticeModalShow()
      .addClickListenerToNoticeModalExit(
        this.noticeModalExit,
        this.noticeModal,
      )
    //   .clearTimers();
  }

  render(body, Component, msg) {
    draw(body, Component(msg));
    this.noticeModal = body.querySelector(".noticeModal");
    this.noticeModalExit = this.noticeModal.querySelector(".noticeModal-exit");
    return this;
  }

  noticeModalShow() {
    setTimeout(() => {
      this.noticeModal.classList.toggle("active");
    }, 100);
    setTimeout(() => {
      this.noticeModal.classList.remove("active");
    }, 6000);
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

//   clearTimers() {
//     clearTimeout(this.timer)
//     clearTimeout(this.delay)
//   }
}

export { Notice };
