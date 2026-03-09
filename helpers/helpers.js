import Api from "../service/Api.js";

const draw = (container, html) =>
  container.insertAdjacentHTML("beforeend", html);

const getHTMLFromList = (list, callback) => list.map(callback).join("");

const setDataToLS = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

const getUserFromLS = (key) => JSON.parse(localStorage.getItem(key)) || null;

async function checkToken() {
  const user = getUserFromLS("user");
  if (Date.now() >= user?.exp * 1000) {
    let res = await Api.refresh();
    return res instanceof Object
      ? setDataToLS("user", {
          ...user,
          token: res?.accessToken,
          exp: res?.exp,
        })
      : console.error(res);
  }
  user?.exp &&
    console.log(
      "Not dead Yet, AccessToken death time: ",
      new Date(user.exp * 1000).toLocaleTimeString(),
    );
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

const getSchemesToolbarConfig = () => {
  return {
    cls: "btn-success",
    scheme: {
      req: "запрос",
      res: "ответ",
      err: "ошибка",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">data_object</span>',
    ErrBtn: '<span class="material-icons-round">error</span>',
  };
};

export {
  checkToken,
  draw,
  generateResByid,
  getHTMLFromList,
  getSchemesToolbarConfig,
  getUserFromLS,
  setDataToLS
};
