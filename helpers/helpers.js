import Api from "../service/Api.js";
import { MONTHS } from "../models/models.js";

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
      login: actualUserParams?.user?.login,
      id: actualUserParams?.user?.id,
      accessToken: actualUserParams?.accessToken,
      exp: actualUserParams.exp || null,
    });
    return actualUserParams;
  }
  return currentUserParams;
}

const generateResByid = (id, resSchemes) => {
  const s = resSchemes[id];

  return `
    <strong class='purple'>{</strong>
${Object.keys(s)
  .map((key) => {
    switch (true) {
      case s[key] instanceof Array:
        return `\t${key}: <span class='purple'>[</span>${s[key]
          .map((str) => `"${str}"`)
          .join(", ")}<span class='purple'>]</span>`;
      case s[key] instanceof Object && s[key] !== null:
        return `\t${key}: <span class='purple'>{</span>${Object.keys(s[key])
          .map((k) => `"${[k]}": "${s[key][k]}"`)
          .join(", ")}<span class='purple'>}</span>`;
      default:
        return `\t${key}: ${typeof s[key] === "string" ? `'${s[key]}'` : s[key]}`;
    }
  })
  .join(",\n")}
    <strong class='purple'>}</strong>`;
};

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

export {
  copy,
  draw,
  generateResByid,
  getDataFromLS,
  getHTMLFromList,
  getActualUserAuthParams,
  getTokenDeathTimeValue,
  setDataToLS,
};
