import { LOCALE_OPTIONS, MONTHS } from "../models/models.js";
import Api from "../service/Api.js";

const draw = (container, html) =>
  container.insertAdjacentHTML("beforeend", html);

const getHTMLFromList = (list, callback) => {
  return list.map(callback).join("");
};

const getDataFromLS = (key) => JSON.parse(localStorage.getItem(key)) || null;

const setDataToLS = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

async function getActualUserAuthParams() {
  const currentUserParams = getDataFromLS("user");
  if (Date.now() >= currentUserParams.exp * 1000) {
    let actualUserParams = await Api.refresh();
    setDataToLS("user", {
      ...currentUserParams,
      login: actualUserParams?.user?.login || null,
      id: actualUserParams?.user?.id || null,
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

const getTokenDeathTimeValue = (exp) => {
  const accessTokenDeathTime = new Date(exp * 1000);
  return `${accessTokenDeathTime.toLocaleTimeString()} часов, ${accessTokenDeathTime.getDate()} ${MONTHS[accessTokenDeathTime.getMonth()]} ${accessTokenDeathTime.getFullYear()} г.`;
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
};
