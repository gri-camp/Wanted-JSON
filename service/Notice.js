import { draw } from "../helpers/helpers.js";

class Notice {
    constructor({msg, styleString, trigger, Component}) {
        this.body = document.body;
        this.trigger = document.body.querySelector(trigger);
        this.noticeModalClose = null;
        this.noticeModal = null;
        this.msg = msg;
        this.Component = Component;
        this.styleString = styleString;
        
        this.templator(this.body, this.msg, this.styleString, this.trigger, this.Component);
    }

    templator(body, msg, styleString, trigger, Component) {
        this
            .renderNoticeModal(body, Component)
            .addMsg(msg, this.noticeModal)
            .addstyleStringToNoticeModal(styleString, this.noticeModal)
            .addClickListenerToTrigger(trigger, this.noticeModal)
            .addClickListenerToNoticeModalClose(this.noticeModalClose, this.noticeModal, trigger);
    }

    renderNoticeModal(body, Component) {
        draw(body, Component);
        this.noticeModal = body.querySelector('.noticeModal');
        this.noticeModalClose = this.noticeModal.querySelector('.noticeModal-close');
        return this;
    }

    addMsg(msg, noticeModal) {
        noticeModal.querySelector('.noticeModal-text').textContent = msg;
        return this;
    }

    addstyleStringToNoticeModal(styleString, noticeModal) {
        noticeModal.setAttribute('style', styleString);
        // console.log(noticeModal.style);        
        return this;
    }

    addClickListenerToTrigger(trigger, noticeModal) {
        trigger.addEventListener('click', () => {
            trigger.classList.remove('active');
            noticeModal.classList.toggle('active');
        })
        return this;
    }

    addClickListenerToNoticeModalClose(exit, noticeModal, trigger) {
        exit.addEventListener('click', () => {
            noticeModal.classList.toggle('active');
            trigger.remove()
        }) 
        
    }
}

export {Notice};