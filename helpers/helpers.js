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
  user?.exp && console.log("Not dead Yet, AccessToken death time: ", new Date(user.exp * 1000).toLocaleTimeString());  
}

export { checkToken, draw, getHTMLFromList, getUserFromLS, setDataToLS };
