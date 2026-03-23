import {
  draw,
  getDataFromLS,
  getHTMLFromList,
  setDataToLS,
} from "../helpers/helpers.js";
import Components from "./Components.js";

export class Quiz {
  constructor({ list, Component }) {
    this.container = document.querySelector(".quiz");
    this.restart = document.body.querySelector(".restart");
    this.finish = document.body.querySelector(".done");
    this.isDone = false;
    this.output = document.body.querySelector("pre");
    this.inputs = null;
    this.list = list;
    this.Component = Component;
    this.userAnswers = getDataFromLS("userAnswers") ?? {};
    this.userResult = {
      t: 0,
      f: 0,
    };
    this.render(
      this.container,
      this.list,
      this.Component,
      this.userAnswers,
      this.checkUserAnswer.bind(this),
      this.isDone,
    );
    this.addChangeListenerToContainer(this.container);
    this.addEventListenerToRestart(this.restart);
    this.addEventListenerToFinish(this.finish);
  }

  render(Container, list, Component, userAnswers, checkUserAnswer, isDone) {    
    const html = getHTMLFromList(list, (i) =>
      Component(i, userAnswers, checkUserAnswer, isDone),
    );
    draw(Container, html);
    this.inputs = Container.querySelectorAll("input");
  }

  addChangeListenerToContainerHandler = (e) => {
    const { id, value, checked, type } = e.target;

    if (type === "radio") this.userAnswers[id] = [+value];
    else if (checked) {
      if (this.userAnswers[id]) {
        this.userAnswers[id] = [+value, ...this.userAnswers[id]];
      } else {
        this.userAnswers[id] = [+value];
      }
    } else {
      this.userAnswers[id] = this.userAnswers[id].filter((a) => a !== +value);
      !this.userAnswers[id].length && delete this.userAnswers[id];
    }

    console.log(this.userAnswers);

    setDataToLS("userAnswers", this.userAnswers);
  };

  addChangeListenerToContainer = (Container) => {
    Container.addEventListener(
      "change",
      this.addChangeListenerToContainerHandler,
    );
  };

  addEventListenerToRestart(restart) {
    restart.onclick = () => {
      this.userAnswers = {};
      this.inputs.forEach((i) => (i.checked = false));
      Object.keys(this.userResult).forEach((k) => (this.userResult[k] = 0));
      this.container
        .querySelectorAll(".quizItem-answer")
        .forEach((ans) => (ans.className = "quizItem-answer"));
      this.isDone = false;
      setDataToLS("userAnswers", null);
      this.printResult("");
      // this.restart.disabled = true;
    };
  }

  addEventListenerToFinish(finish) {
    finish.onclick = () => {
      if (this.isDone) return false;
      if (!this.list.every(({ id }) => this.userAnswers[id])) return this.printResult("Пожалуйста, ответьте на все вопросы...");
      this.isDone = true;
      // this.restart.disabled = false;
      this.analyzeAnswers();
    };
  }

  checkUserAnswer(correct, userAnswer) {
    if (correct.length !== userAnswer?.length) return false;
    userAnswer.sort((a, b) => a - b);
    for (let i = 0; i < correct.length; i++) {
      if (correct[i] !== userAnswer[i]) return false;
    }
    return true;
  }

  cleanQuizContainer(container) {
    container.innerHTML = "";
  }

  analyzeAnswers() {
    this.list.forEach(({ id, correct }) => {
      this.checkUserAnswer(correct, this.userAnswers[id])
        ? (this.userResult.t += 1)
        : (this.userResult.f += 1);
    });
    this.cleanQuizContainer(this.container);
    this.render(
      this.container,
      this.list,
      this.Component,
      this.userAnswers,
      this.checkUserAnswer,
      this.isDone,
    );
    this.printResult(Components.QUIZ_RESULT(this.userResult, this.list));
  }

  printResult(msg) {
    this.output.innerHTML = msg;
  }
}
