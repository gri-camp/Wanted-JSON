import { LOCALE_OPTIONS } from "../models/models.js";
import Api from "../service/Api.js";

const draw = (container, html) =>
  container.insertAdjacentHTML("beforeend", html);

const getHTMLFromList = (list, callback) => list.map(callback).join("");

const getDataFromLS = (key) => JSON.parse(localStorage.getItem(key)) || null;

const setDataToLS = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const getDataFromSS = (key) => JSON.parse(sessionStorage.getItem(key)) || null;

const setDataToSS = (key, data) => sessionStorage.setItem(key, JSON.stringify(data));

async function getActualUserAuthParams() {
  const currentUserParams = getDataFromLS("user");
  if (Date.now() >= currentUserParams.exp * 1000) {
    let actualUserParams = await Api.refresh();
    setDataToLS("user", {
      ...currentUserParams,
      accessToken: actualUserParams?.accessToken || null,
      exp: actualUserParams.exp || null,
    });
    return actualUserParams;
  }
  return currentUserParams;
}

const copy = async (target, copyStatus) => {
  const codeExample = target.textContent;
  const selection = document.getSelection();
  selection.removeAllRanges();

  try {
    copyStatus.textContent = "скопировано";
    copyStatus.classList.toggle("success");
    await navigator.clipboard.writeText(codeExample);
  } catch (error) {
    const range = document.createRange();
    range.selectNodeContents(target);
    selection.addRange(range);
    document.execCommand("copy");
  } finally {
    setTimeout(() => {
      selection.removeAllRanges();
      copyStatus.textContent = "копировать";
      copyStatus.classList.toggle("success");
    }, 1500);
  }
};

const getTokenDeathTimeValue = (expires) => {
  const accessTokenDeathTime = new Date(expires * 1000);
  return accessTokenDeathTime.toLocaleTimeString("ru-RU", LOCALE_OPTIONS);
};

async function fetchAuthRequest(spinner, method, payload) {
  spinner.classList.toggle("active");
  let res = await Api[method](payload);
  spinner.classList.toggle("active");
  return res;
}

const debouncer = (cb, delay) => {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => cb(...args), delay);
  };
};

const dateFormatter = (utcStr) => {
  if (typeof Temporal) {
    return Temporal.Instant.from(utcStr).toLocaleString(
      "ru-RU",
      LOCALE_OPTIONS,
    );
  }
  return new Date(utcStr).toLocaleString("ru-RU", LOCALE_OPTIONS);
};

const isUserSignedIn = (container, page) => {
  if (!getDataFromLS("user")?.accessToken) {
    page !== "index" && showUnregisteredHTML(container, page);
    return false;
  }
  return true;
};

function showUnregisteredHTML(container) {
  container.innerHTML = `<h1 class='h1'>Вы не вошли в систему</h1>`;
  window.setTimeout(() => location.replace("./main.html"), 2000);
}

export {
  copy,
  dateFormatter,
  debouncer,
  draw,
  fetchAuthRequest,
  getActualUserAuthParams,
  getDataFromLS,
  getHTMLFromList,
  getTokenDeathTimeValue,
  setDataToLS,
  getDataFromSS,
  setDataToSS,
  isUserSignedIn,
};
